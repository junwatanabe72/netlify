import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { BASICCOLORS } from '../../utils/constant/color';
import { ROUTE, INFOROUTE } from '../../utils/constant/route';
import { SIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
interface Props extends PartialWidthSize {
  currentUser: PartialUserType;
}

//style
const BackColor = styled.div`
  background-color: ${BASICCOLORS.WHITE};
`;

const Container = styled.div<PartialWidthSize>`
  width: ${(props) => props.width}vw;
  margin: 0vw auto;
  // ${media.tablet`
  //   width: 90vw;
  //     `}
`;

//仮の数値

const Layout: React.FC<Props> = ({ currentUser, children, width = SIZE.XXXLARGE }) => {
  const isLogin: boolean = 0 !== Object.keys(currentUser).length;
  const { id } = currentUser;
  const addRoute = { USER: `/users/${id}`, EDIT: `/users/${id}/edit`, LOGOUT: '/logout' };
  const { TOP, USERS } = ROUTE;
  const route = isLogin ? { TOP, USERS, ...addRoute } : ROUTE;

  return (
    <BackColor>
      <Header route={route} color={BASICCOLORS.WHITELIGHT} />
      <Container width={width}>{children}</Container>
      <Footer route={route} infoRoute={INFOROUTE} color={BASICCOLORS.WHITELIGHT} />
    </BackColor>
  );
};

export default Layout;
