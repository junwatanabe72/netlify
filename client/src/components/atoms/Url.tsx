import React from 'react';
import styled from 'styled-components';

interface Props extends PartialColor {
  to?: string;
  display?: string;
}
const StyledDisplay = styled.div<{ to: Props['to'] }>`
  cursor: pointer;
  ${(props) => checkedDisplay(props.to)};
`;

const StyledA = styled.a<{ color: Props['color']; display: Props['display'] }>`
  color: ${(props) => props.color};
  diplay: ${(props) => props.display};
`;
const checkedDisplay = (props: Props['to']) => {
  if (!props) {
    return `
      display: none;
      `;
  }
};

const Url: React.FC<Props> = ({ to, color, display = 'inline', children }) => {
  return (
    <StyledDisplay to={to}>
      <StyledA href={to} color={color} display={display}>
        {children}
      </StyledA>
    </StyledDisplay>
  );
};

export default Url;
