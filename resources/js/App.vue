<template>
    <div>
        <router-view name="city"></router-view>
        <router-view name="form"></router-view>
        <router-view name="list"></router-view>
        <!--        <message-form></message-form>-->
        <!--        <message-list></message-list>-->
    </div>
</template>

<script>

    import MessageForm from "./components/MessageForm";
    import MessageList from "./components/MessageList";

    export default {
        components: {MessageList, MessageForm}
    }

</script>

<style scoped>
    body {
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        flex-direction: column;
    }
</style>


