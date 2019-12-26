<template>
    <div class="messageArea">
        <form v-on:submit.prevent="messageSubmit">

            <label for="messageUserName">Имя</label>
            <input type="text" id="messageUserName" name="messageUserName" v-model="messageUserName">

            <label for="messageUserEmail">E-mail</label>
            <input type="text" id="messageUserEmail" name="messageUserEmail" v-model="messageUserEmail">

            <label for="messageUserPhone">Телефон</label>
            <input type="text" id="messageUserPhone" name="messageUserPhone" v-model="messageUserPhone">

            <label for="messageTitle">Заголовок</label>
            <input type="text" id="messageTitle" name="messageTitle" v-model="messageTitleVal">

            <label for="messageText">Сообщение</label>
            <input type="text" id="messageText"  name="messageText" v-model="messageTextVal">

            <button type="submit">Отправить</button>

        </form>
    </div>
</template>

<script>
    export default {
        computed: {

            messageUserName: {
                get() {
                    return this.$store.state.messageUserName;
                },
                set(messageUserName) {
                    this.$store.dispatch('setMessageUserName', messageUserName)
                }
            },


            messageUserEmail: {
                get() {
                    return this.$store.state.messageUserEmail;
                },
                set(messageUserEmail) {
                    this.$store.dispatch('setMessageUserEmail', messageUserEmail)
                }
            },

            messageUserPhone: {
                get() {
                    return this.$store.state.messageUserPhone;
                },
                set(messageUserPhone) {
                    this.$store.dispatch('setMessageUserPhone', messageUserPhone)
                }
            },








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
