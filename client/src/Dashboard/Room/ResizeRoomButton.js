import React from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/Icon';
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const Maincontainer =  styled('div')({
    position: 'absolute',
    bottom: '10px',
    right: '10px'
});

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize}) => {
    return (
        <Maincontainer>
            <IconButton style={{color: 'white'}} onClick={handleRoomResize}>
                {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullScreenIcon />}
            </IconButton>
        </Maincontainer>
    );
}

export default ResizeRoomButton;
