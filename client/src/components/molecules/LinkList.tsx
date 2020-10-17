import React, { useMemo } from 'react';
import LinkButton from '../atoms/LinkButton';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { routeLabel } from '../../utils/constant/route';

interface Props extends Color, PartialClear {
  route: any;
}

const LinkList: React.FC<Props> = ({ color, route, clear = CLEAR.TINY }) => {
  const list = useMemo(
    () =>
      Object.entries(route).map(([key, value]: any) => {
        return (
          <LinkButton key={key} to={value} color={color}>
            <Padding all={clear}>{routeLabel[key as keyof RouteLabel]}</Padding>
          </LinkButton>
        );
      }),
    [route, clear, color]
  );
  return <>{list}</>;
};

export default LinkList;
