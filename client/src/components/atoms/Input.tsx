import React from 'react';
import styled from 'styled-components';
import { SIZE, CLEAR, FONTSIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';

interface InputProps {
  placeHolder?: string;
  value?: string;
  onChange?: (e: any) => void;
}

const Container = styled.div`
  width: ${SIZE.SMALL}vw;
  ${media.tablet`
      width: ${SIZE.MEDIUM}vw;
      `}
`;
const Frame = styled.div`
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
`;
const InputBar = styled.input`
  display: table-cell;
  font-size: ${FONTSIZE.LARGE}px;
  width: 98%;
  padding: ${CLEAR.TINY}vw 0px;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

const Input: React.FC<InputProps> = ({ placeHolder = '', value, onChange }) => {
  return (
    <Container>
      <Frame>
        <InputBar placeholder={placeHolder} value={value} onChange={onChange} />
      </Frame>
    </Container>
  );
};

export default Input;
