import React from 'react';
import { styled } from '@mui/material';
import DropdownMenu from './DropdownMenu';
import ChosenOptionLabel from './ChosenOptionLabel';

const Maincontainer = styled('div')({
    height: '48px',
    borderBottom: '1px solid black',
    backgroundColor: '#36393f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px',
});

const AppBar = () => {
  return (
    <Maincontainer>
      <ChosenOptionLabel />
      <DropdownMenu />
    </Maincontainer>
  )
}

export default AppBar