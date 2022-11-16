import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import Sidebar from './Sidebar/Sidebar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../components/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/authActions'
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

function Dashboard({setUserDetails}) {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');

    if(!userDetails){
      logout();
    }else{
      //eslint-disable-next-line
      setUserDetails = (JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}


export default connect(null, mapActionsToProps)(Dashboard);