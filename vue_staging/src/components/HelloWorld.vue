<template>
  <h2 class="title">Hello,{{name}}</h2>
</template>

<script>
export default {
    data() {
        return {
            name: "职小白"
        }
    }
}
</script>

<style>
    .title {
        background-color: aquamarine;
    }
</style>