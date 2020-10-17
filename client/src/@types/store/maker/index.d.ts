interface MakerType {
  id: number;
  name: string;
  [key: string]: string | number;
}

type ArrayMakerType = MakerType[];
