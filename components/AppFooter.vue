<template>
  <footer>
    <p>&copy; 2022 Karolina Karmazaitė</p>
  </footer>
</template>

<script>
export default {
    name: "AppFooter"

}
</script>

<style scoped>
    footer{
        padding: 10px 0px;
        border-top: 1px solid var(--grey);
        background-color: var(--white);
    }
    p{
        font-size: 12px;
        color: var(--grey);
    }
</style>