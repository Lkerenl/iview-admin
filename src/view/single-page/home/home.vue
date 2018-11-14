<template>
  <div>
    <img width="1150" height="620" v-bind:src="Url" />
  </div>
</template>
<script>
import imgUrl from '@/view/single-page/home/timg.jpg'
export default {
  name: 'UserFace',
  data () {
    return {
      Url: imgUrl
    }
  }
}
</script>
