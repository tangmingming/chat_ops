<template>
    <div>
        <p>username: {{ $route.params.username }}</p>
        <p>age: {{ $route.params.age }}</p>
        <router-view></router-view>
    </div>
</template>