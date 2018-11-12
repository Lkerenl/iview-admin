<template>
  <div>
    <Card class="search-con">
      <input placeholder="cno_key" v-model="Key" class="search-col">
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
        {title: '平均分数', key: 'avg'},
        {title: '通过人数', key: 'good'},
        {title: '挂科人数', key: 'die'},
        {title: '通过率', key: 'nodie'},
        {title: '挂科率', key: 'sodie'},
        {title: '最高分数', key: 'max'},
        {title: '最低分数', key: 'min'}
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
