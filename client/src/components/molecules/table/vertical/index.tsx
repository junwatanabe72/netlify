import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../../utils/constant/number';
import { media } from '../../../../utils/styled/styledRdesign';
import Items from './Items';

interface Props extends PartialWidthSize {
  data: any;
  tableItems: any;
}

const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: ${SIZE.LARGE}vw;  
      `}
`;

StyledTable.defaultProps = {
  width: SIZE.MEDIUM,
};

const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const VerticalTable: React.FC<Props> = ({ data, width, tableItems }) => {
  const order = Object.keys(tableItems);
  return (
    <StyledTable width={width}>
      <tbody>
        {order.map((key: string, num: number) => {
          return (
            <StyledTrd key={num}>
              <Items valueKey={key} data={data} tableItems={tableItems} />
            </StyledTrd>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default VerticalTable;
