import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik, FieldArray } from 'formik';
import EditFormLayout from './ArrayEditFormLayout';
import FlexLayout from '../../../atoms/FlexLayout';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import Button from '../../../atoms/Button';
import { updateClubs, updateResults } from '../../../../actions';
import { nameValidation, urlValidation } from '../../../../validations';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { deleteValues, arrayToString } from '../../../../utils/constant/text/form';
import useDialog from '../../../../hooks/dialog';

interface Props {
  checkedClubs: ArrayClubType;
  checkedResults: ArrayResultType;
  currentUser: UserType;
  theme: 'club' | 'result';
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
const StyledLi = styled.li`
  list-style: inside;
  font-size: ${FONTSIZE.BASE}px;
`;

const thisYear = new Date().getFullYear();
const thisMonth = new Date().getMonth() + 1;

const editTitles = { club: 'クラブ', result: '競技実績' };
const editSubTitles = { club: '使用クラブ', result: '競技結果' };
const AddButtonText = { club: ['クラブを追加'], result: ['競技結果を追加'] };
const buttonValue = { club: 'クラブを登録・編集する。', result: '競技結果を登録・削除する。' };

const caution = {
  club: (
    <ul>
      <StyledLi>編集ボタンを押さずページを切替えれば、削除データは元に戻ります。</StyledLi>
    </ul>
  ),
  result: (
    <ul>
      <StyledLi>編集ボタンを押さずページを切替えれば、削除データは元に戻ります。</StyledLi>
      <StyledLi>詳細結果には、webページのURLすべてを貼り付けてください。</StyledLi>
    </ul>
  ),
};
const ArrayEditForm: React.FC<Props> = ({ currentUser, checkedClubs, checkedResults, theme }) => {
  const { ref, showDialog, closeDialog } = useDialog();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
  const initialValuesData = {
    club: { formikValues: checkedClubs },
    result: { formikValues: checkedResults },
  };
  const formikKey = Object.keys(initialValuesData[theme])[0];
  const currentValues = initialValuesData[theme];

  const [count, setCount] = useState<number>(currentValues.formikValues.length);
  const addCount = () => {
    setCount(count + 1);
  };
  const subCount = () => {
    setCount(count - 1);
  };

  const addItem = {
    club: {
      name: '',
      userId: currentUser.id,
      type: '1WOOD',
      maker: 'タイトリスト',
      shaft: '純正シャフト',
      flex: 'R',
    },
    result: {
      name: '',
      userId: currentUser.id,
      url: '',
      year: thisYear,
      month: thisMonth,
      tie: '',
      rank: '1',
    },
  };

  const arrayValidation = {
    club: () =>
      yup.object({
        formikValues: yup.array().of(
          yup.object().shape({
            name: nameValidation(),
          })
        ),
      }),
    result: () =>
      yup.object({
        formikValues: yup.array().of(
          yup.object().shape({
            name: nameValidation(),
            url: urlValidation(),
          })
        ),
      }),
  };

  const onSubmit = {
    club: (values: FormikValueType<typeof currentValues.formikValues>) => {
      let editClubValues: PartialArrayClubType = [];
      const submitValues = values.formikValues;
      console.log(submitValues);
      const deleteTargetValues = deleteValues(currentValues.formikValues, submitValues);
      //update,create,deleteするクラブを配列にする。
      editClubValues = [...submitValues, ...deleteTargetValues];
      dispatch(updateClubs(editClubValues));
    },
    result: (values: FormikValueType<typeof currentValues.formikValues>) => {
      let editResultValues: PartialArrayResultType = [];
      const baseSubmitValues = values.formikValues;
      // checkboxのvalueが["T"],[""]となっているため、stringへ戻す。
      const submitValues = arrayToString(baseSubmitValues);
      // ojbectに変化がなければ、return
      const deleteTargetValues = deleteValues(currentValues.formikValues, submitValues);
      //update,create,deleteするResultを配列にする。
      editResultValues = [...submitValues, ...deleteTargetValues];
      dispatch(updateResults(editResultValues));
    },
  };
  return (
    <Formik<FormikValueType<typeof currentValues.formikValues>>
      initialValues={currentValues}
      validationSchema={arrayValidation[theme]}
      onSubmit={onSubmit[theme]}
    >
      {({ dirty }) => (
        <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
          <Form>
            <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
              <FormTitle>{editTitles[theme]}</FormTitle>
              <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                <FlexLayout
                  justifyContent={JUSTIFYCONTENT.START}
                  width={SIZE.XXXSMALL}
                  alignItems={ALIGNITEMS.START}
                  left={
                    <Padding left={CLEAR.TINY}>
                      <StyledLabel>{editSubTitles[theme]}</StyledLabel>
                    </Padding>
                  }
                  right={
                    <FieldArray
                      name={formikKey}
                      render={({ remove, push }) => {
                        const checkaddItem = {
                          club: () => {
                            if (count > 12) {
                              return;
                            }
                            addCount();
                            push(addItem[theme]);
                          },
                          result: () => {
                            if (count > 19) {
                              return;
                            }
                            addCount();
                            push(addItem[theme]);
                          },
                        };
                        return (
                          <Padding
                            top={CLEAR.TINY}
                            right={CLEAR.SMALL}
                            left={CLEAR.SMALL}
                            bottom={CLEAR.TINY}
                          >
                            <StyledTable>
                              <tbody>
                                <EditFormLayout
                                  remove={remove}
                                  formikKey={formikKey}
                                  value={currentValues.formikValues}
                                  theme={theme}
                                  onChange={subCount}
                                />
                              </tbody>
                            </StyledTable>
                            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                              <Button
                                color={BASICCOLORS.WHITE}
                                pHeight={CLEAR.TINY}
                                pWidth={CLEAR.TINY}
                                fontSize={FONTSIZE.SMALL}
                                onClick={checkaddItem[theme]}
                              >
                                {AddButtonText[theme]}
                              </Button>
                            </Padding>
                          </Padding>
                        );
                      }}
                    />
                  }
                />
              </Padding>
              {dirty && (
                <FormSubmit closeDialog={closeDialog} showDialog={showDialog} propsRef={ref}>
                  {buttonValue[theme]}
                </FormSubmit>
              )}
              {caution[theme]}
            </Padding>
          </Form>
        </Padding>
      )}
    </Formik>
  );
};

export default ArrayEditForm;
