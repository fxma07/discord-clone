const serverStore = require('../serverStore');

const roomCreateHandler = (socket) => {
    console.log('handling room create event')
    const socketId = socket.id;
    const userId = socket.user.userId;

    const roomDetails = serverStore.addNewActiveRoom(userId, socketId);

    socket.emit('create-room', {
        roomDetails,
    });
};


module.exports = roomCreateHandler;

