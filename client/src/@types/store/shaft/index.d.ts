interface ShaftType {
  id: number;
  name: string;
  [key: string]: string | number;
}

type ArrayShaftType = ShaftType[];
