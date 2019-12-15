<template>
    <div>
        <MessageList></MessageList>
        <MessageForm></MessageForm>
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
    div {
        display: flex;
        flex-direction: column;
    }
</style>


