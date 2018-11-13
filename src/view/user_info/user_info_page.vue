<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/show'
import { getUserInfo } from '@/api/user'
import { getToken } from '@/libs/util'
export default {
  name: 'user_info_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '工号', key: 'no'},
        {title: '姓名', key: 'name'},
        {title: '职称', key: 'tprofession'}
      ],
      tableData: []
    }
  },
  mounted () {
    getUserInfo(getToken()).then(res => {
      const data = res.data
      console.log(data.message)
      var array = []
      array.push(data.message)
      this.tableData = array
    })
  }
}
</script>

<style>

</style>
