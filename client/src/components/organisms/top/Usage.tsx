import React from 'react';
import Logo from '../../atoms/Logo';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../../utils/constant/number';
import { TopUsageText } from '../../../utils/constant/text/body/top/text';
import { Padding } from '../../../utils/styled/styledSpace';
import UsageItem from './UsageItem';

const TopUsage: React.FC = () => {
  return (
    <>
      <Padding bottom={CLEAR.XSMALL}>
        <Logo fontSize={FONTSIZE.XXLARGE} color={BASICCOLORS.BASICDARK}>
          {TopUsageText.UsageTitle}
        </Logo>
      </Padding>
      <UsageItem />
    </>
  );
};

export default TopUsage;
