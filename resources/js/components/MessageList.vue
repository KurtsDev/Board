<template>
    <div class="messageList">
        <ul>
            <li :key="message.id" v-for="message in getMessages">
                <div class="liArrow">
                    <img v-bind:class="{arrowOpen: message.show, arrowClose: !message.show}"
                         src="../../images/arrow.png">
                    <p v-on:click="showMessage(message.id)" class="messageString">{{ message.title }} {{ message.name }}
                        - {{ getDate(message.created_at) }}</p>
                </div>

                <div class="details" v-show="message.show">
                    <a v-if="message.email" v-bind:href="mailTo(message.email)">{{ message.email }}</a>
                    <a v-if="message.phone" v-bind:href="tel(message.phone)">{{ message.phone }}</a>
                    <p>{{ message.message }}</p>
                    <a v-on:click="createRoom(message.user_id, message.id, message.title)"
                       v-bind:to="chatHref(message.user_id, message.id)">Открыть чат</a>


                </div>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {

        computed: {

            getMessages() {
                return this.$store.getters.getMessages;
            },
        },

        methods: {
            createRoom(messageUserId, messageId, messageTitle) {

                let roomInfo = {
                    messageUserId,
                    messageId,
                    messageTitle,
                };

                this.$store.dispatch('createRoom', roomInfo, {root: true})

            },

            chatHref(userId, messageId) {
                return 'chat-' + userId + '-' + messageId;

            },

            mailTo(email) {
                return 'mailto:' + email;
            },

            tel(phone) {
                return 'tel:' + phone;
            },

            showMessage(id) {
                this.$store.dispatch('showMessage', id)
            },

            getDate(data) {
                let messageDay = new Date(data).getDate() == new Date().getDate() ? 'Сегодня ' : new Date(data).getDate();
                let messageMonth = getMonth();
                let messageHours = new Date(data).getHours();
                let messageMinutes = new Date(data).getMinutes() < 9 ? '0' + new Date(data).getMinutes() : new Date(data).getMinutes();

                function getMonth() {
                    let allMonth = {
                        0: 'Января',
                        1: 'Февраля',
                        2: 'Марта',
                        3: 'Апреля',
                        4: 'Мая',
                        5: 'Июня',
                        6: 'Июля',
                        7: 'Августа',
                        8: 'Сентября',
                        9: 'Октября',
                        10: 'Ноября',
                        11: 'Декабря',
                    };
                    return allMonth[new Date(data).getMonth()];
                }

                let fullMessageDate = messageDay == 'Сегодня ' ?
                    messageDay + ' в ' + messageHours + ':' + messageMinutes :
                    messageDay + ' ' + messageMonth + ' в ' + messageHours + ':' + messageMinutes;

                return fullMessageDate;
            }
        },

        mounted() {
            this.$store.dispatch('initListMessage');

        },

    }


</script>

<style scoped>

    .messageList {
        display: flex;
        width: 400px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style-type: none;
    }

    li {
        list-style: none;
    }

    .liArrow {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .liArrow img {
        margin: 5px 10px;
        width: 20px;
        height: 20px;
    }

    .details {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }

    .arrowOpen, .arrowClose {
        transition-duration: .2s;
    }

    .arrowOpen {
        transform: rotate(270deg);
    }

    .arrowClose {
        transform: rotate(180deg);
    }

    .messageString {
        cursor: pointer;
        color: #21254B
    }

    .messageString:hover {
        color: #212506;
    }


</style>
