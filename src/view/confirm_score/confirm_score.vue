<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-details="createTagQuery" @on-confirm="handleConfirm" @on-delete="handleDelete"/>
      <!-- <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button> -->
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import {
  getCno,
  commitConfirm
} from '@/api/data'
export default {
  name: 'show_details',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '课号', key: 'cno', sortable: true},
        {title: '课程', key: 'cname'},
        {
          title: '操作',
          key: 'handle',
          options: ['details', 'confirm', 'delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '详情'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-details', params)
                  }
                }
              }, [
                h('Button', '详情')
              ])
            },
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '确定提交?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-confirm', params, true)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '确认')
              ])
            },
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '确定删除?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params, false)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '取消')
              ])
            }
          ]
        }
      ],
      tableData: [
      ]
    }
  },
  methods: {
    handleDelete (params, confirm) {
      const cno = params.row.cno
      commitConfirm(cno, confirm)
    },
    createTagQuery (params) {
      const id = params.row.cno
      const route = {
        name: '详情',
        query: {
          id
        },
        meta: {
          title: `${id}`
        }
      }
      this.$router.push(route)
    },
    handleConfirm (params, confirm) {
      const cno = params.row.cno
      commitConfirm(cno, confirm)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getCno().then(res => {
      this.tableData = res.data
    })
  }
}
</script>

<style>

</style>
