<template>
    <div class="chat-wrapper">

        <h2>{{activeChat}}</h2>
        <b-form v-on:submit.prevent="chatMessageSubmit">

            <textarea readonly no-resize rows="10">
                {{messagesChat}}
            </textarea>

            <b-form-input autocomplete="off" v-model="textChat" name="textChat" id="textChat"></b-form-input>

            <button :disabled="chatSubmitDisabled" @keyup.enter type="submit">Отправить</button>

        </b-form>

    </div>


</template>

<script>
    export default {
        computed: {
            chatSubmitDisabled() {
                return !this.$store.getters.chatSubmitDisabled;
            },


            activeChat() {
                return this.$store.getters.activeChat;
            },

            messagesChat() {
                if (Array.isArray(this.$store.getters.messagesChat))
                return this.$store.getters.messagesChat.join('\n');
            },


            textChat: {
                get() {
                    return this.$store.state.textChat;
                },
                set(textChat) {
                    this.$store.commit('textChat', textChat)
                }
            },

        },

        methods: {
            chatMessageSubmit() {
                this.$store.dispatch('chatMessageSubmit')
            }
        }

    }
</script>

<style scoped>


</style>
