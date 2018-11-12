<template>
  <div>
    <Card class="search-con">
      <input placeholder="cno_key" v-model="cno_key" class="search-col">
      <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;搜索</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tea_stu_score'
import { getAllScore } from '@/api/data'
import './index.less'
export default {
  name: 'tea_stu_score_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '学号', key: 'no'},
        {title: '姓名', key: 'name'},
        {title: '分数', key: 'score'}
      ],
      tableData: [],
      cno_key: ''
    }
  },
  methods: {
    handleSearch () {
      getAllScore(this.cno_key).then(res => {
        res.data.message.forEach(v => {
          if (v['score'] === null) {
            v['score'] = 0
          }
        })
        this.tableData = res.data.message
      })
    }
  }
}
</script>

<style>

</style>
