<template>
  <header>
    <div id="logo"><font-awesome-icon :icon="['fas', 'rocket']"/> <strong>Space</strong> News</div>
  </header>
</template>

<script>
export default {
    name: "AppHeader"

}
</script>

<style>
    header{
        padding: 20px 0px;
        border-bottom: 1px solid var(--grey);
        background-color: var(--white);
        margin-bottom: 30px;
    }
    #logo{
        font-size: 25px;
    }
    #logo strong{
        color: var(--purple);
    }
</style>