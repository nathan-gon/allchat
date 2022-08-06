import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";


export class Hub {
    hubconnection: HubConnection | null = null;

    createHubConnection() {
        this.hubconnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7187/chat')
            .configureLogging(LogLevel.Information)
            .build();

        this.hubconnection.start()
            .catch(err => console.log(err));




    }

}