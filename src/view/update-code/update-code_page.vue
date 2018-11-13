<template>
  <div>
    <Card class="search-con">
      <input placeholder="old_password" type="password" v-model="old_password" class="search-col"><br><br>
      <input placeholder="new_password" type="password" v-model="new_password" class="search-col"><br><br>
      <input placeholder="repeat_password" type="password" v-model="repeat_password" class="search-col"><br><br>
      <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;提交</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/update-code'
import { updatePassword } from '@/api/data'
import './index.less'
export default {
  name: 'update-code_page',
  components: {
    Tables
  },
  data () {
    return {
      old_password: '',
      new_password: '',
      repeat_password: ''
    }
  },
  methods: {
    handleSearch () {
      if (this.new_password === this.repeat_password) {
        updatePassword(this.old_password, this.new_password)
      } else {
        this.$Message.info('密码输入不一致')
      }
    }
  }
}
</script>

<style>

</style>
