import { Button, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../mobx/store";



export default observer(function Lobby() {
    const { signalRStore } = useStore()
    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault()
        signalRStore.createHubConnection(user, room);
    }



    return (
        <Box component={Paper} maxWidth="sm" sx={{
            display: 'flex', flexDirection: 'column'
            , alignItems: 'center', p: 4, margin: "0 auto",
            border: '1px solid black 0.2', marginTop: '20px'
        }} >
            <form onSubmit={(e) => handleSubmit(e)}>
                <Box display='flex' justifyContent='center' flexDirection='column'>
                    <TextField label="username" margin="normal" onChange={e => setUser(e.target.value)} name='user' value={user} />
                    <TextField label='Room' onChange={e => setRoom(e.target.value)} name='room' value={room} />
                    <Button sx={{ marginTop: '10px' }} variant='contained' color='primary' type="submit" > Join </Button>
                </Box>
            </form>
        </Box>

    )
})