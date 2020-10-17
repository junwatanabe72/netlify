import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';
import { TABLETYPES } from '../../../utils/constant/text/table';
import VerticalTable from './vertical';
import HorizontalTable from './horizontal';

interface Props extends PartialWidthSize {
  datas: object;
  tableItems: object;
  title?: string;
  type: typeof TABLETYPES.HORIZONTAL | typeof TABLETYPES.VERTICAL;
}

const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  margin: 0vw auto;
  ${media.tablet`
      width: ${SIZE.LARGE}vw;  
      `}
`;

StyledTable.defaultProps = {
  width: SIZE.MEDIUM,
};

const Table: React.FC<Props> = ({ datas, width, type, tableItems, title }) => {
  return (
    <>
      {type === TABLETYPES.HORIZONTAL ? (
        <HorizontalTable datas={datas} width={width} tableItems={tableItems} title={title} />
      ) : (
        <VerticalTable data={datas} width={width} tableItems={tableItems} />
      )}
    </>
  );
};

export default Table;
