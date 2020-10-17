import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFormik } from 'formik';
import UserEditFormLayout from './UserEditFormLayout';
import FormSubmit from '../../../atoms/form/FormSubmit';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import {
  sexLabels,
  sexValues,
  showLabels,
  showValues,
  classLabels,
  bloodLabels,
  historyLabels,
  classValues,
  bloodValues,
  historyValues,
} from '../../../../utils/constant/text/body/user/value';
import useDialog from '../../../../hooks/dialog';
import { emailValidation, nameValidation } from '../../../../validations';
import { updateUser } from '../../../../actions';

interface Props {
  currentUser: UserType;
}

const StyledForm = styled.form``;
const buttonValue = 'プロフィールを編集する。';
const profileValidation = () =>
  yup.object().shape({
    email: emailValidation(),
    name: nameValidation(),
  });

const values = {
  show: showValues,
  sex: sexValues,
  classification: classValues,
  blood: bloodValues,
  history: historyValues,
};
const clientInitalValue = {
  show: 'close',
  sex: 'male',
  classification: 'ama',
  blood: 'A',
  history: 'A',
};
type ClientInitalValue = typeof clientInitalValue;
const serverInitalValue = {
  show: 100,
  sex: 100,
  classification: 100,
  blood: 1,
  history: 1,
};

const labels = {
  show: showLabels,
  sex: sexLabels,
  classification: classLabels,
  blood: bloodLabels,
  history: historyLabels,
};

const formUserValues = (user: UserType) => {
  const a = Object.entries(values).map(([key, value]) => {
    const b = Object.entries(value).find(
      ([valueKey, data]) => data === user[key as keyof UserType]
    );
    // "male"
    const v = b ? b[0] : clientInitalValue[key as keyof ClientInitalValue];
    const c = Object.entries(labels[key as keyof typeof labels]).find(
      ([valueKey, data]) => valueKey === v
    );
    const z = c ? c[1] : '';
    return z;
  });
  return a;
};

const serializeUserValues = (user: ProfileEditDataType) => {
  const g = Object.entries(labels).map(([key, value]) => {
    const b = Object.entries(value).find(
      ([valueKey, data]) => data === user[key as keyof ProfileEditDataType]
    );
    // "male"
    const v = b ? b[0] : clientInitalValue[key as keyof ClientInitalValue];
    const c = Object.entries(values[key as keyof typeof values]).find(
      ([valueKey, data]) => valueKey === v
    );
    const z = c ? c[1] : serverInitalValue[key as keyof ClientInitalValue];
    return z;
  });
  return g;
};

const UserEditForm: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  const { ref, showDialog, closeDialog } = useDialog();
  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);

  const [show, sex, classification, blood, history] = formUserValues(currentUser);
  const initialValuesData = {
    ...currentUser,
    show,
    sex,
    classification,
    blood,
    history,
    confirmedPassword: currentUser.password,
  };
  const onSubmit = (formikValues: ProfileEditDataType) => {
    const [show, sex, classification, blood, history] = serializeUserValues(formikValues);
    dispatch(
      updateUser({
        ...formikValues,
        show,
        sex,
        classification,
        blood,
        history,
      })
    );
  };

  const formik = useFormik({
    initialValues: { ...initialValuesData },
    validationSchema: profileValidation,
    onSubmit: onSubmit,
  });

  return (
    <Padding right={CLEAR.MEDIUM} left={CLEAR.MEDIUM}>
      <StyledForm onSubmit={formik.handleSubmit}>
        <UserEditFormLayout formik={formik} />
        {formik.dirty && (
          <FormSubmit closeDialog={closeDialog} showDialog={showDialog} propsRef={ref}>
            {buttonValue}
          </FormSubmit>
        )}
      </StyledForm>
    </Padding>
  );
};

export default UserEditForm;
