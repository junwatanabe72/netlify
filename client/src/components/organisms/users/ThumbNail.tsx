import React from 'react';
import UserCard from '../user/Card';
import { CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
interface Props extends PartialClear, PartialWidthSize, PartialWidthTab, PartialFontSize {
  datas: ArrayPartialUserType;
}

const ThumbNail: React.FC<Props> = ({ datas, clear, width, widthTab, fontSize }) => {
  const player = datas.map((data: PartialUserType, num: number) => {
    return (
      <Padding all={CLEAR.TINY} key={num}>
        <UserCard
          data={data}
          clear={clear}
          width={width}
          widthTab={widthTab}
          fontSize={fontSize}
          showSNS={true}
        />
      </Padding>
    );
  });

  return <>{player}</>;
};
export default ThumbNail;
