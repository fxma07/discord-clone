import React from 'react';
import { styled } from '@mui/material';
import DropdownMenu from './DropdownMenu';
import ChosenOptionLabel from './ChosenOptionLabel';

const Maincontainer = styled('div')({
    position: 'absolute',
    right: '0',
    top: '0',
    height: '48px',
    borderBottom: '1px solid black',
    backgroundColor: '#36393f',
    width: 'calc(100% - 326px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
});

function AppBar() {
  return (
    <Maincontainer>
      <ChosenOptionLabel />
      <DropdownMenu />
    </Maincontainer>
  )
}

export default AppBar