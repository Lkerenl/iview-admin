<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      <tables ref="print" v-model="tableData"/>
      <Button style="margin: 10px 0;" type="primary" @click="print">打印</Button>
    </Card>
  </div>
</template>
<script>

import Tables from '_c/tables'
import { getStuScoreData } from '@/api/data'
import { getToken } from '@/libs/util'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '课程代码', key: 'cno', sortable: true},
        {title: '课程名', key: 'cname', editable: true},
        {title: '课程类型', key: 'ctype'},
        {title: '学分', key: 'ccredits'},
        {title: '成绩', key: 'score'},
        {title:'开课时间', key: 'ctime',sortable:true},
      ],
      tableData: []
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getStuScoreData(getToken()).then(res => {
      const data = res.data
      this.tableData = data.message
    })
  }
}
</script>

<style>

</style>
