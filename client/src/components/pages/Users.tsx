import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import ThumbNail from '../organisms/users/ThumbNail';
import { media } from '../../utils/styled/styledRdesign';
import { CLEAR, SIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: PartialUserType;
  allUsers: ArrayPartialUserType;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      `}
`;
const Users: React.FC<Props> = ({ currentUser, allUsers }) => {
  return (
    <Layout currentUser={currentUser}>
      <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
        <Container>
          <ThumbNail datas={allUsers} clear={CLEAR.TINY} width={SIZE.XXXSMALL} />
        </Container>
      </Padding>
    </Layout>
  );
};
export default Users;
