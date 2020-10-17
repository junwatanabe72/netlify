import React from 'react';
import styled from 'styled-components';
import { Padding } from '../../../utils/styled/styledSpace';
import { CLEAR } from '../../../utils/constant/number';
import Button from '../Button';
import Dialog from './Dialog';

interface Props {
  showDialog: () => void;
  closeDialog: () => void;
  propsRef: React.MutableRefObject<HTMLDialogElement | null>;
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const FormSubmit: React.FC<Props> = ({ showDialog, closeDialog, propsRef, children }) => {
  return (
    <>
      <Center>
        <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
          <StyledButton type="button" onClick={showDialog}>
            <Button pWidth={CLEAR.LARGE}>{children}</Button>
          </StyledButton>
        </Padding>
      </Center>
      <Dialog onClick={closeDialog} propsRef={propsRef} />
    </>
  );
};

export default FormSubmit;
