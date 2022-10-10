import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationsList from './PendingInvitationList/PendingInvitationsList';

const Maincontainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2F3136',
});

function FriendsSideBar() {
  return (
    <Maincontainer>
      <AddFriendButton />
      <FriendsTitle title='Private Messages' />
      <FriendsList />
      <FriendsTitle title='Invitations'/>
      <PendingInvitationsList />
    </Maincontainer>
  )
}

export default FriendsSideBar