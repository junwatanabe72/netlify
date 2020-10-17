import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import { BASICCOLORS } from '../../../utils/constant/color';
import { TopTitleText, loginTitleText } from '../../../utils/constant/text/body/top/text';
import { FONTSIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';

const Container = styled.div`
  text-align: center;
`;

const StyledDiv = styled.div`
  color: ${BASICCOLORS.SECONDARY};
  font-size: ${FONTSIZE.ICONLARGE}px;
`;

const LoginTopTitle: React.FC = () => {
  return (
    <Container>
      <Padding top={CLEAR.LARGE} bottom={CLEAR.TINY}>
        <Logo color={BASICCOLORS.BASICDARK} fontSize={FONTSIZE.XXXLARGE}>
          {TopTitleText.TitleTitle}
        </Logo>
      </Padding>
      <Padding bottom={CLEAR.SMALL}>
        <StyledDiv>Golfersfarm</StyledDiv>
      </Padding>
      <Text fontSize={FONTSIZE.XLARGE} text={loginTitleText} />
    </Container>
  );
};

export default LoginTopTitle;
