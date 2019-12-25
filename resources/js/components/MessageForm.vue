<template>
    <div class="messageArea">
        <form v-on:submit.prevent="messageSubmit">

            <label for="messageTitle">Заголовок</label>
            <input type="text" id="messageTitle" name="messageTitle" v-model="messageTitleVal">

            <label for="messageText">Сообщение</label>
            <input name="messageText" id="messageText" v-model="messageTextVal">

            <button type="submit">Отправить</button>

        </form>
    </div>
</template>

<script>
    export default {
        computed: {
            messageTitleVal: {
                get() {
                    return this.$store.state.messageTitleVal;
                },
                set(messageTitleVal) {
                    this.$store.dispatch('setMessageTitleVal', messageTitleVal)
                }
            },
            messageTextVal: {
                get() {
                    return this.$store.state.messageTextVal;
                },
                set(messageTextVal) {
                    this.$store.dispatch('setMessageTextVal', messageTextVal)
                }
            },
        },

        methods: {
            messageSubmit() {
                this.$store.dispatch('messageSubmit')
                this.$store.dispatch('getMessage')
            },
        }
    }
</script>


<style scoped>
    .messageArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
    }
</style>
