<template>
  <div>
    <Card class="search-con">
      <Select v-model="Key" class="search-col">
        <Option v-for="item in searchKey" v-bind:value="item.cno">{{ item.cno }}</Option>
      </Select>
      <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;搜索</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Button style="margin: 10px 0;" type="primary" @click="modal = true">提交成绩</Button>
      <Modal
        v-model="modal"
        title="确认框"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>确定提交？</p>
      </Modal>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/insert'
import { getInsertData, getTableData, commitTableData } from '@/api/data'
import './index.less'
export default {
  name: 'insert_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '学号', key: 'no', sortable: true},
        {title: '姓名', key: 'name'},
        {title: '平时成绩', key: 'regular', editable: true},
        {title: '考试成绩', key: 'exam', editable: true},
        {title: '实验成绩', key: 'expr', editable: true}
      ],
      tableData: [],
      searchKey: [],
      Key: '',
      modal: false
    }
  },
  methods: {
    handleSearch () {
      getTableData(this.Key).then(res => {
        this.tableData = res.data.message
      })
    },
    handleCommit () {
      commitTableData(this.tableData, this.Key).then(res => {
        this.$Message.info(res.data)
      })
    },
    async ok () {
      if (this.tableData != '') {
        this.handleCommit().then(res => {
          this.$Message.info('提交成功')
          Close()
        })
      } else {
        this.$Message.info('无数据提交')
        Close()
      }
    },
    cancel () {

    }
  },
  mounted () {
    getInsertData().then(res => {
      this.searchKey = res.data.message
    })
  }
}
</script>

<style>

</style>
