import React from 'react';
import styled from 'styled-components';
import { Padding, ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { FONTSIZE, CLEAR } from '../../../utils/constant/number';
import Logo from '../../atoms/Logo';

interface Props {}

const ExtendPadding = styled(Padding)`
  border-bottom: 1px solid #ccc;
`;

const FormTitle: React.FC<Props> = ({ children }) => {
  return (
    <Logo fontSize={FONTSIZE.XLARGE} textAlign={ALIGNITEMS.START}>
      <ExtendPadding all={CLEAR.TINY}>{children}</ExtendPadding>
    </Logo>
  );
};

export default FormTitle;
