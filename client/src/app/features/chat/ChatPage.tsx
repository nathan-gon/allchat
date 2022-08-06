import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../mobx/store";
import ChatContent from "./ChatContet";
import SendMessageForm from "./SendMessageForm";




export default observer(function ChatPage() {
    const { signalRStore } = useStore()
    return (
        <Box>
            <Box>
                <Button color="error" onClick={() => {
                    signalRStore.closeConnection()
                    window.location.reload();
                }} >Leave Room</Button>
            </Box>
            <Typography marginLeft='5px' variant="h6">Connected Users</Typography>
            <Divider />
            <Grid container display='flex' justifyContent='space-between' marginTop={2}    >
                <Grid item xs={3} sm={3}>
                    {signalRStore.users.map((user, i) => (
                        <>
                            <Typography fontWeight={600} marginLeft='20px' letterSpacing={1} key={i}>{user}</Typography>
                            <Divider sx={{ paddingTop: '5px' }} />
                        </>
                    ))}
                </Grid>
                <Divider orientation='vertical' sx={{ height: '100vh' }} />

                <Grid item xs={8} sm={8} marginTop={-3}  >
                    <Grid height='80%' container justifyContent='space-between' >
                        <Grid item sm={9}  >
                            <ChatContent />
                        </Grid>
                        <Grid item sm={3} display='flex' alignItems='flex-end'    >
                            <SendMessageForm />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box >

    )
})