import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import Messages from './Messages/Messages';
import NewMessageInput from './NewMessageInput';
import { getDirectChatHistory } from '../../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '10px'
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  

  return (
    <Wrapper>
        <Messages />
        <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;