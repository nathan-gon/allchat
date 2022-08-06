
import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import ChatPage from "../features/chat/ChatPage";
import Lobby from "../features/chat/Lobby";
import { useStore } from "../mobx/store";



function App() {

  const { signalRStore } = useStore()

  return (

    <Box sx={{ height: '100vh' }} >
      <h1 style={{ textAlign: 'center' }} >AllChat</h1>
      {!signalRStore.hubConnection ?
        <Lobby />
        : <ChatPage />
      }
    </Box>

  );
}

export default observer(App);
