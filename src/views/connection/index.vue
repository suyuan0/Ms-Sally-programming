<template>
  <el-card shadow='never'>
    <el-tree
      :data='rightList'
      :expand-on-click-node='false'
      :props='treeProps'
      default-expand-all
      node-key='id'
    >
    </el-tree>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { getRulesAPI } from '@/api/assess/rights'
// // 定义树节点展示的内容
// const renderContent = (h, {
//   node,
//   data,
//   store
// }) => {
//   return h('div', {}, '', h('span', {}, '123'), h(
//     'span', { class: 'custom-tree-node' }, '',
//     h('span', {}, node.label)
//   ))
// }
// 树形控件结构
const treeProps = {
  label: 'name',
  value: 'id',
  children: 'child'
}
// 权限列表数据
const rightList = ref([])
// 获取权限列表
const getRulesList = async () => {
  try {
    const res = await getRulesAPI()
    rightList.value = res.list
  } catch (e) {
    console.log(e)
  }
}
getRulesList()
</script>

<style scoped>
::v-deep(.custom-tree-node) {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
