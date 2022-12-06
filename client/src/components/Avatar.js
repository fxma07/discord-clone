import React from 'react'
import { styled } from '@mui/system'

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    backgroundColor: '#5865f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
    borderRadius: '100%',
});

const Avatar = ({ username, large}) => {
  return (
    <AvatarPreview
        style={large ? { height: '80px', width: '80px'} : {}}
    >
        {username.substring(0, 2)}
    </AvatarPreview>
  )
}

export default Avatar