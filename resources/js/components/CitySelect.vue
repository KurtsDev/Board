<template>
    <div class="cityList">
        <h1>города</h1>
        <ul>
            <li v-for="city in cities" :key="city.id">
                <router-link :to="city.id.toString()">{{city.city}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            cities() {
                return this.$store.getters.getCity;
            }
        },
        mounted() {
            this.$store.dispatch('initListCity');
        }
    }
</script>

<style scoped>

    .cityList ul {
        column-count: 4;
    }

    li {
        list-style: none;
    }

</style>
