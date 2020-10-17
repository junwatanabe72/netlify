import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/styled/styledRdesign';

interface Props{
  linkList: ReactElement,
  modalInLinks: ReactElement,
};


const DesktopDisplay = styled.div`
    display: flex;
    margin: 0 16px 0 auto;
    cursor: pointer;
      ${media.tablet`
        display: none;
      `}
  `;

const TabletDisplay = styled.div`
    display: none;
      ${media.tablet`
        display: inline-block;
        margin: 0 16px 0 auto;
        cursor: pointer;
      `}
`;


const ModalToggle: React.FC<Props> = ({ linkList,modalInLinks }) => {
  return (
    <>
      <DesktopDisplay>
        {linkList}
      </DesktopDisplay>
      <TabletDisplay>
        {modalInLinks}
      </TabletDisplay>
    </>
  );
}

export default ModalToggle;