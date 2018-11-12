<template>
  <div class="user-avator-dropdown">
    <Dropdown>
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
// import { mapActions } from 'vuex'src/view/insert/insert_page.vue
// import '_c/main/components/header-bar/header-bar'
export default {
  name: 'User',
  props: {
    userAvator: {
      type: String,
      default: ''
    }
  }
}

</script>
