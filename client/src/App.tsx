import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import Top from './components/pages/Top';
import Users from './components/pages/Users';
import User from './components/pages/User';
import UserEdit from './components/pages/UserEdit';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Tos from './components/pages/Tos';
import Login from './components/pages/Login';
import LogOut from './components/pages/LogOut';
import SignUp from './components/pages/SignUp';
import Modal from './components/templates/Modal';
import { getUsers, getMakers, getShafts, getTypes, checkLoginUser } from './actions';
import { ROUTE, INFOROUTE } from './utils/constant/route';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート
import { State } from './@types/store';

library.add(fas, far, fab);

interface Props {}
const Container = styled.div`
  width: 100%;
`;

const App: React.FC<Props> = () => {
  const currentUser: UserType = useSelector((state: State) => state.currentUser, shallowEqual);
  const storeUsers: ObjectUserType = useSelector((state: State) => state.users, shallowEqual);
  const storeClubs = useSelector((state: State) => state.clubs, shallowEqual);
  const storeResults = useSelector((state: State) => state.results, shallowEqual);
  const storeVideos = useSelector((state: State) => state.videos, shallowEqual);
  const storeBalls = useSelector((state: State) => state.balls, shallowEqual);
  const storeModal = useSelector((state: State) => state.modal, shallowEqual);
  const dispatch = useDispatch();
  const existedCurrentUser = 0 !== Object.keys(currentUser).length;

  //develop時に一時的に使用。
  const allUsers = Object.values(storeUsers);
  // const allUsers =
  //   Object.values(storeUsers).length === 0 ? [currentUser] : [...Object.values(storeUsers)];
  //

  useEffect(() => {
    dispatch(checkLoginUser());
    dispatch(getUsers());
    dispatch(getShafts());
    dispatch(getMakers());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <Container>
      <Route
        exact
        path={ROUTE.USERS}
        render={() => <Users currentUser={currentUser} allUsers={allUsers} />}
      />
      {allUsers.map((user: PartialUserType, num: number) => {
        return (
          <React.Fragment key={num}>
            <Route
              exact
              path={`/users/${user.id}`}
              render={() =>
                user.id === currentUser.id ? (
                  <User
                    currentUser={currentUser}
                    targetUser={currentUser}
                    storeClubs={storeClubs}
                    storeBalls={storeBalls}
                    storeVideos={storeVideos}
                    storeResults={storeResults}
                  />
                ) : (
                  <User
                    currentUser={currentUser}
                    targetUser={user}
                    storeClubs={storeClubs}
                    storeBalls={storeBalls}
                    storeVideos={storeVideos}
                    storeResults={storeResults}
                  />
                )
              }
            />
            <Route
              exact
              path={`/users/${user.id}/edit`}
              render={() =>
                user.id === currentUser.id ? (
                  <UserEdit
                    currentUser={currentUser}
                    storeClubs={storeClubs}
                    storeBalls={storeBalls}
                    storeVideos={storeVideos}
                    storeResults={storeResults}
                  />
                ) : (
                  <Redirect to={ROUTE.TOP} />
                )
              }
            />
          </React.Fragment>
        );
      })}

      <Route exact path={ROUTE.TOP} render={() => <Top currentUser={currentUser} />} />
      <Route
        exact
        path={ROUTE.LOGIN}
        render={(props) =>
          existedCurrentUser ? (
            <Redirect to={ROUTE.TOP} />
          ) : (
            <Login {...props} currentUser={currentUser} />
          )
        }
      />
      <Route exact path={`/logout`} render={() => <LogOut currentUser={currentUser} />} />
      <Route
        exact
        path={ROUTE.SIGNUP}
        render={(props) =>
          existedCurrentUser ? (
            <Redirect to={ROUTE.TOP} />
          ) : (
            <SignUp {...props} currentUser={currentUser} />
          )
        }
      />
      <Route exact path={INFOROUTE.CONTACT} render={() => <Contact currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.ABOUT} render={() => <About currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.PRIVACY} render={() => <Privacy currentUser={currentUser} />} />
      <Route exact path={INFOROUTE.TOS} render={() => <Tos currentUser={currentUser} />} />
      <Route exact path={'*'} render={() => <Redirect to={ROUTE.TOP} />} />
      <Modal show={storeModal.show} component={storeModal.component} />
    </Container>
  );
};

export default App;
