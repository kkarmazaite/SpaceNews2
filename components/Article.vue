<template>
  <!-- <nuxt-link :to="'articles/' + article.id"> -->
    <!-- <div  @click="this.$router.push('/articles/'+ this.article.id)" class="article"> -->
        <div  @click="goToArticle(article.id)" class="article">
        <img class="article-image" :src="article.imageUrl" alt="">
        <h4>{{article.title}}</h4>
        <div class="article-dates">
            <small>Published: {{article.publishedAt.slice(0, 10)}}</small>
            <small>Updated: {{article.updatedAt.slice(0, 10)}}</small>
        </div>

    </div>
</template>

<script lang="ts">

import ArticleInterface from '@/types/ArticleInterface'
import { defineComponent, useRouter,  PropType} from '@nuxtjs/composition-api'

export default defineComponent({
    name: "Article",
    props: {
        article:{
            type: Object as PropType<ArticleInterface>,
            required: true
        }
    } ,
    setup(props){

        const router = useRouter()

        function goToArticle(){
            router.push('articles/'+ props.article.id)
        }

        return{
            goToArticle
        }
    }
})
</script>

<style>
    .article{
        outline: 1px solid var(--black);
        border-radius: 5px;
        padding-bottom: 10px;
        word-break: break-all;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap:10px;
        width: 30%;
    }
    .article:hover{
        -webkit-box-shadow: 0px 0px 6px 1px var(--purple); 
        box-shadow: 0px 0px 6px 1px var(--purple);
        cursor: pointer;
    }
    .article img{
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-top-right-radius:inherit;
        border-top-left-radius:inherit;
    }
    .article h4{
        margin: 2px 5px;
    }
    .article-dates{
        display: flex;
        flex-direction: column;
    }
    .article small{
        font-size: 12px;
        color: var(--grey);
        margin: 2px 5px;
    }
@media only screen and (max-width: 1200px) {
    .article{
        width: 45%;
    }
}
@media only screen and (max-width: 800px) {
    .article{
        width: 100%;
    }
}
</style>