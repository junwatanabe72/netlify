import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FONTSIZE } from '../../utils/constant/number';
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Props extends PartialFontSize, MENUZTYPE {
  color: any;
}

const Container = styled.div<{ color: Props['color']; fontSize: Props['fontSize'] }>`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
`;

const ComponentFontAwesomeIcon: React.FC<Props> = ({
  color,
  fontSize = FONTSIZE.LARGE,
  head,
  tail,
}) => {
  const Lookup: IconLookup = { prefix: head, iconName: tail };
  const iconDefinition: IconDefinition = findIconDefinition(Lookup);
  return (
    <Container fontSize={fontSize} color={color}>
      <FontAwesomeIcon icon={iconDefinition} />
    </Container>
  );
};

export default ComponentFontAwesomeIcon;
