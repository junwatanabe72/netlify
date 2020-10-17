import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import Button from '../../../atoms/Button';

interface Props {
  arg: string;
  index: number;
  remove: <T>(index: number) => T | undefined;
  result: ResultType;
  name: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onChange: () => void;
}

const StyledField = styled.input`
  width: ${SIZE.XXSMALL}vw;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.XXSMALL}vw;
      font-size: 1px;
      `}
`;

const StyledSelect = styled.select`
  width: ${SIZE.TINY}vw;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.XXXSMALL}vw;
      font-size: 1px;
      `}
`;
const StyledBox = styled.input`
  width: ${SIZE.TINY}vw;
`;
const StyledDiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;
let initYear = 1980;
let initMonth = 1;
let initRank = 1;
const ResultEditItems: React.FC<Props> = ({
  arg,
  result,
  name,
  index,
  onChange,
  handleChange,
  remove,
}) => {
  const thisYear = useMemo(() => new Date().getFullYear(), []);
  const selectYears: string[] = useMemo(
    () =>
      [...Array(thisYear - initYear + 1)].map((_, i) => {
        return String(thisYear - i);
      }),
    [thisYear]
  );

  const selectMonths: string[] = useMemo(
    () =>
      [...Array(12)].map((_, i) => {
        return String(initMonth + i);
      }),
    []
  );

  const selectRank: string[] = useMemo(
    () =>
      [...Array(100)].map((_, i) => {
        return i === 99 ? 'CUT' : String(initRank + i);
      }),
    []
  );

  const optionDatas = {
    year: selectYears,
    month: selectMonths,
    rank: selectRank,
  };
  type OptionDatasValue = typeof optionDatas;
  const checksubItem = () => {
    onChange();
    remove(index);
  };
  //
  const items = {
    name: (
      <>
        <StyledField
          type={'text'}
          name={name}
          placeholder={'入力してください。'}
          onChange={handleChange}
          value={result[arg]}
        />
        <StyledDiv>
          <ErrorMessage name={name} />
        </StyledDiv>
      </>
    ),
    tie: (
      <>
        <StyledBox
          type={'checkbox'}
          name={name}
          onChange={handleChange}
          value={'T'}
          defaultChecked={result[arg] === 'T'}
        />
      </>
    ),
    url: (
      <>
        <StyledField
          type={'text'}
          name={name}
          placeholder={'結果掲載webページのURL'}
          onChange={handleChange}
          value={result[arg]}
        />
        <StyledDiv>
          <ErrorMessage name={name} />
        </StyledDiv>
      </>
    ),
    button: (
      <Button
        pWidth={CLEAR.TINY}
        pHeight={CLEAR.TINY}
        color={BASICCOLORS.SECONDARY}
        fontSize={FONTSIZE.BASE}
        onClick={checksubItem}
      >
        ×
      </Button>
    ),
    other: (
      <StyledSelect name={name} onChange={handleChange}>
        <option value={result[arg]}>{result[arg]}</option>
        {optionDatas[arg as keyof OptionDatasValue] &&
          Object.values(optionDatas[arg as keyof OptionDatasValue]).map(
            (data: string, num: number) => {
              return String(result[arg]) !== data ? (
                <option key={num} value={data}>
                  {data}
                </option>
              ) : null;
            }
          )}
      </StyledSelect>
    ),
  };

  return (
    <>{items[arg as keyof typeof items] ? items[arg as keyof typeof items] : items['other']}</>
  );
};

export default ResultEditItems;
