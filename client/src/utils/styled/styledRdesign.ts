import{ css, CSSObject, SimpleInterpolation } from 'styled-components';

const sizes: { [index: string]: number } = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};
// 768
export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [index: string]: Function },
);

// export const media = {
//   handheld1279: (first: TemplateStringsArray | CSSObject, ...args: SimpleInterpolation[]) => css`
//     @media (min-width: 1279px) {
//       //ここにデバイス幅を指定
//       ${css(first,...args)};
//     }
//   `,
//   handheld575: (first: any,...args: any) => css`
//     @media (min-width: 575px) {
//       //575px以上
//       ${css(first,...args)};
//     }
//   `,
// };