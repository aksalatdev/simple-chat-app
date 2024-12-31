<template>
    <div>
        <input
            type="text"
            v-model="newMessage"
            class="form-control"
            placeholder="Type your message here..."
            @keyup.enter="sendMessage"
        />
        <button @click="sendMessage" class="btn btn-primary mt-2">Send</button>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            newMessage: "",
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== "") {
                this.$emit("messagesent", {
                    user: this.user,
                    message: this.newMessage,
                });
                this.newMessage = "";
            }
        },
    },
};
</script>
