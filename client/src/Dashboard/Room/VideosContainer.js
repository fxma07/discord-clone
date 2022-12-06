import React from 'react';
import {styled} from '@mui/system';
import { connect } from 'react-redux'
import Video from './Video'


const Maincontainer = styled('div')({
    height: '85%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
});

const VideosContainer = ({ localStream }) => {
    return (
        <Maincontainer>
            <Video stream={localStream} isLocalStream />
        </Maincontainer>
    );
}

const mapStoreStateToProps = ({ room }) => {
    return {
        ...room,
    }
}

export default connect(mapStoreStateToProps)(VideosContainer);
