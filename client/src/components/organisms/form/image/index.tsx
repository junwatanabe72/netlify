import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import InputItem from './InputItem';
import FormTitle from '../../../atoms/form/FormTitle';
import FormSubmit from '../../../atoms/form/FormSubmit';
import { updateImageUser } from '../../../../actions';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR, FONTSIZE } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import useDialog from '../../../../hooks/dialog';

interface Props {
  currentUser: UserType;
}

const StyledForm = styled.form``;

const StyledLi = styled.li`
  list-style: inside;
  font-size: ${FONTSIZE.BASE}px;
`;

const StyledSpan = styled.span`
  color: ${BASICCOLORS.BASICDARK};
  font-weight: 600;
`;
const items = {
  profileImage: 'profileImage',
  clubImage: 'clubImage',
};
const editTitle = 'イメージ';
const buttonValue = 'イメージを変更する。';
const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const caution = (
  <ul>
    <StyledLi>
      <StyledSpan>「image/jpg, image/jpeg, image/gif, image/png」</StyledSpan>のみ。
    </StyledLi>
    <StyledLi>
      ファイル容量は<StyledSpan>5MG</StyledSpan>まで。
    </StyledLi>
  </ul>
);
const ImageEditForm: React.FC<Props> = ({ currentUser }) => {
  const { ref, showDialog, closeDialog } = useDialog();
  const dispatch = useDispatch();
  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
  const initialValuesData = {
    profileImage: currentUser.profileImage,
    clubImage: currentUser.clubImage,
  };

  const imageValidation = () =>
    yup.object().shape({
      profileImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (!value || value === currentUser.profileImage) {
            return true;
          }
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (!value || value === currentUser.profileImage) {
            return true;
          }
          return SUPPORTED_FORMATS.includes(value.type);
        }),
      clubImage: yup
        .mixed()
        .test('fileSize', 'ファイル容量が大きすぎます。', (value) => {
          if (!value || value === currentUser.clubImage) {
            return true;
          }
          return value.size <= FILE_SIZE;
        })
        .test('fileFormat', '画像形式が違います。', (value) => {
          if (!value || value === currentUser.clubImage) {
            return true;
          }
          return SUPPORTED_FORMATS.includes(value.type);
        }),
    });

  const onSubmit = async (values: PartialImageUserType) => {
    const formData = new FormData();
    if (values.profileImage !== currentUser.profileImage && values.profileImage !== undefined) {
      formData.append('profileImage', values.profileImage);
    }
    if (values.clubImage !== currentUser.clubImage && values.clubImage !== undefined) {
      formData.append('clubImage', values.clubImage);
    }
    formData.append('id', String(currentUser.id));
    dispatch(updateImageUser(formData));
  };
  const formik = useFormik({
    initialValues: { ...initialValuesData },
    validationSchema: imageValidation,
    onSubmit: onSubmit,
  });
  return (
    <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Padding top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
          <FormTitle>{editTitle}</FormTitle>
          {Object.values(items).map((key: string, num: number) => {
            return <InputItem key={num} formik={formik} valueKey={key} currentUser={currentUser} />;
          })}
        </Padding>
        {formik.dirty && (
          <FormSubmit closeDialog={closeDialog} showDialog={showDialog} propsRef={ref}>
            {buttonValue}
          </FormSubmit>
        )}
        {caution}
      </StyledForm>
    </Padding>
  );
};

export default ImageEditForm;
