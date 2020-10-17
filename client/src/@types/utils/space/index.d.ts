type PaddingProps = {
  top?: CLEARTYPE;
  right?: CLEARTYPE;
  bottom?: CLEARTYPE;
  left?: CLEARTYPE;
  all?: CLEARTYPE;
};

type ALIGNITEMSTYPE = typeof ALIGNITEMS.CENTER | typeof ALIGNITEMS.START | typeof ALIGNITEMS.END;
type JUSTIFYCONTENTTYPE =
  | typeof JUSTIFYCONTENT.CENTER
  | typeof JUSTIFYCONTENT.START
  | typeof JUSTIFYCONTENT.BETWEEN
  | typeof JUSTIFYCONTENT.AROUND
  | typeof JUSTIFYCONTENT.EVENLY;

interface JustifyContentType {
  justifyContent: JUSTIFYCONTENTTYPE;
}

interface AlignItemsType {
  alignItems: ALIGNITEMSTYPE;
}

interface TextAlignType {
  textAlign: ALIGNITEMSTYPE;
}
type PartialJustifyContentType = Partial<JustifyContentType>;
type PartialAlignItemsType = Partial<AlignItemsType>;
type PartialTextAlignType = Partial<TextAlignType>;

const ALIGNITEMS = {
  CENTER: 'center',
  START: 'start',
  END: 'end',
} as const;

const JUSTIFYCONTENT = {
  CENTER: 'center',
  START: 'start',
  BETWEEN: 'space-between',
  AROUND: 'space-around',
  EVENLY: 'space-evenly',
} as const;
