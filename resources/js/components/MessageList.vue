<template>
    <div class="messageList">
        <h3>Messages</h3>
        <ul>
            <li :key="message.id" v-for="message in getMessages">{{ message.title }} - {{ message.created_at }}</li>
        </ul>

        <div v-if="loading">
            <p>111</p>
        </div>

    </div>

</template>

<script>
    export default {
        computed: {
            getMessages() {
                console.log('1');
                return this.$store.getters.getMessages;
            },
            loading() {
                return this.$store.getters.loading;
            }
        },

        async mounted() {
            this.$store.dispatch('getMessage')
        }

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
