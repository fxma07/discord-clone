import React from 'react';
import Button from '@mui/material/Button';
import Avatar from '../../../components/Avatar'
import { Typography } from '@mui/material';
import OnlineIndicator from './OnlineIndicator';

function FriendsListItem({ username, id, isOnline }) {
  return (
    <Button
        style={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textTransform: 'none',
            color: 'black',
            position: 'relative',
        }}
    >
        <Avatar username={username} />
        <Typography
            style={{
                marginLeft: '7px',
                fontWeight: 700,
                color: '#8e9297'
            }}
            variant="subtitle1"
            align="left"
        >
            {username}
        </Typography>
        {isOnline && <OnlineIndicator />}
    </Button>
  )
}

export default FriendsListItem