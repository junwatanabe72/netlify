import React, { useEffect } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from '../../../atoms/Button';
import { createUser, loginUser } from '../../../../actions';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  confirmedPasswordValidation,
} from '../../../../validations';
import SignLoginItem from './SignupLoginItem';
import { sexValues } from '../../../../utils/constant/text/body/user/value';
import { useDialog } from '../../../../hooks/dialog';
import Dialog from '../../../atoms/form/Dialog';

interface AuthDataType {
  email: string;
  sex?: number;
  name?: string;
  password: string;
  confirmedPassword?: string;
}

interface Props {
  status: 'signUp' | 'login';
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const Styleddiv = styled.div`
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const formDatas = {
  login: {
    email: '',
    password: '',
  },
  signUp: {
    email: '',
    name: '',
    password: '',
    confirmedPassword: '',
    sex: sexValues['male'],
  },
};

const buttonValue = {
  signUp: 'SIGN UP',
  login: 'LOGIN',
};

const validation = {
  signUp: () =>
    yup.object().shape({
      email: emailValidation(),
      name: nameValidation(),
      password: passwordValidation(),
      confirmedPassword: confirmedPasswordValidation(),
    }),
  login: () =>
    yup.object().shape({
      email: emailValidation(),
      password: passwordValidation(),
    }),
};

const SignLoginForm: React.FC<Props> = ({ status }) => {
  const { ref, showDialog, closeDialog } = useDialog();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);

  const onSubmit = {
    signUp: (values: AuthDataType) => {
      const { name, password, email, sex } = values;
      if (!name || !sex) {
        return;
      }
      const signItems = { name, password, email, sex };
      dispatch(createUser(signItems));
    },
    login: (values: AuthDataType) => {
      dispatch(loginUser(values));
    },
  };

  const formik = useFormik({
    initialValues: formDatas[status],
    validationSchema: validation[status],
    onSubmit: onSubmit[status],
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        {Object.keys(formDatas[status]).map((key: string, num: number) => {
          return (
            <React.Fragment key={num}>
              <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                <SignLoginItem formik={formik} valueKey={key} />
              </Padding>
              {formik.touched[key as keyof AuthDataType] &&
              formik.errors[key as keyof AuthDataType] ? (
                <Styleddiv>{formik.errors[key as keyof AuthDataType]}</Styleddiv>
              ) : null}
            </React.Fragment>
          );
        })}
        <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}></Padding>
        <StyledButton type="button" onClick={showDialog}>
          <Button pWidth={CLEAR.LARGE}>{buttonValue[status]}</Button>
        </StyledButton>
        <Dialog onClick={closeDialog} propsRef={ref} />
      </StyledForm>
    </>
  );
};

export default SignLoginForm;
