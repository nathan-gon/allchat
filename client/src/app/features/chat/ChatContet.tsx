import { ListItem, Grid, ListItemText, Typography, Divider, List } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';

import { useStore } from '../../mobx/store';

export default observer(function ChatContent() {
    const { signalRStore } = useStore();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <>
            <List sx={{ overflow: 'auto', height: { xs: '28rem', sm: '49rem' } }} >
                {signalRStore.messages.map((m, i) => (
                    < ListItem key={i} >
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText sx={{ color: 'blue', overflow: 'auto' }} > {m.message} </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize='12px' >{m.user} </Typography>
                                <Divider sx={{ width: '28%' }} variant='middle' />
                            </Grid>
                        </Grid>
                    </ListItem >
                ))}
                <div ref={ref}>

                </div>
            </List>

        </>

    );
});
