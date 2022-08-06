
import { Box, Button, TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '../../mobx/store';

export default observer(function SendMessageForm() {
    const [message, setMessage] = useState('');
    const { signalRStore } = useStore()


    return (
        <Box>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    signalRStore.sendMessage(message);
                    setMessage('');
                }}>
                <TextField type="user" placeholder="message..."
                    sx={{ width: '100%' }}
                    onChange={e => setMessage(e.target.value)} value={message} />
                <Button type="submit" disabled={!message}>Send</Button>
            </form >
        </Box>


    )



})
