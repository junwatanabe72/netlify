import { ACTIONTYPES } from '../actions';

// const sample = {
//   5: {
//     id: 5,
//     name: '日本オープン',
//     userId: 1,
//     year: 2020,
//     month: 1,
//     rank: '1',
//     tie: '',
//     url:
//       'https://www.jgto.org/sp/TourLeaderboard.do?year=2020&tournaKbnCd=0&conferenceCd=26&round=3',
//   },
//   7: {
//     id: 7,
//     name: '日本オープン',
//     userId: 1,
//     year: 2019,
//     month: 12,
//     rank: '50',
//     tie: 'T',
//   },
//   9: {
//     id: 9,
//     name: '日本オープン',
//     userId: 1,
//     year: 2004,
//     month: 1,
//     rank: '50',
//     tie: 'T',
//   },
//   11: {
//     id: 11,
//     name: '日本オープン',
//     userId: 1,
//     year: 2020,
//     month: 9,
//     rank: '50',
//     tie: 'T',
//   },
// };
const initialState: PartialObjectResultType = {};

export default function ResultsReducer(
  state = initialState,
  action: Action<PartialObjectResultType>
): PartialObjectResultType {
  let newState = state;
  const results = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_RESULTS: {
      newState = { ...state, ...results };
      return newState;
    }
    case ACTIONTYPES.REMOVE_RESULTS: {
      const resultIds = Object.keys(results);

      for (let result in newState) {
        if (resultIds.includes(result)) {
          delete newState[result];
        }
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
