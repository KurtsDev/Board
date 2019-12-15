<template>
    <div class="messageList">
        <h3>Messages</h3>
        <ul>
            <li :key="message.id" v-for="message in messages">{{ message.title }} - {{ message.created_at }}</li>
        </ul>



    </div>



</template>

<script>
    export default {
        data() {
            return {
                messages: [],

            }
        },
        created() {
            axios.get('api/getMessage')
                .then(response => {
                    this.messages = response.data;
                })
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
</style>
