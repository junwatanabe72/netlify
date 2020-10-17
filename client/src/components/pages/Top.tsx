import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import TopTitle from '../organisms/top/Title';
import TopConcept from '../organisms/top/Concept';
import TopUsage from '../organisms/top/Usage';
import LoginTopTitle from '../organisms/top/LoginTitle';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR, SIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';

interface Props {
  currentUser: PartialUserType;
}

const BackColor = styled.div<PartialColor>`
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  width: 90vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const components: JSX.Element[] = [<TopTitle />, <TopUsage />, <TopConcept />];

const Top: React.FC<Props> = ({ currentUser }) => {
  const isLogin: boolean = 0 !== Object.keys(currentUser).length;
  const visiterContents = components.map((d: JSX.Element, i: number) => {
    const color = i % 2 !== 0 ? BASICCOLORS.WHITE : BASICCOLORS.WHITELIGHT;
    const clear = i === components.length - 1 ? CLEAR.ZERO : CLEAR.SMALL;
    return (
      <BackColor key={i} color={color}>
        <Padding top={CLEAR.SMALL} bottom={clear}>
          <Container>{d}</Container>
        </Padding>
      </BackColor>
    );
  });
  const userContents = (
    <BackColor color={BASICCOLORS.WHITELIGHT}>
      <Padding all={CLEAR.XLARGE}>
        <LoginTopTitle />
      </Padding>
    </BackColor>
  );
  const contents = isLogin ? userContents : visiterContents;

  return (
    <Layout currentUser={currentUser} width={SIZE.MAX}>
      {contents}
    </Layout>
  );
};

export default Top;
