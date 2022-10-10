import React from 'react';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIENDS = [
    {
        id: 1,
        username: 'Mark',
        isOnline: true,
    },
    {
        id: 2,
        username: 'Jim',
        isOnline: false,
    },
    {
        id: 3,
        username: 'Pam',
        isOnline: false,
    }
];

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
});

function FriendsList() {
  return (
    <MainContainer>
        {DUMMY_FRIENDS.map(f => (
            <FriendsListItem 
                username={f.username}
                id={f.id}
                key={f.id}
                isOnline={f.isOnline}
            />
        ))}
    </MainContainer>
  )
}

export default FriendsList