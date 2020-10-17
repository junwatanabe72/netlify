import React from 'react';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Form from '../organisms/form/signupLogin';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';
import { ROUTE } from '../../utils/constant/route';

interface Props {
  currentUser: PartialUserType;
}

const LoginTitle = 'LOGIN';
const LoginNoUser = 'アカウントをお持ちでない方はこちら';
const LoginText = {
  LoginNoUser,
  LoginTitle,
};
const status = 'login';
const Login: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={LoginText.LoginTitle}>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <Form status={status} />
          </Padding>
          <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
            <LinkButton to={ROUTE.SIGNUP}>
              <Button pWidth={CLEAR.TINY} color={BASICCOLORS.WHITELIGHT} fontSize={FONTSIZE.TINY}>
                {LoginText.LoginNoUser}
              </Button>
            </LinkButton>
          </Padding>
        </Sign>
      </Padding>
    </Layout>
  );
};

export default Login;
