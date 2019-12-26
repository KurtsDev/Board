<template>
    <div class="messageList">
        <ul>
            <li :key="message.id" v-for="message in getMessages">
                <p>{{ message.title }} ({{ message.name }}) - {{ getDate(message.created_at) }}</p>

                <div v-show="message.show">
                <p>{{ message.email }}</p>
                <p>{{ message.phone }}</p>
                <p>{{ message.message }}</p>
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

        async mounted() {
            this.$store.dispatch('getMessage')
        },


    }


</script>

<style scoped>
    .messageList {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .show {
        display: block;
    }

    .hiden {
        display: none;
    }


</style>
