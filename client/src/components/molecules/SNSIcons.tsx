import React from 'react';
import styled from 'styled-components';
import Url from '../atoms/Url';
import { FONTAWEICON } from '../../utils/constant/text/fontAweicon';
import ComponentFontAwesomeIcon from '../atoms/FontAwesomeIcon';
import { Padding } from '../../utils/styled/styledSpace';
import { CLEAR } from '../../utils/constant/number';

interface Props extends PartialFontSize {
  urls: SNSUserType;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  position: relative; /*相対配置*/
  display: inline-block;
  vertical-align: middle; /*垂直中央に*/
  background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat; /*グラデーション①*/
  overflow: hidden; /*はみ出た部分を隠す*/
  border-radius: 8px; /*角丸に*/
  &:before {
    content: '';
    position: absolute; /*絶対配置*/
    top: 24px; /*ずらす*/
    left: 18px; /*ずらす*/
    background: -webkit-radial-gradient(
      #ffdb2c 10%,
      rgba(255, 105, 34, 0.65) 55%,
      rgba(255, 88, 96, 0) 70%
    );
    background: radial-gradient(
      #ffdb2c 10%,
      rgba(255, 105, 34, 0.65) 55%,
      rgba(255, 88, 96, 0) 70%
    ); /*グラデーション②*/
  }
`;

const URLs = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/channel/',
} as const;

type URLTypes = keyof typeof URLs;

const colors = {
  facebook: '#4267b2',
  twitter: '#1da1f2',
  instagram: '#FFF',
  youtube: '#Ff0000',
} as const;

const SNS: React.FC<Props> = ({ urls, fontSize }) => {
  const SnsURLs = Object.entries(urls);
  return (
    <Container>
      {SnsURLs.map(([key, value]: [string, string | undefined], num: number) => {
        const valueKey = key === 'instagram' ? key : 'other';
        const components = {
          instagram: (
            <StyledSpan>
              <ComponentFontAwesomeIcon
                fontSize={fontSize}
                head={FONTAWEICON[key as URLTypes].head}
                tail={FONTAWEICON[key as URLTypes].tail}
                color={colors[key as URLTypes]}
              />
            </StyledSpan>
          ),
          other: (
            <Padding right={CLEAR.TINY}>
              <ComponentFontAwesomeIcon
                fontSize={fontSize}
                head={FONTAWEICON[key as URLTypes].head}
                tail={FONTAWEICON[key as URLTypes].tail}
                color={colors[key as URLTypes]}
              />
            </Padding>
          ),
        };
        return (
          <React.Fragment key={num}>
            {value && <Url to={URLs[key as URLTypes] + value}>{components[valueKey]}</Url>}
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default SNS;
