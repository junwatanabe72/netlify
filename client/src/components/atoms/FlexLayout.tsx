import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';
import { JUSTIFYCONTENT } from '../../utils/styled/styledSpace';
import { SIZE } from '../../utils/constant/number';
interface Props extends PartialWidthSize, PartialAlignItemsType, PartialJustifyContentType {
  right: ReactElement;
  left: ReactElement;
}

const Container = styled.div<{
  alignItems: Props['alignItems'];
  justifyContent: Props['justifyContent'];
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedWidth = styled.div<PartialWidthSize>`
  width: ${(props) => props.width}vw;
  ${media.tablet`
      width: ${SIZE.LARGE}vw;
      padding-bottom: 10px;
      `}
`;

const FlexLayout: React.FC<Props> = ({
  right,
  left,
  width,
  alignItems,
  justifyContent = JUSTIFYCONTENT.AROUND,
}) => {
  return (
    <Container alignItems={alignItems} justifyContent={justifyContent}>
      <FixedWidth width={width}>{left}</FixedWidth>
      {right}
    </Container>
  );
};

export default FlexLayout;
