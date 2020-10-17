import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';
import { FONTSIZE, CLEAR, SIZE } from '../../../utils/constant/number';
import { BASICCOLORS } from '../../../utils/constant/color';
import { Padding, JUSTIFYCONTENT } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';

interface Props extends PartialWidthSize, PartialWidthTab {
  modalPop: () => void;
  value: string | number;
  name: string;
  valueKey: string;
  datas: ArrayMakerType | ArrayShaftType;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const Center = styled.div`
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${JUSTIFYCONTENT.BETWEEN};
`;

const StyledField = styled.input`
  font-size: ${FONTSIZE.MEDIUM}px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  width: ${SIZE.XSMALL}vw;
  padding: ${CLEAR.TINY}vw;
  &:hover {
    color: ${BASICCOLORS.SECONDARY};
    background-color: #f5f5f5;
  }
  ${media.tablet`
      font-size: ${FONTSIZE.BASE}px;
      width: ${SIZE.SMALL}vw;
      `}
`;
const CurrentField = styled(StyledField)`
  color: ${BASICCOLORS.SECONDARY};
`;

const optionDatasKey = {
  maker: 'name',
  shaft: 'name',
} as const;

const selectText = '選択してください。';
const selectSub = '名前順（a->z,あ->ん）';
const ModalSelectForm: React.FC<Props> = ({ modalPop, datas, onChange, value, valueKey, name }) => {
  const selectItems = Object.values(datas).sort((x, y) => {
    const xName = x.name;
    const yName = y.name;
    return xName.localeCompare(yName, 'ja');
  });
  const onChangeItem = (e: any) => {
    onChange(e);
    modalPop();
  };

  return (
    <Center>
      <Logo fontSize={FONTSIZE.LARGE} color={BASICCOLORS.SECONDARY}>
        {selectText}
      </Logo>
      <div>{selectSub}</div>
      <Padding all={CLEAR.TINY} />
      <Flex>
        {selectItems.map((data: any, num: number) => {
          const key = optionDatasKey[valueKey as keyof typeof optionDatasKey];
          return value !== data[key] ? (
            <StyledField
              key={num}
              readOnly={true}
              type={'text'}
              name={name}
              onClick={onChangeItem}
              value={data[key]}
            />
          ) : (
            <CurrentField
              key={num}
              readOnly={true}
              type={'text'}
              name={valueKey}
              onClick={onChangeItem}
              value={data[key]}
            />
          );
        })}
      </Flex>
    </Center>
  );
};

export default ModalSelectForm;
