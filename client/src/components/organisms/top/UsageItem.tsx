import React from 'react';
import styled from 'styled-components';
import Card from '../../molecules/Card';
import FreePick from '../../atoms/FreePick';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { profileText, swingText, clubResultText } from '../../../utils/constant/text/body/top/text';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
import swingCollection from '../../../utils/image/swingCollection-min.jpg';
import clubContest from '../../../utils/image/clubContest-min.jpg';
import people from '../../../utils/image/people-min.jpg';

const Container = styled.div`
  display: flex;
  justify-content: ${JUSTIFYCONTENT.BETWEEN};
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        justify-content: ${JUSTIFYCONTENT.CENTER};
        align-items: center;
      `}
`;
const Center = styled.div`
  width: ${SIZE.XSMALL}vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.tablet`
        width:${SIZE.LARGE}vw;
      `}
`;

const images = {
  profile: { title: 'プロフィール', text: profileText, imagePath: people },
  swing: { title: 'スウィング動画', text: swingText, imagePath: swingCollection },
  club: { title: 'クラブセッティング&競技結果', text: clubResultText, imagePath: clubContest },
};
type Images = typeof images;

const mainText = Object.keys(images).map((key: string, num: number) => {
  return (
    <Padding key={num} bottom={CLEAR.SMALL}>
      <Card
        fontSize={FONTSIZE.LARGE}
        title={images[key as keyof Images]['title']}
        textAlign={ALIGNITEMS.CENTER}
      >
        <Center>
          <FreePick width={SIZE.XSMALL} image={images[key as keyof Images]['imagePath']} />
          {images[key as keyof Images]['text']}
        </Center>
      </Card>
    </Padding>
  );
});

const UsageItem: React.FC = () => {
  return (
    <>
      <Container>{mainText}</Container>
    </>
  );
};

export default UsageItem;
