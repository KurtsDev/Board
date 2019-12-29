<template>
    <div>
        <MessageForm></MessageForm>
        <MessageList></MessageList>
    </div>
</template>

<script>
    import MessageList from './components/MessageList'
    import MessageForm from './components/MessageForm'

    export default {
        components: {
            MessageForm,
            MessageList,
        }
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
        width: 500px;
    }
</style>


