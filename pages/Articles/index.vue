<template>
        <main>
            <h1 id="content-title">Articles</h1>
            <div id="article-list">
                <Article v-for="article in articles" :key="article.id" :article="article" />
            </div>
        </main>
</template>

<script lang='ts'>

import Vue from 'vue'
import Article from "~/components/Article.vue"
import {ref} from "@nuxtjs/composition-api"
import ArticleInterface from '@/types/ArticleInterface'
import ArticleService from '~/services/ArticleService'

export default Vue.extend({
    head(){
        return{
            title:'Articles',
            meta:[
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Articles'
                }
            ]
        }
    },
    components: {
        Article
    },


    setup(){
        const articles = ref<ArticleInterface[]>([])

        ArticleService.getArticles()
            .then(response => { 
                articles.value = response.data
                }) 
            .catch((error:any) => {
                return error({ statusCode: 503, message: 'Unable to fetch articles at this time, please try again' })
            })      

        return{
            articles
        }
    }
})
</script>

<style scope>
    #content{
        padding: 5vh 10vw;
    }
    #article-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 35px;
    }

</style>