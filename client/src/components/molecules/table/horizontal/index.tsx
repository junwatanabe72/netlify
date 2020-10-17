import React from 'react';
import styled from 'styled-components';
import Url from '../../../atoms/Url';
import { SIZE } from '../../../../utils/constant/number';
import { media } from '../../../../utils/styled/styledRdesign';
import { BASICCOLORS } from '../../../../utils/constant/color';
interface Props extends PartialWidthSize {
  datas: any;
  tableItems: any;
  title?: string;
}
const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
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

const StyledTh = styled.th`
  min-width: 20px;
  font-size: 14px;
  font-weight: 600px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const Styleddiv = styled.div`
  color: ${BASICCOLORS.SECONDARY};
`;
const urlValue = '詳細はこちら';
const HorizontalTable: React.FC<Props> = ({ datas, width, tableItems, title }) => {
  const order = Object.keys(tableItems).filter((key) => {
    return key !== 'tie';
  });
  const data = Array.isArray(datas) ? datas : [datas];
  const body = data.map((value: any) => {
    return order.map((key: string, num) => {
      return key === 'url' ? (
        <StyledTd key={num}>
          <Url to={value[key]}>
            <Styleddiv>{urlValue}</Styleddiv>
          </Url>
        </StyledTd>
      ) : key === 'rank' ? (
        value['rank'] === 'CUT' ? (
          <StyledTd key={num}>{value[key]}</StyledTd>
        ) : (
          <StyledTd key={num}>
            {value['tie'] === 'T' ? `${value[key]}位T` : `${value[key]}位`}
          </StyledTd>
        )
      ) : key === 'tie' ? (
        <></>
      ) : (
        <StyledTd key={num}>{value[key]}</StyledTd>
      );
    });
  });
  const head = order.map((key: string) => {
    return <StyledTh key={key}>{tableItems[key]}</StyledTh>;
  });
  const records = [head, ...body];

  return (
    <>
      {title && <div>{title}</div>}
      <StyledTable width={width}>
        <tbody>
          {records.map((value, num: number) => {
            return <StyledTrd key={num}>{value}</StyledTrd>;
          })}
        </tbody>
      </StyledTable>
    </>
  );
};

export default HorizontalTable;
