import React from 'react'
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoom from './CreateRoom';

const Maincontainer = styled('div')({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#202225',
});

const Sidebar = () => {
  return (
    <Maincontainer>
      <MainPageButton />
      <CreateRoom />
    </Maincontainer>
  )
}

export default Sidebar