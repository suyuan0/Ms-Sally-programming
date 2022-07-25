<template>
  <el-card>
    <!--    头部-->
    <template #header>
      <el-button size='small' type='primary'>新增图片分类</el-button>
      <el-button size='small' type='warning'>上传图片</el-button>
    </template>
    <div class='image-main'>
      <!--      左侧-->
      <div class='left-item'>
        <div v-for='item in imageClassList' :key='item.id' :class='{active:activeCurrent===item.id ?"active":"" }'
             class='image-class-item'
             @click='handleChangeCLassList(item)'>
          <span>{{ item.name }}</span>
          <!--          编辑-删除按钮-->
          <div class='btns'>
            <el-button icon='edit' link type='primary'></el-button>
            <el-button icon='close' link type='primary'></el-button>
          </div>
        </div>
        <div class='bottom'>
          <el-pagination :total='classTotal' background layout='prev, next' @current-change='handleCurrentClassList' />
        </div>
      </div>
      <!--      右侧-->
      <div class='right-item'>
        <el-row :gutter='20' style='padding: 10px'>
          <el-col v-for='item in imageList' :key='item.id' :mb='3' :md='6' :sm='12' :span='24'>
            <el-card shadow='never'>
              <el-image :src='item.url' fit='cover'></el-image>
              <p class='title'>{{ item.name }}</p>
              <div class='btns'>
                <el-button link type='primary'>重命名</el-button>
                <el-button link type='primary'>删除</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <Paning :total='imageTotal' @currentChange='currentChange'></Paning>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { imageListAPI, imgageClassAPI } from '@/api/image/list'
import Paning from '@/components/Paging'
import { ref } from 'vue'

// 判断是否选中
const activeCurrent = ref('168')
// 分类列表条数
const classTotal = ref(0)
// 图片列表条数
const imageTotal = ref(0)
// 图片分类列表
const imageClassList = ref([])
// 分类列表分页
const classCurrent = ref(1)
// 图片列表
const imageList = ref([])
// 图片列表分页
const listCurrent = ref(1)
// 获取数据
const getimageList = async () => {
  try {
    const imgData = await imageListAPI(listCurrent.value, activeCurrent.value)
    const {
      list,
      totalCount
    } = await imgageClassAPI(classCurrent.value)
    imageClassList.value = list
    classTotal.value = totalCount
    imageList.value = imgData.list
    imageTotal.value = imgData.totalCount
  } catch (e) {
    console.log(e)
  }
}
getimageList()
// 分类切换
const handleChangeCLassList = async (item) => {
  try {
    activeCurrent.value = item.id
    getimageList()
  } catch (e) {
    console.log(e)
  }
}
// 分页
const currentChange = (value) => {
  listCurrent.value = value
  getimageList()
}
// 分类列表分页
const handleCurrentClassList = (value) => {
  classCurrent.value = value
  getimageList()
}
</script>

<style lang='scss' scoped>
::v-deep(.el-card__body) {
  padding: 0 10px 10px 0;
}

.image-main {
  display: flex;
  height: 800px;

  .left-item {
    width: 220px;
    border-right: 1px solid #eeeeee;
    position: relative;

    .bottom {
      position: absolute;
      bottom: 0;
      left: 50%;

      .el-pagination {
        transform: translateX(-50%);
      }
    }

    .image-class-item {
      display: flex;
      border-bottom: 1px solid #eeeeee;
      padding: 12px;
      cursor: pointer;
      justify-content: space-between;

      &:hover {
        background: #eff6ff;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .right-item {
    flex: 1;

    .el-row {
      .el-col {
        ::v-deep( .el-card) {
          position: relative;
          margin-bottom: 10px;

          .el-card__body {
            padding: 0 !important;
          }

          .el-image {
            width: 100%;
            height: 150px;
          }

          .title {
            background: rgba(0, 0, 0, .3);
            position: absolute;
            bottom: 43px;
            width: 100%;
            left: 0;
            color: #fff;
            padding: 5px;
          }

          .btns {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
          }
        }
      }
    }
  }
}

.active {
  background: #eff6ff;
}
</style>
