import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { ALIGNITEMS } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';

interface Props extends PartialColor, PartialClear, PartialTextAlignType, PartialFontSize {
  title?: string;
}

const Color = styled.div`
  border-radius: 5px;
  background-color: ${BASICCOLORS.WHITELIGHT};
`;

const PaddingExtend = styled(Padding)<PartialClear>`
  padding: ${(props) => props.clear}vw;
  ${media.tablet`
      padding: ${CLEAR.XSMALL}vw;
      `}
`;

const Card: React.FC<Props> = ({
  textAlign = ALIGNITEMS.START,
  color,
  fontSize,
  title,
  children,
  clear = CLEAR.XSMALL,
}) => {
  return (
    <Color>
      <PaddingExtend clear={clear}>
        <Logo color={color} textAlign={textAlign} fontSize={fontSize}>
          {title}
        </Logo>
        {children}
      </PaddingExtend>
    </Color>
  );
};

export default Card;
