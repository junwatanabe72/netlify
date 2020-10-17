import React from 'react';
import styled from 'styled-components';
import { FormikTouched, FormikErrors, ErrorMessage } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { ballTableItems } from '../../../../utils/constant/text/table';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { media } from '../../../../utils/styled/styledRdesign';
import { useDispatch } from 'react-redux';
import { modalPush, modalPop } from '../../../../actions';
import ModalSelectForm from '../../modal/ModalSelectForm';

type BallTableItems = typeof ballTableItems;
interface Props {
  formikBall: BallType;
  valueKey: string;
  optionDatas: ArrayMakerType;
  errors: FormikErrors<BallType>;
  touched: FormikTouched<BallType>;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const StyledField = styled.input`
  width: ${SIZE.SXMALL}vw;
  cursor: pointer;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.SMALL}vw;
      `}
`;

const StyledSelect = styled.select`
  width: ${SIZE.SXMALL}vw;
  cursor: pointer;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.SMALL}vw;
      `}
`;
const StyledDiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const BallEditItem: React.FC<Props> = ({ formikBall, valueKey, optionDatas, onChange }) => {
  const dispatch = useDispatch();
  const dispatchModalPop = () => {
    dispatch(modalPop(<></>));
  };
  const modalComponent = (
    <ModalSelectForm
      key={2}
      name={valueKey}
      valueKey={valueKey}
      value={formikBall[valueKey]}
      datas={optionDatas}
      onChange={onChange}
      modalPop={dispatchModalPop}
    />
  );

  const onClick = () => {
    dispatch(modalPush(modalComponent));
  };

  const item = {
    name: (
      <>
        <StyledField
          type={'text'}
          name={valueKey}
          placeholder={'入力してください。'}
          onChange={onChange}
          value={formikBall[valueKey]}
        />
        <StyledDiv>
          <ErrorMessage name={valueKey} />
        </StyledDiv>
      </>
    ),
    maker: (
      <StyledSelect name={valueKey} onClick={onClick}>
        <option value={formikBall[valueKey]}>{formikBall[valueKey]}</option>
      </StyledSelect>
    ),
  };

  return <>{item[valueKey as keyof BallTableItems]}</>;
};

export default BallEditItem;
