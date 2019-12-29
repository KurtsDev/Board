<template>
    <div class="messageArea">
        <b-form v-on:submit.prevent="messageSubmit">

            <b-form-input v-on:blur="onblur"  autocomplete="off" type="text" id="messageUserName" placeholder="Имя" name="messageUserName" v-model="messageUserName" :state="nameValid"></b-form-input>
            <b-form-invalid-feedback id="nameValid">Поле "Имя" должно содержать не более 30 символов</b-form-invalid-feedback>

            <b-form-input v-on:blur="onblur" autocomplete="off" type="text" id="messageUserEmail" placeholder="E-mail" name="messageUserEmail" v-model="messageUserEmail" :state="emailValid"></b-form-input>
            <b-form-invalid-feedback id="emailValid">Поле "E-mail" должно быть корректным е-мейлом и содержать не более 129 символов</b-form-invalid-feedback>

            <b-form-input v-on:blur="onblur" autocomplete="off" type="text" id="messageUserPhone" placeholder="Телефон" name="messageUserPhone" v-model="messageUserPhone" :state="phoneValid"></b-form-input>
            <b-form-invalid-feedback id="phoneValid">Поле "Телефон" должно содержать не более 16 символов</b-form-invalid-feedback>



            <b-form-input v-on:blur="onblur" autocomplete="off" type="text" id="messageTitle" placeholder="Заголовок *" name="messageTitle" v-model="messageTitleVal" :state="titleValid"></b-form-input>
            <b-form-invalid-feedback id="titleValid">Поле "Заголовок" обязательно для заполнения, не более 120 символов</b-form-invalid-feedback>



            <b-form-input v-on:blur="onblur" autocomplete="off" type="text" id="messageText" placeholder="Сообщение *" name="messageText" v-model="messageTextVal" :state="messageValid"></b-form-input>
            <b-form-invalid-feedback id="messageValid">Поле "Сообщение" обязательно для заполнения, не более 700 символов</b-form-invalid-feedback>



            <button type="submit">Отправить</button>

        </b-form>
    </div>
</template>

<script>
    export default {
        computed: {

            nameValid() {
                return this.$store.getters.currentBlurInput == 'messageUserName' ? this.$store.getters.nameValid : null;
            },
            emailValid() {
               return  this.$store.getters.currentBlurInput == 'messageUserEmail' ? this.$store.getters.emailValid : null;

            },
            phoneValid() {
                return  this.$store.getters.currentBlurInput == 'messageUserPhone' ? this.$store.getters.phoneValid : null;
            },
            titleValid() {
                return  this.$store.getters.currentBlurInput == 'messageTitle' ? this.$store.getters.titleValid : null;
            },
            messageValid() {
                return  this.$store.getters.currentBlurInput == 'messageText' ? this.$store.getters.messageValid : null;

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

            onblur: function(event) {
                if (event)
                    console.log(event.target.id);
                this.$store.dispatch('currentBlurInput', event.target.id)
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
