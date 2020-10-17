import { ACTIONTYPES } from '../actions';

// objectに変更する。
// const sample = {
//   5: {
//     id: 5,
//     type: '1WOOD',
//     name: 'J-BEAM',
//     userId: 1,
//     maker: 'CRAZY',
//     shaft: 'ツアーAD HD',
//     flex: 'S',
//   },
//   7: {
//     id: 7,
//     type: '5WOOD',
//     name: 'x-drive',
//     userId: 1,
//     maker: 'タイトリスト',
//     shaft: 'pt-7',
//     flex: 'R',
//   },
//   9: {
//     id: 9,
//     type: 'IRON(4~P)',
//     name: 'I-Brade',
//     userId: 1,
//     maker: 'タイトリスト',
//     shaft: 'pt-7',
//     flex: 'R',
//   },
//   11: {
//     id: 11,
//     type: 'SW(56 Degree)',
//     name: 'Ezone',
//     userId: 1,
//     maker: 'タイトリスト',
//     shaft: 'ダイナミックゴールド',
//     flex: 'R',
//   },
//   15: {
//     id: 15,
//     type: 'PUTTER',
//     name: 'future=X',
//     userId: 1,
//     maker: 'タイトリスト',
//     shaft: '純正シャフト',
//     flex: 'S',
//   },
// };
const initialState: ObjectClubType = {};

export default function ClubsReducer(
  state = initialState,
  action: Action<ObjectClubType>
): ObjectClubType {
  let newState = state;
  const clubs = action.payload || [];
  switch (action.type) {
    case ACTIONTYPES.ADD_CLUBS: {
      newState = { ...state, ...clubs };
      return newState;
    }
    case ACTIONTYPES.REMOVE_CLUBS: {
      const clubIds = Object.keys(clubs);

      for (let club in newState) {
        if (clubIds.includes(club)) {
          delete newState[club];
        }
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
