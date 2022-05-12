<template>

</template>

<script lang="ts">
import Vue from 'vue'
import {useRouter} from "@nuxtjs/composition-api"

export default Vue.extend({
  name: 'IndexPage',
  setup(){
    const router = useRouter()
    router.push('/login')
  }
})
</script>
