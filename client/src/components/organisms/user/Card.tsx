import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import Image from '../../atoms/Image';
import Card from '../../molecules/Card';
import SNS from '../../molecules/SNSIcons';
import { CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';

interface Props extends PartialClear, PartialWidthSize, PartialWidthTab, PartialFontSize {
  data: PartialUserType;
  showSNS?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UserCard: React.FC<Props> = ({ data, clear, width, widthTab, fontSize, showSNS = false }) => {
  const { id, name, facebook, twitter, instagram, youtube, profileImage } = data;
  const urls = { facebook, twitter, youtube, instagram };

  return (
    <Card clear={clear}>
      <Container>
        <Image image={profileImage} width={width} widthTab={widthTab} />
        <Padding top={CLEAR.TINY}>
          <LinkButton to={`/users/${id}`} fontSize={fontSize}>
            {name}
          </LinkButton>
        </Padding>
        {showSNS && <SNS urls={urls} fontSize={fontSize} />}
      </Container>
    </Card>
  );
};
export default UserCard;
