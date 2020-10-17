import React from 'react';
import styled from 'styled-components';
import { Padding } from '../../utils/styled/styledSpace';
import { CLEAR } from '../../utils/constant/number';

interface TextAreaProps {
  placeHolder?: string;
  value: string;
  onChange?: () => void;
}

const Container = styled.div`
  width: 100%;
`;
const Frame = styled.div`
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
`;
const InputTextarea = styled.textarea`
  width: 98%;
  border-width: inital;
  border-style: none;
  outline: none;
  background: none;
`;

const TextArea: React.FC<TextAreaProps> = ({ placeHolder = '', value = '', onChange }) => {
  return (
    <Container>
      <Padding top={CLEAR.SMALL} bottom={CLEAR.SMALL} right={CLEAR.XSMALL} left={CLEAR.XSMALL}>
        <Frame>
          <InputTextarea placeholder={placeHolder} value={value} onChange={onChange} />
        </Frame>
      </Padding>
    </Container>
  );
};

export default TextArea;
