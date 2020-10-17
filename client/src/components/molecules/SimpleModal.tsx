import React, { useRef, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
import ComponentFontAwesomeIcon from '../atoms/FontAwesomeIcon';

interface Props extends Color, MENUZTYPE {
  workModal: () => void;
  modalIsOpen: boolean;
  list: ReactElement;
}

const Container = styled.div`
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const PositionAbsolute = styled.div<{ modalIsOpen: boolean }>`
  position: absolute;
  z-index: 2;
  margin-top: 16px;
  top: 40px;
  right: 50px;
  border-radius: 2px;
  background-color: white;
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
  display: ${(props) => (props.modalIsOpen ? '' : 'none')};
`;

const SimpleModal: React.FC<Props> = ({ modalIsOpen, workModal, color, head, tail, list }) => {
  const modalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickEvent);
    return function cleanup() {
      document.removeEventListener('click', handleClickEvent);
    };
  });

  const handleClickEvent = (e: MouseEvent): void => {
    if (modalIsOpen === false) {
      return;
    }
    if (modalRef && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      workModal();
      return;
    }
  };

  return (
    <Container ref={modalRef} onClick={workModal}>
      <ComponentFontAwesomeIcon head={head} tail={tail} color={color} />
      <PositionAbsolute modalIsOpen={modalIsOpen}>
        <FlexColumn>{list}</FlexColumn>
      </PositionAbsolute>
    </Container>
  );
};

export default SimpleModal;
