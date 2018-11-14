<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getCourseData } from '@/api/data'
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
        {title: '课程名', key: 'cname'},
        {title: '课程类型', key: 'ctype'},
        {title: '学分', key: 'ccredits'},
        {title: '开课时间', key: 'ctime', sortable: true},
        {
          title: '操作',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '退课')
              ])
            }
          ]
        }
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
    getCourseData(getToken()).then(res => {
      const data = res.data
      this.tableData = data.message
    })
  }
}
</script>

<style>

</style>
