<template>
    <div class="messageArea">
        <b-form v-on:submit.prevent="messageSubmit">

            <b-form-input :state="validMessageUserName" autocomplete="off" type="text" id="messageUserName" placeholder="Имя" name="messageUserName" v-model="messageUserName"></b-form-input>

            <b-form-input :state="validMessageUserEmail" autocomplete="off" type="text" id="messageUserEmail" placeholder="E-mail" name="messageUserEmail" v-model="messageUserEmail"></b-form-input>

            <b-form-input :state="validMessageUserPhone" autocomplete="off" type="text" id="messageUserPhone" placeholder="Телефон" name="messageUserPhone" v-model="messageUserPhone"></b-form-input>

            <b-form-input :state="validMessageTitle" autocomplete="off" type="text" id="messageTitle" placeholder="Заголовок *" name="messageTitle" v-model="messageTitleVal"></b-form-input>

            <b-form-input :state="validMessageText" autocomplete="off" type="text" id="messageText" placeholder="Сообщение *" name="messageText" v-model="messageTextVal"></b-form-input>

            <button :disabled="submitDisabled" type="submit">Отправить</button>
<!--true lkz disable-->
        </b-form>
    </div>
</template>

<script>
    export default {
        computed: {
            validMessageUserName() {
                console.log();
                return this.$store.getters.validMessageUserName;
            },
            validMessageUserEmail() {
                return this.$store.getters.validMessageUserEmail;
            },
            validMessageUserPhone() {
                return this.$store.getters.validMessageUserPhone;
            },
            validMessageTitle() {
                return this.$store.getters.validMessageTitle;
            },
            validMessageText() {
                return this.$store.getters.validMessageText;
            },
            submitDisabled() {
                if ((this.$store.getters.validMessageUserName === false || null) ||
                    (this.$store.getters.validMessageUserEmail === false || null) ||
                    (this.$store.getters.validMessageUserPhone === false || null) ||
                    (!this.$store.getters.validMessageTitle) ||
                    (!this.$store.getters.validMessageText)) {
                    return true;
                }

            },


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

        },


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

    .required {
        color: #dc3545;
    }

    input {
        margin-bottom: 5px;
    }


</style>
