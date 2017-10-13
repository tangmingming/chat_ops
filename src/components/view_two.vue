<template>
    <div>
        <h1>view two</h1>
        <ol>
            <li v-for="person in persons">
                <span>{{ person.name }}</span>
                <span>{{ person.income }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: ["persons"],
        data: function () {
            return {

            }
        }
    }

</script>

<style scoped>
</style>