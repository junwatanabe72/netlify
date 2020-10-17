import React, { useState } from 'react';
import styled from 'styled-components';
import Iframe from '../../atoms/Iframe';
import { SIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import ItemList from '../../molecules/ItemList';

interface Props {
  videos: ObjectVideoType;
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const movies = ['動画１', '動画2', '動画3', '動画4'];
const VideoContents: React.FC<Props> = ({ videos }) => {
  const [currentVideo, setVideo] = useState<string>(movies[0]);
  const moveVideo = (value: string) => {
    setVideo(value);
  };

  return (
    <>
      <ItemList list={movies} onClick={moveVideo} state={currentVideo} />
      {Object.values(videos).map((value: VideoType, num: number) => {
        return movies[num] === currentVideo ? (
          <Center key={num}>
            <Padding top={CLEAR.TINY}>
              <div>{value.name}</div>
              <Padding all={CLEAR.TINY} />
              <Iframe source={value.url} width={SIZE.BASE} height={SIZE.SMALL} />
            </Padding>
          </Center>
        ) : (
          <React.Fragment key={num}></React.Fragment>
        );
      })}
    </>
  );
};

export default VideoContents;
