<template>
  <div>
    <Card class="search-con">
      <Select v-model="key1" class="search-col">
        <Option v-for="item in searchKey" v-bind:value="item.ctime">{{ item.ctime }}</Option>
      </Select>
      <Select v-model="key2" class="search-col">
        <Option v-for="item in searchKey" v-bind:value="item.ctime">{{ item.ctime }}</Option>
      </Select>
      <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;搜索</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
  </div>
</template>

<script>
import Tables from '_c/GPA'
import { getGPAData } from '@/api/data'
import { getGPATime } from '@/api/data'
import { getChosenGPA } from '@/api/data'
import { getToken } from '@/libs/util'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        {title: '学分绩', key: 'GPA'}
      ],
      tableData: [],
      searchKey: [],
      key1: '',
      key2: ''
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    handleSearch () {
      getChosenGPA(getToken(), this.key1, this.key2).then(res => {
        const data = res.data
        this.tableData = data.message
      })
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getGPAData(getToken()).then(res => {
      const data = res.data
      this.tableData = data.message
    })
    getGPATime(getToken()).then(res => {
      const data = res.data
      this.searchKey = data.message
    })
  }
}
</script>

<style>

</style>
