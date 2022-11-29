import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';
import  AppBar  from '../AppBar/AppBar';


const Maincontainer = styled('div')({
    flexGrow: 1,
    backgroundColor: '#36393f',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

const Messenger = ({ chosenChatDetails }) => {
  return (
     <Maincontainer>
       <AppBar />
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
     </Maincontainer>
   
    
  )
}

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat
  }
}

export default connect(mapStoreStateToProps)(Messenger);