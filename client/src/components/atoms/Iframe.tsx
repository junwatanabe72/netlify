import React from 'react';
import { SIZE } from '../../utils/constant/number';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

interface Props extends PartialWidthSize, PartialHeightSize {
  source: string;
}

const Container = styled.iframe<{ width: Props['width']; height: Props['height'] }>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  ${media.tablet`
        width: ${SIZE.MEDIUM}vw;
        height: ${SIZE.MEDIUM}vw;
      `}
`;
const baseURL = 'https://www.youtube.com/embed/';
const Iframe: React.FC<Props> = ({ source, width = SIZE.MEDIUM, height = SIZE.SMALL }) => {
  const youtubeURL = baseURL + source;
  return <Container width={width} src={youtubeURL} height={height} frameBorder="0" />;
};

export default Iframe;
