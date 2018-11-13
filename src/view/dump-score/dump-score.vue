<template>
  <div>
    <Card>
      <Input v-model="st" placeholder="请输入学号" clearable style="width: 300px" />
      <Button type="primary" shape="circle" icon="ios-search" @click="handleDump" >Search</Button>
      <tables id="testPrint" ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      <Button v-print="'#testPrint'">打印</Button>
    </Card>
  </div>
</template>

<script>
import Tables from './tables/tables'
import { dumpScore } from '@/api/data'
export default {
  name: 'dump-score',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '课号', key: 'cno', sortable: true},
        {title: '课程名', key: 'cname', sortable: true},
        {title: '课程类型', key: 'ctype', sortable: true},
        {title: '学分', key: 'ccredits', sortable: true},
        {title: '成绩', key: 'score', sortable: true}
      ],
      tableData: [
      ],
      st: ''
    }
  },
  methods: {
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    handleDump () {
      console.log(this)
      dumpScore(this.st).then(res => {
        this.$ref.studentName = res.data.name
        this.$ref.studentNo = this.st
        this.$ref.show = true
        this.$ref.gpa = res.data.gpa
        this.tableData = res.data.score
      })
    }
  }

}
</script>
