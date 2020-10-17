import React from 'react';
import { Link } from 'react-router-dom';
import { FONTSIZE } from '../../utils/constant/number';
import { BASICCOLORS } from '../../utils/constant/color';
import styled from 'styled-components';

interface Props extends PartialColor, PartialFontSize {
  to: string;
}

const StyledLink = styled(Link)<{ color: Props['color']; fontSize: Props['fontSize'] }>`
  display: inline-block;
  font-size: ${(props) => props.fontSize}px;
  // ${(props) => getButtonBcolor(props.color)};
`;

const getButtonBcolor = (props: Props['color']) => {
  if (props === BASICCOLORS.PRIMARY) {
    return `
      color: ${BASICCOLORS.PRIMARY};
      &:hover {
        color: ${BASICCOLORS.PRIMARYDARK};
      }
  `;
  } else if (props === BASICCOLORS.SECONDARY) {
    return `
      color: ${BASICCOLORS.SECONDARY};
      &:hover {
        color: ${BASICCOLORS.SECONDARYDARK};
      }
  `;
  } else if (props === BASICCOLORS.BASIC) {
    return `
      color: ${BASICCOLORS.BASIC};
      &:hover {
        color: ${BASICCOLORS.BASICDARK};
      }
  `;
  } else if (props === BASICCOLORS.WHITE) {
    return `
      color: ${BASICCOLORS.WHITE};
      &:hover {
        color: ${BASICCOLORS.WHITEDARK};
      }
  `;
  }
};

const LinkButton: React.FC<Props> = ({
  to,
  fontSize = FONTSIZE.MEDIUM,
  color = BASICCOLORS.PRIMARY,
  children,
}) => {
  return (
    <StyledLink to={to} fontSize={fontSize} color={color}>
      {children}
    </StyledLink>
  );
};

export default LinkButton;
