import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { clubTableItems, resultTableItems } from '../../../../utils/constant/text/table';
import ClubEditItems from './ClubEditItems';
import { CLEAR } from '../../../../utils/constant/number';
import { Padding } from '../../../../utils/styled/styledSpace';
import ResultEditItems from './ResultEditItems';

interface Props {
  formikKey: string;
  value: ArrayClubType | ArrayResultType;
  remove: <T>(index: number) => T | undefined;
  theme: 'club' | 'result';
  onChange: () => void;
}

const StyledLabel = styled.label`
  color: ${BASICCOLORS.BASICDARK};
`;

const StyledTrd = styled.tr`
  text-align: center;
`;

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const ArrayEditFormLayout: React.FC<Props> = ({ remove, formikKey, value, theme, onChange }) => {
  const { values, handleChange } = useFormikContext<FormikValueType<typeof value>>();

  const tableItems = {
    club: clubTableItems,
    result: resultTableItems,
  } as const;

  const headItems = tableItems[theme];
  type HeadItems = typeof headItems;
  const order = Object.keys(tableItems[theme]);

  const head = useMemo(() => {
    const memo = [...order, ''].map((arg: string, num: number) => {
      return (
        <StyledTd key={num}>
          <StyledLabel htmlFor={arg}>{headItems[arg as keyof HeadItems]}</StyledLabel>
        </StyledTd>
      );
    });
    return memo;
  }, [order, headItems]);

  const selectItems = {
    club: Object.values(values.formikValues).map((club: ClubType, index: number) => {
      return [...order, 'button'].map((key: string) => {
        const name = `${formikKey}.${index}.${key}`;
        return (
          <StyledTd key={key}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <ClubEditItems
                remove={remove}
                club={club}
                index={index}
                arg={key}
                name={name}
                handleChange={handleChange}
                onChange={onChange}
              />
            </Padding>
          </StyledTd>
        );
      });
    }),
    result: Object.values(values.formikValues).map((result: ResultType, index: number) => {
      return [...order, 'button'].map((key: string) => {
        const name = `${formikKey}.${index}.${key}`;
        return (
          <StyledTd key={key}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <ResultEditItems
                remove={remove}
                result={result}
                index={index}
                arg={key}
                name={name}
                handleChange={handleChange}
                onChange={onChange}
              />
            </Padding>
          </StyledTd>
        );
      });
    }),
  };
  return (
    <>
      <StyledTrd>{head}</StyledTrd>
      {[...selectItems[theme]].map(
        (value: JSX.Element[], num: number): JSX.Element => {
          return <StyledTrd key={num}>{value}</StyledTrd>;
        }
      )}
    </>
  );
};

export default ArrayEditFormLayout;
