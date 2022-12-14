import React from 'react'
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import ActiveRoomButton from './ActiveRoomButton';
import CreateRoom from './CreateRoom';
import { connect } from 'react-redux';

const Maincontainer = styled('div')({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#202225',
});

const Sidebar = ({ activeRooms, isUserInRoom }) => {
  return (
    <Maincontainer>
      <MainPageButton />
      <CreateRoom />
      {activeRooms.map(room => (
        <ActiveRoomButton 
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
        />
      ))}
    </Maincontainer>
  );
};

const mapStoreStateToProps = ({room}) => {
  return {
    ...room
  };
};

export default connect(mapStoreStateToProps)(Sidebar);