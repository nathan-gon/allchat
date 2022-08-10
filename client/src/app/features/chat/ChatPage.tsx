import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../mobx/store";
import ChatContent from "./ChatContet";
import SendMessageForm from "./SendMessageForm";




export default observer(function ChatPage() {
    const { signalRStore } = useStore()


    return (
        <>
            <Box>
                <Button color="error" onClick={() => {
                    signalRStore.closeConnection()
                    window.location.reload();
                }} >Leave Room</Button>
                <Typography marginLeft='5px' variant="h6">Connected Users</Typography>
                <Divider />
                <Grid height='100vh' container display='flex' justifyContent='space-between' marginTop={2}    >
                    <Grid item xs={3} sm={3}>
                        {signalRStore.users.map((user, i) => (
                            <div key={i}>
                                <Typography fontWeight={600} marginLeft='20px' letterSpacing={1} >{user}</Typography>
                                <Divider sx={{ paddingTop: '5px' }} />
                            </div>
                        ))}
                    </Grid>
                    <Grid item xs={1} sm={1} >
                        <Divider orientation='vertical' sx={{ height: '100%' }} />
                    </Grid>
                    <Grid item xs={8} sm={8}   >
                        <Grid container>
                            <Grid sx={{ height: { xs: '29rem', sm: '50rem' } }} marginTop={-3} item xs={12} sm={12} height='50rem'  >
                                <ChatContent />
                            </Grid>
                            <Grid item sm={12}   >
                                <SendMessageForm />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Box >

        </>

    )
})