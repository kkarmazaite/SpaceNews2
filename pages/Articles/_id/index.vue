<template>
        <main v-if="article">
            <h1 id="content-title">{{article.title}}</h1>
            <div id="article-info">
                <small>{{article.newsSite}} - {{published}}</small>
                <img :src="article.imageUrl" alt="">
                <p>{{article.summary}}</p>
                <button @click="goToFullArticle()">Read full article</button>
            </div>
        </main>
</template>

<script lang='ts'>

import {computed,  useRoute, ref, defineComponent, reactive} from "@nuxtjs/composition-api"
import ArticleInterface from '@/types/ArticleInterface'
import ArticleService from '~/services/ArticleService'

export default defineComponent({
    setup(){
        const route = useRoute()
        const id = computed<number>(() => {
            return Number(route.value.params.id)
            })

        // const  article = ref<ArticleInterface>(<ArticleInterface>{})
        let  article = reactive(<ArticleInterface>{})

        ArticleService.getArticle(id.value)
            .then(response => { 
                article= response.data
                })  
            .catch((error:any) => {
                return error({ statusCode: 503, message: 'Unable to fetch articles at this time, please try again' })
            })  
 
        const  published = computed<string>(() => (article.publishedAt) ? article.publishedAt.slice(0, 10): "")

        function goToFullArticle(){
            window.open(article.url, '_blank')!.focus();
        }

        return{
            goToFullArticle,
            article,
            published
        }
    }
})
</script>

<style scope>
    #content{
        padding: 5vh 10vw;
    }
    #article-info{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    #article-info img{
        height: 400px;
        width: 100%;
        object-fit: cover;
    }
    #article-info button{
       background-color: var(--purple);
        color: var(--white);
        font-size: 20px;
        font-weight: bold;
        margin: 30px 0px;
        height: 40px;
        border-radius: 4px;
    }
    #article-info button:hover{
        cursor: pointer;
        filter: brightness(110%);
    }
</style>