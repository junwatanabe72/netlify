interface ClubType {
  id: number;
  userId: number;
  name: string;
  shaft: string;
  maker: string;
  type: string;
  flex: string;
  [key: string]: string | number;
}
type ArrayClubType = ClubType[];
type ObjectClubType = { [key: number]: ClubType };

type PartialClubType = Partial<ClubType>;
type PartialArrayClubType = PartialClubType[];
type PartialObjectClubType = { [key: number]: PartialClubType };
