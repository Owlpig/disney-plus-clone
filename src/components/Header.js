import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import {
  selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails,
} from '../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = user => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }),
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth.signInWithPopup(provider).then(result => {
        setUser(result.user);
      }).catch(error => {
        // eslint-disable-next-line
        alert(error.message);
      });
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        history.push('/');
      }).catch(error => {
        // eslint-disable-next-line
        alert(error.message);
      });
    }
  };

  return (
  <Nav>
    <Logo>
      <img src='/images/logo.svg' alt='Disney+'/>
    </Logo>
    { !userName ? <Login onClick={handleAuth}>Login</Login>
      : <>
    <NavMenu>
      <a href='/home'>
        <img src='/images/home-icon.svg' alt='Home'/>
        <span>HOME</span>
      </a>
      <a href='/home'>
        <img src='/images/search-icon.svg' alt='Search'/>
        <span>SEARCH</span>
      </a>
      <a href='/home'>
        <img src='/images/watchlist-icon.svg' alt='Watchlist'/>
        <span>WATCHLIST</span>
      </a>
      <a href='/home'>
        <img src='/images/original-icon.svg' alt='Originals'/>
        <span>ORIGINALS</span>
      </a>
      <a href='/home'>
        <img src='/images/movie-icon.svg' alt='Movies'/>
        <span>MOVIES</span>
      </a>
      <a href='/home'>
        <img src='/images/series-icon.svg' alt='Series'/>
        <span>SERIES</span>
      </a>
    </NavMenu>
    <SignOut>
      <UserImg src={userPhoto} alt={userName}/>
      <DropDown>
        <span onClick={handleAuth}>Sign out</span>
      </DropDown>
    </SignOut>
    </>}
  </Nav>
  );
};

export default Header;
