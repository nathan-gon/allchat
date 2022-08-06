import { ListItem, Grid, ListItemText, Typography, Divider, List } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../mobx/store";

export default observer(function ChatContent() {

    const { signalRStore } = useStore()




    return (

        <List>
            {signalRStore.messages.map((m, i) => (
                < ListItem key={i} >
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText sx={{ color: 'blue' }} > {m.message} </ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography fontSize='12px'  >{m.user} </Typography>
                            <Divider sx={{ width: '28%' }} variant='middle' />
                        </Grid>
                    </Grid>
                </ListItem >
            ))}

        </List>



    )

})