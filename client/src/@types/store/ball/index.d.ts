interface BallType {
  id: number;
  userId: number;
  name: string;
  maker: string;
  [key: string]: string | number;
}
type ArrayBallType = BallType[];
type ObjectBallType = { [key: number]: BallType };

type PartialBallType = Partial<BallType>;
type PartialArrayBallType = PartialBallType[];
type PartialObjectBallType = { [key: number]: PartialBallType };
