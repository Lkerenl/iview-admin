<template>
  <div>
    <Modal
        v-model="modal1"
        title="退出"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>确定退出？</p>
    </Modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'logout_modal',
  data () {
    return {
      modal1: true
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    ok () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: '/login'
        })
      })
    },
    cancel () {
      this.closeTag({
        name: 'logout_modal'
      })
    }
  }
}
</script>
