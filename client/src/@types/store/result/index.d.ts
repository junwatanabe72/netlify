interface ResultType {
  id: number;
  userId: number;
  year: number;
  month: number;
  rank: string;
  name: string;
  tie: string;
  url: string;
  [key: string]: string | number;
}
type ArrayResultType = ResultType[];
type ObjectResultType = { [key: number]: ResultType };

type PartialResultType = Partial<ResultType>;
type PartialArrayResultType = PartialResultType[];
type PartialObjectResultType = { [key: number]: PartialResultType };
