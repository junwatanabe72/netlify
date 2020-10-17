import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, Formik, FieldArray } from 'formik';
import VideoEditFormItem from './VideoEditFormItem';
import FlexLayout from '../../../atoms/FlexLayout';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import Button from '../../../atoms/Button';
import Url from '../../../atoms/Url';
import { updateVideos } from '../../../../actions';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { deleteValues } from '../../../../utils/constant/text/form';
import { nameValidation, urlValidation } from '../../../../validations';
import useDialog from '../../../../hooks/dialog';

interface Props {
  currentValues: ArrayVideoType;
  currentUser: UserType;
}

const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const StyledLi = styled.li`
  list-style: inside;
  font-size: ${FONTSIZE.BASE}px;
`;

const StyledSpan = styled.span`
  color: ${BASICCOLORS.BASICDARK};
  font-weight: 600;
`;

const editTitles = 'youtube動画';
const editSubTitles = '登録動画';
const AddButtonText = ['動画を追加'];
const buttonValue = '動画を登録・削除する。';

const videoValidation = () =>
  yup.object({
    formikVideos: yup.array().of(
      yup.object().shape({
        name: nameValidation(),
        url: urlValidation(),
      })
    ),
  });

const caution = (
  <ul>
    <StyledLi>編集ボタンを押さずページを切替えれば、削除データは元に戻ります。</StyledLi>
    <StyledLi>
      「https://www.youtube.com/embed/<StyledSpan>VIDEO_ID</StyledSpan>」の
      <StyledSpan>「VIDEO_ID」のみ</StyledSpan>を動画URLの項目に入力してください。
    </StyledLi>

    <Url
      display={'block'}
      color={BASICCOLORS.SECONDARYLIGHT}
      to={'https://www.howtonote.jp/youtube/usage/index5.html'}
    >
      <StyledLi>VIDEO_IDの確認方法等は、こちらをご参照ください。</StyledLi>
    </Url>
  </ul>
);
const VideoEditForm: React.FC<Props> = ({ currentUser, currentValues }) => {
  const { ref, showDialog, closeDialog } = useDialog();
  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
  const arrayDatas = Object.values(currentValues);

  const [count, setCount] = useState<number>(arrayDatas.length);
  const addCount = () => {
    setCount(count + 1);
  };
  const subCount = () => {
    setCount(count - 1);
  };

  const dispatch = useDispatch();
  const addItem = { name: '', userId: currentUser.id, url: '' };

  const initialValuesData = { formikValues: arrayDatas };
  const formikKey = Object.keys(initialValuesData)[0];

  const onSubmit = (values: FormikValueType<ArrayVideoType>) => {
    let editVideos: PartialArrayVideoType = [];
    const submitValues = values.formikValues;
    const deleteTargetValues = deleteValues(currentValues, submitValues);

    //update,create,deleteするvideoを配列にする。
    editVideos = [...submitValues, ...deleteTargetValues];
    dispatch(updateVideos(editVideos));
  };

  return (
    <Formik<FormikValueType<ArrayVideoType>>
      initialValues={initialValuesData}
      validationSchema={videoValidation}
      onSubmit={onSubmit}
    >
      {({ dirty }) => (
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
                    <FieldArray
                      name={formikKey}
                      render={({ remove, push }) => {
                        const checkaddItem = () => {
                          if (count > 3) {
                            return;
                          }
                          addCount();
                          push(addItem);
                        };

                        return (
                          <Padding
                            top={CLEAR.TINY}
                            right={CLEAR.SMALL}
                            left={CLEAR.SMALL}
                            bottom={CLEAR.TINY}
                          >
                            <VideoEditFormItem
                              remove={remove}
                              currentVideos={arrayDatas}
                              formikKey={formikKey}
                              onChange={subCount}
                            />
                            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                              <Button
                                color={BASICCOLORS.WHITE}
                                pHeight={CLEAR.TINY}
                                pWidth={CLEAR.TINY}
                                fontSize={FONTSIZE.SMALL}
                                onClick={checkaddItem}
                              >
                                {AddButtonText}
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
                  {buttonValue}
                </FormSubmit>
              )}
              {caution}
            </Padding>
          </Form>
        </Padding>
      )}
    </Formik>
  );
};

export default VideoEditForm;
