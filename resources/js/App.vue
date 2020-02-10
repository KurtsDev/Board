<template>
    <div>
        <router-view name="city"></router-view>
        <router-view name="chat"></router-view>
        <router-view name="form"></router-view>
        <router-view name="list"></router-view>
        <router-view name="chatList"></router-view>

    </div>
</template>

<script>

    import MessageForm from "./components/MessageForm";
    import MessageList from "./components/MessageList";
    import Chat from "./components/Chat";
    import ChatList from "./components/ChatList";

    export default {
        components: {MessageList, MessageForm, Chat, ChatList}
    }

</script>

<style scoped>
    body {
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>


