import React, { useState } from 'react';
import styled from 'styled-components';
import SimpleModal from '../molecules/SimpleModal';
import LinkList from '../molecules/LinkList';
import Toggle from '../molecules/Toggle';
import LinkButton from '../atoms/LinkButton';
import { FONTSIZE } from '../../utils/constant/number';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTAWEICON } from '../../utils/constant/text/fontAweicon';

interface Props extends PartialColor {
  route: any;
}

//style
const BackgroundColor = styled.div<PartialColor>`
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 64px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const HeaderTitleText = {
  appTitle: 'Golfersfarm',
};
const Header: React.FC<Props> = ({ color, route }) => {
  const [modalIsOpen, setModal] = useState<boolean>(false);
  const workModal = () => {
    setModal(!modalIsOpen);
  };
  const fontColor = color === BASICCOLORS.WHITE ? BASICCOLORS.SECONDARY : BASICCOLORS.PRIMARY;
  const linkList = <LinkList color={fontColor} route={route} />;
  const modalInLinks = (
    <SimpleModal
      workModal={workModal}
      modalIsOpen={modalIsOpen}
      color={fontColor}
      list={linkList}
      head={FONTAWEICON.bar.head}
      tail={FONTAWEICON.bar.tail}
    />
  );

  return (
    <BackgroundColor color={color}>
      <Container>
        <LinkButton to={route.TOP} fontSize={FONTSIZE.XXLARGE} color={fontColor}>
          {HeaderTitleText.appTitle}
        </LinkButton>
        <Toggle linkList={linkList} modalInLinks={modalInLinks} />
      </Container>
    </BackgroundColor>
  );
};

export default Header;
