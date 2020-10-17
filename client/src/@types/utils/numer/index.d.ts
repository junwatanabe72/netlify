//interface
interface FontSize {
  fontSize: FONTSIZETYPE;
}

interface WidthSize {
  width: SIZETYPE;
}

interface HeightSize {
  height: SIZETYPE;
}

interface WidthTab {
  widthTab: SIZETYPE;
}

interface FontSizeWeight {
  fontWeight: FONTSIZEWEIGHTTYPE;
}

interface Clear {
  clear: CLEARTYPE;
}
// types

type FONTSIZEWEIGHTTYPE =
  | typeof FONTWEIGHT.NORMAL
  | typeof FONTWEIGHT.BOLD
  | typeof FONTWEIGHT.TINY;

type FONTSIZETYPE =
  | typeof FONTSIZE.ICONXLARGE
  | typeof FONTSIZE.ICONLARGE
  | typeof FONTSIZE.XXXLARGE
  | typeof FONTSIZE.XXLARGE
  | typeof FONTSIZE.XLARGE
  | typeof FONTSIZE.LARGE
  | typeof FONTSIZE.MEDIUM
  | typeof FONTSIZE.LARGE
  | typeof FONTSIZE.BASE
  | typeof FONTSIZE.SMALL
  | typeof FONTSIZE.XSMALL
  | typeof FONTSIZE.TINY;

type SIZETYPE =
  | typeof SIZE.MAX
  | typeof SIZE.XXXLARGE
  | typeof SIZE.XXLARGE
  | typeof SIZE.XLARGE
  | typeof SIZE.LARGE
  | typeof SIZE.MEDIUMLARGE
  | typeof SIZE.MEDIUM
  | typeof SIZE.LARGE
  | typeof SIZE.BASE
  | typeof SIZE.BASESMALL
  | typeof SIZE.SMALL
  | typeof SIZE.SXMALL
  | typeof SIZE.XSMALL
  | typeof SIZE.XSMALLMD
  | typeof SIZE.XXSMALL
  | typeof SIZE.XXXSMALL
  | typeof SIZE.TINY;

type CLEARTYPE =
  | typeof CLEAR.XXXLARGE
  | typeof CLEAR.XXLARGE
  | typeof CLEAR.GXLARGE
  | typeof CLEAR.XLARGE
  | typeof CLEAR.LARGE
  | typeof CLEAR.MEDIUMLARGE
  | typeof CLEAR.MEDIUM
  | typeof CLEAR.LARGE
  | typeof CLEAR.BASE
  | typeof CLEAR.SMALL
  | typeof CLEAR.XSMALL
  | typeof CLEAR.TINY
  | typeof CLEAR.ZERO;

// partial
type PartialWidthSize = Partial<WidthSize>;
type PartialHeightSize = Partial<HeightSize>;
type PartialWidthTab = Partial<WidthTab>;
type PartialClear = Partial<Clear>;
type PartialFontSize = Partial<FontSize>;
type PartialFontSizeWeight = Partial<FontSizeWeight>;

const FONTSIZE = {
  ICONXLARGE: 60,
  ICONLARGE: 50,
  XXXLARGE: 32,
  XXLARGE: 24,
  XLARGE: 18,
  LARGE: 16,
  MEDIUM: 14,
  BASE: 12,
  SMALL: 11,
  XSMALL: 10,
  TINY: 8,
} as const;

const SIZE = {
  MAX: 100,
  XXXLARGE: 90,
  XXLARGE: 80,
  XLARGE: 70,
  LARGE: 60,
  MEDIUMLARGE: 55,
  MEDIUM: 50,
  BASE: 40,
  BASESMALL: 35,
  SMALL: 30,
  SXMALL: 25,
  XSMALL: 20,
  XSMALLMD: 19,
  XXSMALL: 15,
  XXXSMALL: 10,
  TINY: 5,
} as const;

const CLEAR = {
  XXXLARGE: 20,
  XXLARGE: 15,
  GXLARGE: 13,
  XLARGE: 11,
  LARGE: 9,
  MEDIUMLARGE: 7,
  MEDIUM: 5,
  BASE: 4,
  SMALL: 3,
  XSMALL: 2,
  TINY: 1,
  ZERO: 0,
} as const;

const FONTWEIGHT = {
  NORMAL: 400,
  BOLD: 600,
  TINY: 200,
} as const;

const BORDERRADIUS = 4 as 4;
