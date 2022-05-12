<template>
        <div class="title">
            <h1  id="content-title">Error: {{ error.statusCode }} </h1>
            <p>{{ error.message }} </p>
            <button @click="this.$router.go(-1)">Go Back</button>
        </div>
</template>

<script>
export default {
    props: ['error'],

}
</script>

<style>
   button{
       background-color: var(--purple);
        color: var(--white);
        font-size: 20px;
        font-weight: bold;
        padding: 10px 20px;
        margin: 30px 0px;
        height: 40px;
        border-radius: 4px;
    }
    button:hover{
        cursor: pointer;
        filter: brightness(110%);
    }
</style>