import React, { useCallback } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Padding } from '../../../utils/styled/styledSpace';
import { CLEAR, SIZE } from '../../../utils/constant/number';
import { BASICCOLORS } from '../../../utils/constant/color';

interface Props {
  onClick: () => void;
  propsRef: React.MutableRefObject<HTMLDialogElement | null>;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
const StyledDiv = styled.div`
  text-align: center;
`;
const StyledDialog = styled.dialog`
  width: ${SIZE.SXMALL}vw;
  top: ${SIZE.SXMALL}vw;
  border: none;
  border-radius: 6px;
  padding: ${CLEAR.SMALL}vw ${CLEAR.BASE}vw;
  background: ${BASICCOLORS.WHITE};
  color: ${BASICCOLORS.SECONDARY};
  /* For Polyfill */
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  &:not([open]) {
    display: none;
  }
  &::backdrop {
    width: 100%;
    height: 100%;
    background-color: ${BASICCOLORS.WHITEDARK};
    opacity: 0.3;
  }
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const Dialog: React.FC<Props> = ({ onClick, propsRef }) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  }, []);

  return (
    <StyledDialog onClick={onClick} ref={propsRef}>
      <div onClick={stopPropagation}>
        <StyledDiv>実行しますか？</StyledDiv>
        <Padding all={CLEAR.TINY} />
        <Flex>
          <StyledButton type="submit">
            <Button pWidth={CLEAR.SMALL} onClick={onClick}>
              yes
            </Button>
          </StyledButton>
          <StyledButton type="button">
            <Button pWidth={CLEAR.SMALL} color={BASICCOLORS.SECONDARY} onClick={onClick}>
              no
            </Button>
          </StyledButton>
        </Flex>
      </div>
    </StyledDialog>
  );
};
export default Dialog;
