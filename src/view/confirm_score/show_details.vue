<template>
  <div>
    <Card>
      <h2>课号: {{ $route.query.id }}</h2>
      <tables id="printTest" ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import {
  getDetails
} from '@/api/data'
export default {
  name: 'show_details',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '学号', key: 'no', sortable: true},
        {title: '姓名', key: 'name', sortable: true},
        {title: '考试成绩', key: 'exam', sortable: true},
        {title: '平时成绩', key: 'regular', sortable: true},
        {title: '实验成绩', key: 'expr', sortable: true}
      ],
      tableData: [
      ]
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
    getDetails(this.$route.query.id).then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>
