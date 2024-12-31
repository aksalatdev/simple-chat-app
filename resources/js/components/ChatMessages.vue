<template>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="message in messages"
            :key="message.id"
        >
            <strong>{{ message.user.name }}:</strong> {{ message.message }}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true,
        },
    },
};
</script>
