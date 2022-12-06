import React from 'react';
import { styled } from '@mui/system';
import CameraButton from './CameraButton';
import CloseRoomButton from './CloseRoomButton';
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';

const Maincontainer = styled('div')({
    height: '15%',
    width: '100%',
    backgroundColor: '#5865f2',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const RoomButtons = () => {
    return (
        <Maincontainer>
            <CameraButton/>
            <MicButton />
            <ScreenShareButton />
            <CloseRoomButton /> 
        </Maincontainer>
    );
}

export default RoomButtons;
