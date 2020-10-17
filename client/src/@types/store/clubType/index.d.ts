interface ClubTypeType {
  id: number;
  type: string;
  [key: string]: string | number;
}

type ArrayClubTypeType = ClubTypeType[];
