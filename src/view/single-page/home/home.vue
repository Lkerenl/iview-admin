<template>
  <div>
    <img v-bind:src="Url" />
  </div>
</template>
<script>
    import imgUrl from '@/view/single-page/home/timg.jpg'
    export default {
        name:'UserFace',
        data(){
            return {
              Url : imgUrl 
            }
        }
    }
</script>