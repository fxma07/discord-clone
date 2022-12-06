import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';

const ScreenShareButton = () => {
    const [screenShare, setScreenShare] = useState(true);

    const handleToggleScreenShare = () => {
        setScreenShare(!screenShare);
    }
    return (
        <IconButton onClick={handleToggleScreenShare} style={{color: 'white'}}>
            {screenShare ? <StopScreenShareIcon /> : <ScreenShareIcon />}
        </IconButton>
    );
}

export default ScreenShareButton;
