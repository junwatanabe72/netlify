import styled from 'styled-components';

export const Padding = styled.div<PaddingProps>`
  padding-top: ${(props) => props.top}vw;
  padding-right: ${(props) => props.right}vw;
  padding-bottom: ${(props) => props.bottom}vw;
  padding-left: ${(props) => props.left}vw;
  padding: ${(props) => props.all}vw;
`;

export const ALIGNITEMS = {
  CENTER: 'center',
  START: 'start',
  END: 'end',
} as const;

export const JUSTIFYCONTENT = {
  CENTER: 'center',
  START: 'start',
  BETWEEN: 'space-between',
  AROUND: 'space-around',
  EVENLY: 'space-evenly',
} as const;
