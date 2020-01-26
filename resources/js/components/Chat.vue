<template>
    <div class="chat-wrapper">

        <b-form v-on:submit.prevent="chatMessageSubmit">

            <b-textarea readonly no-resize rows="10"></b-textarea>

            <b-form-input v-model="textChat" name="textChat" id="textChat"></b-form-input>

            <button type="submit">Отправить</button>

        </b-form>

    </div>


</template>

<script>
    export default {
        computed: {


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
