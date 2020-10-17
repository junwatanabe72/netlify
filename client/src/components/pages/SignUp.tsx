import React from 'react';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Form from '../organisms/form/signupLogin';
import { Padding } from '../../utils/styled/styledSpace';
import { ROUTE } from '../../utils/constant/route';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';

interface Props {
  currentUser: PartialUserType;
}

const SignUpCheck = '利用規約とプライバシーポリシーを御覧ください。';
const SignUpLoginUser = 'アカウントをお持ちの方はこちら';
const SignUpTitle = 'SIGN UP';
const SignUpText = {
  SignUpCheck,
  SignUpLoginUser,
  SignUpTitle,
};

const status = 'signUp';
const SignUp: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={SignUpText.SignUpTitle}>
          <Form status={status} />
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <div>{SignUpText.SignUpCheck}</div>
          </Padding>
          <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
            <LinkButton to={ROUTE.LOGIN}>
              <Button pWidth={CLEAR.XSMALL} color={BASICCOLORS.SECONDARY} fontSize={FONTSIZE.SMALL}>
                {SignUpText.SignUpLoginUser}
              </Button>
            </LinkButton>
          </Padding>
        </Sign>
      </Padding>
    </Layout>
  );
};

export default SignUp;
