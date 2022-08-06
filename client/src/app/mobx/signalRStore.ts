import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { env } from "process";
import { Message } from "../model/message";


export default class SignalRStore {

    hubConnection: HubConnection | null = null;
    messages: Message[] = []
    users: string[] = []

    constructor() {
        makeAutoObservable(this)
    }


    createHubConnection = async (user: string, room: string) => {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl(process.env.REACT_APP_CHAT_URL as string)
            .configureLogging(LogLevel.Information)
            .build();

        await this.hubConnection.start().catch(err => console.log(err))


        this.hubConnection.on("ReceiveMessage", (user, message) => {
            runInAction(() => {
                const createdAt = new Date()
                this.messages.push({ user, message, createdAt })
                console.log(createdAt)
            })

        });

        this.hubConnection.on("UsersInRoom", (users) => {
            runInAction(() => {
                this.users = users;
            })
        });

        this.hubConnection.invoke("JoinRoom", { user, room })

    }


    sendMessage = async (message: string) => {
        try {
            if (this.hubConnection !== null)
                await this.hubConnection.invoke("SendMessage", message);
        } catch (e) {
            console.log(e);
        }
    }


    closeConnection = async () => {
        try {
            if (this.hubConnection !== null)
                await this.hubConnection.stop().catch(err => console.log(err));
        } catch (e) {
            console.log(e);
        }
    }




}