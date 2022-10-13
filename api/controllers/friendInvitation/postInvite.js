const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdate = require('../../socketHandlers/updates/friends');

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;
    
    const { userId, mail } = req.user;

    // check if friend that is not the same as user
    if(mail.toLowerCase() === targetMailAddress.toLowerCase()){
        return res.status(409).send('Unable to add the yourself');
    }

    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase()
    });

    //check if target user exists in database    
    if(!targetUser) {
        return res.status(404).send(`${targetMailAddress} not found`);
    }

    //check if invitation has been already sent
    const invitationAlreadySent = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser._id
    });

    if(invitationAlreadySent){
        return res.status(409).send('Invitation already sent')
    }

    //check if user is already friend

    const userAlreadyFriend = targetUser.friends.find(friendId => {
        friendId.toString() === userId.toString()
    })

    if(userAlreadyFriend){
        return res.status(409).send('Friend already added');
    }
    
    //create new invitation in database
    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id,
    });

    //if invitation has been successfully sent update friends invitations
    //send pending invitations update to specific user
    friendsUpdate.updateFriendsPendingInvitations(targetUser._id.toString());

    return res.status(201).send('Invitation has been sent');
};

module.exports = postInvite;