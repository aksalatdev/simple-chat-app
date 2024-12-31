import { createApp } from "vue";
import ChatMessages from "./components/ChatMessages.vue";
import ChatForm from "./components/ChatForm.vue";
import axios from "axios";
import "./bootstrap";

const app = createApp({
    data() {
        return {
            messages: [],
        };
    },
    methods: {
        fetchMessages() {
            axios.get("/messages").then((response) => {
                this.messages = response.data;
            });
        },
        addMessage(message) {
            this.messages.push(message);

            axios.post("/messages", message).then((response) => {
                console.log(response.data.status);
            });
        },
    },
    mounted() {
        this.fetchMessages();

        console.log("Subscribing to private-chat channel...");

        window.Echo.private("private-chat")
            .listen("MessageSent", (e) => {
                console.log("Message received: ", e);
                this.messages.push({
                    message: e.message.message,
                    user: e.user,
                });
            })
            .error((error) => {
                console.error(
                    "Error subscribing to private-chat channel:",
                    error
                );
            });
    },
});

app.component("chat-messages", ChatMessages);
app.component("chat-form", ChatForm);

app.mount("#app");
