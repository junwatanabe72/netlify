import React from 'react';
import styled from 'styled-components';
import { BASICCOLORS } from '../../utils/constant/color';
import { Padding } from '../../utils/styled/styledSpace';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';

interface Props extends PartialButtonColor, PartialFontSize {
  onClick?: () => void;
  pWidth?: CLEARTYPE;
  pHeight?: CLEARTYPE;
}
const DefaultButton = styled.div<{ color: Props['color']; fontSize: Props['fontSize'] }>`
  font-size: ${(props) => props.fontSize}px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 6px;
  ${(props) => {
    if (!props.color) {
      return;
    }
    return buttonColor[props.color];
  }};
  &:active {
    border-bottom: none;
  }
`;

const buttonColor = {
  [BASICCOLORS.PRIMARY]: `
      color: ${BASICCOLORS.WHITE};
      background-color: ${BASICCOLORS.PRIMARY};
      border-bottom: 2px solid ${BASICCOLORS.PRIMARYDARK};
      &:hover {
        color: ${BASICCOLORS.WHITE};
        background-color: ${BASICCOLORS.PRIMARYDARK};
      }
  `,
  [BASICCOLORS.SECONDARY]: `
      color: ${BASICCOLORS.WHITE};
      background-color: ${BASICCOLORS.SECONDARY};
      border-bottom: 2px solid ${BASICCOLORS.SECONDARYDARK};
      &:hover {
        background-color: ${BASICCOLORS.SECONDARYDARK};
      }
  `,
  [BASICCOLORS.WHITELIGHT]: `
      color: ${BASICCOLORS.PRIMARY};
      background-color: ${BASICCOLORS.WHITELIGHT};
      border: 2px solid ${BASICCOLORS.PRIMARY};
      &:hover {
        color: ${BASICCOLORS.WHITE};
        background-color: ${BASICCOLORS.PRIMARY};
      }
  `,
  [BASICCOLORS.WHITE]: `
      color: ${BASICCOLORS.SECONDARY};
      background-color: ${BASICCOLORS.WHITELIGHT};
      border: 2px solid ${BASICCOLORS.SECONDARY};
      &:hover {
        color: ${BASICCOLORS.WHITE};
        background-color: ${BASICCOLORS.SECONDARY};
      }
  `,
};

const Button: React.FC<Props> = ({
  pHeight = CLEAR.TINY,
  pWidth = CLEAR.MEDIUM,
  color = BASICCOLORS.PRIMARY,
  onClick,
  children,
  fontSize = FONTSIZE.LARGE,
}) => {
  return (
    <DefaultButton color={color} onClick={onClick} fontSize={fontSize}>
      <Padding top={pHeight} bottom={pHeight} right={pWidth} left={pWidth}>
        {children}
      </Padding>
    </DefaultButton>
  );
};

export default Button;
