<template>
  <div>
    <Card class="search-con">
      <input placeholder="课程号" v-model="Key" class="search-col">
      <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;搜索</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/analyse'
import { getScoreCnoData, getScoreData } from '@/api/data'
import './index.less'
export default {
  name: 'analyse_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '课程名称', key: 'cname'},
        {title: '总人数', key: 'count'},
        {title: '平均分数', key: 'avg'},
        {title: '不及格 0~60', key: 'result_60'},
        {title: '一般 60~75', key: 'result_60_75'},
        {title: '良好 75~85', key: 'result_75_85'},
        {title: '优秀 85~95', key: 'result_85_95'},
        {title: '最佳 95~100', key: 'result_95_100'},
        {title: '及格率(%)', key: 'nodie'}
      ],
      tableData: [],
      searchKey: [],
      Key: '',
      modal: false
    }
  },
  methods: {
    handleSearch () {
      getScoreData(this.Key).then(res => {
        this.tableData = []
        this.tableData.push(res.data.message)
      })
    }
  },
  mounted () {
    getScoreCnoData().then(res => {
      this.searchKey = res.data.message
    })
  }
}
</script>

<style>

</style>
