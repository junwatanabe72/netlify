import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { FormikTouched, FormikErrors } from 'formik';
import BallEditItem from './BallEditItem';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { ballTableItems } from '../../../../utils/constant/text/table';
import { CLEAR } from '../../../../utils/constant/number';
import { Padding } from '../../../../utils/styled/styledSpace';
import { State } from '../../../../@types/store';

type BallTableItems = typeof ballTableItems;
interface Props {
  formikBall: BallType;
  errors: FormikErrors<BallType>;
  touched: FormikTouched<BallType>;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
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

const order = Object.keys(ballTableItems);
const head = order.map((key: string, num: number) => {
  return (
    <StyledTd key={num}>
      <StyledLabel htmlFor={key}>{ballTableItems[key as keyof BallTableItems]}</StyledLabel>
    </StyledTd>
  );
});

const BallEditFormLayout: React.FC<Props> = ({ formikBall, touched, errors, onChange }) => {
  const makers = useSelector((state: State) => state.makers, shallowEqual);

  return (
    <>
      <StyledTrd>{head}</StyledTrd>
      <StyledTrd>
        {order.map((value: string, num: number) => {
          return (
            <StyledTd key={num}>
              <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                <BallEditItem
                  formikBall={formikBall}
                  valueKey={value}
                  optionDatas={makers}
                  touched={touched}
                  errors={errors}
                  onChange={onChange}
                />
              </Padding>
            </StyledTd>
          );
        })}
      </StyledTrd>
    </>
  );
};

export default BallEditFormLayout;
