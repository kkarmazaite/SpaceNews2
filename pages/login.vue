<template>
        <main>
            <h1 id="content-title">Login</h1>
            <form  @submit.prevent="onSubmit" id="login-form">
                <div class="input-row-container">
                    <label for="userName">Username</label>
                    <div class="input-field-container">
                        <font-awesome-icon class="input-icon" :icon="['fas', 'user']"/>
                        <input v-model="userName" name="userName" type="text">
                    </div>
                </div>
                <div class="input-row-container">
                    <label for="password">Password</label>
                    <div class="input-field-container">
                        <font-awesome-icon class="input-icon" :icon="['fas', 'lock']"/>
                        <input v-model="password" name="password" type="password">
                    </div>
                </div>
                <input v-show="userName!=='' || password!==''" type="submit" value="Login">
            </form>
        </main>
</template>

<script lang='ts'>

import Vue from 'vue'
import {ref,  useRouter} from "@nuxtjs/composition-api"

export default Vue.extend({
    layout: "login",

    head(){
        return{
            title:'Login',
            meta:[
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Login'
                }
            ]
        }
    },
    setup(){
        const userName = ref<string>("")
        const password = ref<string>("")
        const router = useRouter()

        function onSubmit(){
           router.push('/articles')
        }

        return{
            userName: userName,
            password: password,
            onSubmit: onSubmit
        }
    }
})
</script>

<style scope>
    #login-form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .input-row-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .input-row-container label{
        font-weight: bold;
    }
    .input-field-container{
        position: relative;
        width: 100%;
    }
    .input-icon{
        position: absolute;
        top: 5px;
        left: 5px;
    }
    .input-field-container input{
        padding: 5px 10px 5px 30px;
        height: 30px;
        width: 100%;
        background-color: transparent;
        border-bottom: 1px solid var(--grey);
    }
    .input-field-container input:focus{
        border-bottom: 3px solid var(--purple);
        background-color: transparent;
    }
    #login-form input[type=submit]{
        background-color: var(--purple);
        color: var(--white);
        font-size: 20px;
        font-weight: bold;
        margin: 30px 0px;
        height: 40px;
        border-radius: 4px;
    }
    #login-form input[type=submit]:hover{
        cursor: pointer;
        filter: brightness(110%);
    }
</style>