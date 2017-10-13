<template>
    <div>
        <h1>view one</h1>
        <ol>
            <li v-for="person in persons">
                <span>{{ person.name }}</span>
                <span>{{ person.income }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    import {store} from '../store/store'
    export default {
        computed: {
            persons () {
                return this.$store.state.person_infos
            }
        }
    }

</script>

<style scoped>
    li{
        color: red;
    }
</style>