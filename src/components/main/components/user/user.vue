<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
// import logout_modal from '_c/main/components/header-bar/logout_modal'
import { mapActions } from 'vuex'
// import '_c/main/components/header-bar/header-bar'
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },
  ...mapActions([
    'handleLogOut'
  ]),
  handleClick (name) {
    switch (name) {
      case 'logout':
<<<<<<< HEAD
=======
        this.handleLogOut().then(() => {
          this.$router.push({
            name: '/login'
          })
        })
>>>>>>> 8ca1cda64ef419cf769bc53b0e8bc907231bfb39
        break
    }
  }
}

</script>
