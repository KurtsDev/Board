<template>
    <div class="chatList">
        <div v-for="(key, value) in chatList">
            <p>{{key.chatName}}</p>
            <p v-text="lastMessage(key.chatMessage)"></p>

        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            chatList() {
                console.log(this.$store.getters.chatList);
                return this.$store.getters.chatList;
            },
        },

        methods: {
            lastMessage(messageArr) {
                return messageArr[messageArr.length - 1];
            }
        },


    }
</script>

<style scoped>


    .chatList {
        display: flex;
        flex-direction: column;
        justify-content: normal;
    }


    .chatList > div {
        width: 342px;
        border: 2px solid black;
    }


</style>
