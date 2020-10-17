import React from 'react';
import styled from 'styled-components';
import {
  sexValues,
  sexLabels,
  classValues,
  bloodValues,
  historyValues,
  classLabels,
  bloodLabels,
  historyLabels,
} from '../../../../utils/constant/text/body/user/value';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';

type SexLabels = typeof sexLabels;
type ClassLabels = typeof classLabels;
type BloodLabels = typeof bloodLabels;
type HistoryLabels = typeof historyLabels;
type ShowLabel = SexLabels | ClassLabels | BloodLabels | HistoryLabels;

interface Props {
  data: any;
  valueKey: string;
  tableItems: any;
}

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const TdExtend = styled(StyledTd)`
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const StyledTh = styled.th`
  min-width: 75px;
  font-size: 14px;
  font-weight: 600px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const ThExtend = styled(StyledTh)`
  border: none;
  &:hover {
    background-color: white;
  }
`;
const ClassDiv = styled.div<{ attr: number }>`
  display: inline-block;
  border-radius: 5px;
  border: ${(props) =>
    props.attr === 100
      ? `
        solid 3px ${BASICCOLORS.PRIMARY}; 
  `
      : `
    solid 3px ${BASICCOLORS.SECONDARY}; 
  `};
`;
const values = {
  sex: sexValues,
  classification: classValues,
  blood: bloodValues,
  history: historyValues,
};
const labels = {
  sex: sexLabels,
  classification: classLabels,
  blood: bloodLabels,
  history: historyLabels,
};
const unit = { averageDistance: 'yard', blood: '型' };
const plus = '+';
type Unit = typeof unit;
type Values = typeof values;
type Labels = typeof labels;

const Items: React.FC<Props> = ({ data, valueKey, tableItems }) => {
  const initialValue = data[valueKey];
  const targetValue = values[valueKey as keyof Values];
  const convertValue = targetValue
    ? Object.entries(targetValue).find(([key, value]) => value === initialValue)
    : undefined;
  const showLabel = labels[valueKey as keyof Labels];
  const showValue = convertValue ? showLabel[convertValue[0] as keyof ShowLabel] : initialValue;

  const tableData = {
    classification: (
      <ThExtend colSpan={2}>
        <ClassDiv attr={initialValue}>
          <Padding left={CLEAR.TINY} right={CLEAR.TINY}>
            {showValue}
          </Padding>
        </ClassDiv>
      </ThExtend>
    ),
    hcap: (
      <>
        <StyledTh>{tableItems[valueKey]}</StyledTh>
        {showValue > 0 ? (
          <StyledTd>{showValue}</StyledTd>
        ) : (
          <TdExtend>
            {plus}
            {showValue * -1}
          </TdExtend>
        )}
      </>
    ),
    bestScore: (
      <>
        <StyledTh>{tableItems[valueKey]}</StyledTh>
        {showValue > 72 ? <StyledTd>{showValue}</StyledTd> : <TdExtend>{showValue}</TdExtend>}
      </>
    ),
    other: (
      <>
        <StyledTh>{tableItems[valueKey]}</StyledTh>
        <StyledTd>
          {showValue}
          {unit[valueKey as keyof Unit] && unit[valueKey as keyof Unit]}
        </StyledTd>
      </>
    ),
  };
  type TableData = typeof tableData;

  return (
    <>
      {tableData[valueKey as keyof TableData]
        ? tableData[valueKey as keyof TableData]
        : tableData['other']}
    </>
  );
};

export default Items;
