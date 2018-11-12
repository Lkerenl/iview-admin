<template>
  <div>
    <Card>
      <Input v-model="value" placeholder="请输入学号" style="width: 300px" />
      <p>{{ this.data.name }}</p>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
// import {
//   getDetails
// } from '@/api/data'
export default {
  name: 'change-password',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '课号', key: 'cno', sortable: true},
        {title: '课程名', key: 'cname', sortable: true},
        {title: '成绩', key: 'score', sortable: true}
      ],
      tableData: [
      ],
      id: '',
      name: ''
    }
  },
  methods: {
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  created () {
    console.log(this)
    queryScore(status.token, '', '2018上').then(res => {
      this.id = res.data.no
      this.name = res.data.name
      this.tableData = res.data.score
    })
  }
}
</script>

<style>

</style>
