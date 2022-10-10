import React, { useState, useEffect} from 'react';
import { validateMail } from '../../components/utils/validators';
import Dialog from '@mui/material/Dialog'
import { DialogActions, DialogTitle, Typography } from '@mui/material';
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText';
import InputWithLabel from '../../components/InputWithLabel';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';


function AddFriendDialog({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {},
}) {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    const handleSentInvitation = () => {
        //send friend request to server
    }

    const handleCloseDialog = () => {
       closeDialogHandler();
       setMail('');
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);

  return (
    <div>
        <Dialog 

            open={isDialogOpen} 
            onClose={handleCloseDialog}
            PaperProps={{
                style: {
                backgroundColor: '#36393f',
                boxShadow: 'none',
                },
            }}

        >
            <DialogTitle>
                <Typography>Invite a Friend</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>Enter e-mail address of friend</Typography>
                </DialogContentText>
                <InputWithLabel 
                        label='Mail'
                        type='text'
                        value={mail}
                        setValue={setMail}
                        placeholder='Enter e-mail address'
                    />
            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton 
                    onClick={handleSentInvitation}
                    disabled={!isFormValid}
                    label='Send'
                    additionalStyles={{
                        marginLeft: '15px',
                        marginRight: '15px',
                        marginBottom: '10px',
                    }}
                />
            </DialogActions>
        </Dialog>
    </div>
  );
};

export default AddFriendDialog