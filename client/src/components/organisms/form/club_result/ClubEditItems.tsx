import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ErrorMessage } from 'formik';
import Button from '../../../atoms/Button';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { State } from '../../../../@types/store';
import { modalPop, modalPush } from '../../../../actions';
import ModalSelectForm from '../../modal/ModalSelectForm';

interface Props {
  arg: string;
  index: number;
  remove: <T>(index: number) => T | undefined;
  club: ClubType;
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
  width: ${SIZE.XXXSMALL}vw;
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
  width: ${SIZE.XXXSMALL}vw;
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
const StyledDiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;
export const flexDatas = [
  { flex: '-' },
  { flex: 'L' },
  { flex: 'A' },
  { flex: 'R' },
  { flex: 'SR' },
  { flex: 'S' },
  { flex: 'X' },
  { flex: 'XX' },
  { flex: 'SX' },
];

const ClubEditItems: React.FC<Props> = ({
  arg,
  club,
  name,
  index,
  onChange,
  handleChange,
  remove,
}) => {
  const makers = useSelector((state: State) => state.makers, shallowEqual);
  const shafts = useSelector((state: State) => state.shafts, shallowEqual);
  const types = useSelector((state: State) => state.types, shallowEqual);
  const dispatch = useDispatch();

  const optionDatas = {
    type: types,
    maker: makers,
    shaft: shafts,
    flex: flexDatas,
  };
  type OptionDatas = typeof optionDatas;
  const checksubItem = () => {
    onChange();
    remove(index);
  };

  const dispatchModalPop = () => {
    dispatch(modalPop(<></>));
  };

  const modalComponent = (
    <ModalSelectForm
      key={1}
      valueKey={arg}
      name={name}
      value={club[arg]}
      datas={optionDatas[arg as keyof OptionDatas]}
      onChange={handleChange}
      modalPop={dispatchModalPop}
    />
  );

  const onClick = () => {
    dispatch(modalPush(modalComponent));
  };
  const items = {
    name: (
      <>
        <StyledField
          type={'text'}
          name={name}
          placeholder={'入力してください。'}
          onChange={handleChange}
          value={club[arg]}
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
    maker: (
      <StyledSelect onClick={onClick}>
        <option value={club[arg]}>{club[arg]}</option>
      </StyledSelect>
    ),
    shaft: (
      <StyledSelect name={name} onClick={onClick}>
        <option value={arg}>{club[arg]}</option>
      </StyledSelect>
    ),
    other: (
      <StyledSelect name={name} onChange={handleChange}>
        <option value={arg}>{club[arg]}</option>
        {optionDatas[arg as keyof OptionDatas] &&
          Object.values(optionDatas[arg as keyof OptionDatas]).map((data: any, num: number) => {
            return club[arg] !== data[arg] ? (
              <option key={num} value={data[arg]}>
                {data[arg]}
              </option>
            ) : null;
          })}
      </StyledSelect>
    ),
  };

  return (
    <>{items[arg as keyof typeof items] ? items[arg as keyof typeof items] : items['other']}</>
  );
};

export default ClubEditItems;
