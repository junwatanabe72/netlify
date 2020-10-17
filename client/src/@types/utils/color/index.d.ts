const BASICCOLORS = {
  PRIMARY: '#00bcd4',
  PRIMARYDARK: '#008ba3',
  PRIMARYLIGHT: '#62efff',
  SECONDARY: '#ff5722',
  SECONDARYDARK: '#c41c00',
  SECONDARYLIGHT: '#ff8a50',
  BASIC: '#546e7a',
  BASICDARK: '#29434e',
  BASICLIGHT: '#819ca9',
  WHITE: '#f9f9f9',
  WHITEDARK: '#bcbcbc',
  WHITELIGHT: '#ffffff',
  CAUTION: '#4527a0',
} as const;

interface Color {
  color: COLORTYPES;
}

interface ButtonColor {
  color:
    | typeof BASICCOLORS.PRIMARY
    | typeof BASICCOLORS.SECONDARY
    | typeof BASICCOLORS.WHITE
    | typeof BASICCOLORS.WHITELIGHT;
}

type COLORTYPES =
  | typeof BASICCOLORS.PRIMARY
  | typeof BASICCOLORS.PRIMARYDARK
  | typeof BASICCOLORS.PRIMARYLIGHT
  | typeof BASICCOLORS.SECONDARY
  | typeof BASICCOLORS.SECONDARYDARK
  | typeof BASICCOLORS.SECONDARYLIGHT
  | typeof BASICCOLORS.BASIC
  | typeof BASICCOLORS.BASICDARK
  | typeof BASICCOLORS.BASICLIGHT
  | typeof BASICCOLORS.WHITE
  | typeof BASICCOLORS.WHITEDARK
  | typeof BASICCOLORS.WHITELIGHT
  | typeof BASICCOLORS.CAUTION;

type PartialColor = Partial<Color>;
type PartialButtonColor = Partial<ButtonColor>;
