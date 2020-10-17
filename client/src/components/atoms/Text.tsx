import React from 'react';
import styled from 'styled-components';
import { CLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';

interface Props extends PartialFontSize {
  text: string[];
}

const Container = styled.div<PartialFontSize>`
  font-size: ${(props) => props.fontSize}px;
  text-align: ${ALIGNITEMS.CENTER};
`;

const Text: React.FC<Props> = ({ text, fontSize = FONTSIZE.LARGE }) => {
  return (
    <Container fontSize={fontSize}>
      {text.map((t: string) => {
        return (
          <Padding key={t} bottom={CLEAR.TINY}>
            {t}
          </Padding>
        );
      })}
    </Container>
  );
};

export default Text;
