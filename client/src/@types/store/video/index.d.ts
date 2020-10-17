interface VideoType {
  id: number;
  userId: number;
  name: string;
  url: string;
  [key: string]: string | number;
}
type ArrayVideoType = VideoType[];
type ObjectVideoType = { [key: number]: VideoType };

type PartialVideoType = Partial<VideoType>;
type PartialArrayVideoType = PartialVideoType[];
type PartialObjectVideoType = { [key: number]: PartialVideoType };
