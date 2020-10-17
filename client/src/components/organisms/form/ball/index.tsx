import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import BallEditFormLayout from './BallEditFormLayout';
import FlexLayout from '../../../atoms/FlexLayout';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import { updateBall } from '../../../../actions';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import useDialog from '../../../../hooks/dialog';

interface Props {
  userBall: BallType;
}

const StyledTable = styled.table`
  width: ${SIZE.MEDIUM}vw;
  border: solid 1px #ccc;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: 60vw;  
      `}
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const editTitles = 'ボール';
const editSubTitles = '使用ボール';
const buttonValue = 'ボールを編集する。';

const ballValidation = () =>
  yup.object().shape({
    name: yup.string().required('必須項目です').max(15, '15字以下にしてください。'),
  });

const BallEditForm: React.FC<Props> = ({ userBall }) => {
  const { ref, showDialog, closeDialog } = useDialog();
  const dispatch = useDispatch();
  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
  const onSubmit = (values: BallType) => {
    dispatch(updateBall(values));
  };
  return (
    <Formik<BallType>
      initialValues={userBall}
      validationSchema={ballValidation}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleChange, dirty }) => (
        <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
          <Form>
            <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
              <FormTitle>{editTitles}</FormTitle>
              <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                <FlexLayout
                  justifyContent={JUSTIFYCONTENT.START}
                  width={SIZE.XXXSMALL}
                  alignItems={ALIGNITEMS.START}
                  left={
                    <Padding left={CLEAR.TINY}>
                      <StyledLabel>{editSubTitles}</StyledLabel>
                    </Padding>
                  }
                  right={
                    <Padding
                      top={CLEAR.TINY}
                      right={CLEAR.SMALL}
                      left={CLEAR.MEDIUM}
                      bottom={CLEAR.TINY}
                    >
                      <StyledTable>
                        <tbody>
                          <BallEditFormLayout
                            formikBall={values}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                          />
                        </tbody>
                      </StyledTable>
                    </Padding>
                  }
                />
              </Padding>
              {dirty && (
                <FormSubmit closeDialog={closeDialog} showDialog={showDialog} propsRef={ref}>
                  {buttonValue}
                </FormSubmit>
              )}
            </Padding>
          </Form>
        </Padding>
      )}
    </Formik>
  );
};

export default BallEditForm;
