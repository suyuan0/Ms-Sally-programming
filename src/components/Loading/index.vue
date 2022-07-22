<template>
  <div class='flex_div'>
    <!--    <div class='animation_div'>加载中</div>-->
    <div class='dots-loader'></div>
    <span style='margin-left: -125px;display: block;font-weight: bold'>加载中...</span>
  </div>
</template>

<script setup>
</script>

<style lang='scss' scoped>
.dots-loader:not(:required) {
  position: absolute;
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-bottom: 30px;
  overflow: hidden;
  text-indent: -9999px;
  background: transparent;
  border-radius: 100%;
  box-shadow: #f86 -14px -14px 0 7px,
  #fc6 14px -14px 0 7px,
  #6d7 14px 14px 0 7px,
  #4ae -14px 14px 0 7px;
  transform-origin: 50% 50%;
  animation: dots-loader 5s infinite ease-in-out;
  left: 45%;
  top: 45%;
}

@keyframes dots-loader {
  0% {
    box-shadow: #f86 -14px -14px 0 7px,
    #fc6 14px -14px 0 7px,
    #6d7 14px 14px 0 7px,
    #4ae -14px 14px 0 7px;
  }

  8.33% {
    box-shadow: #f86 14px -14px 0 7px,
    #fc6 14px -14px 0 7px,
    #6d7 14px 14px 0 7px,
    #4ae -14px 14px 0 7px;
  }

  16.67% {
    box-shadow: #f86 14px 14px 0 7px,
    #fc6 14px 14px 0 7px,
    #6d7 14px 14px 0 7px,
    #4ae -14px 14px 0 7px;
  }

  25% {
    box-shadow: #f86 -14px 14px 0 7px,
    #fc6 -14px 14px 0 7px,
    #6d7 -14px 14px 0 7px,
    #4ae -14px 14px 0 7px;
  }

  33.33% {
    box-shadow: #f86 -14px -14px 0 7px,
    #fc6 -14px 14px 0 7px,
    #6d7 -14px -14px 0 7px,
    #4ae -14px -14px 0 7px;
  }

  41.67% {
    box-shadow: #f86 14px -14px 0 7px,
    #fc6 -14px 14px 0 7px,
    #6d7 -14px -14px 0 7px,
    #4ae 14px -14px 0 7px;
  }

  50% {
    box-shadow: #f86 14px 14px 0 7px,
    #fc6 -14px 14px 0 7px,
    #6d7 -14px -14px 0 7px,
    #4ae 14px -14px 0 7px;
  }

  58.33% {
    box-shadow: #f86 -14px 14px 0 7px,
    #fc6 -14px 14px 0 7px,
    #6d7 -14px -14px 0 7px,
    #4ae 14px -14px 0 7px;
  }

  66.67% {
    box-shadow: #f86 -14px -14px 0 7px,
    #fc6 -14px -14px 0 7px,
    #6d7 -14px -14px 0 7px,
    #4ae 14px -14px 0 7px;
  }

  75% {
    box-shadow: #f86 14px -14px 0 7px,
    #fc6 14px -14px 0 7px,
    #6d7 14px -14px 0 7px,
    #4ae 14px -14px 0 7px;
  }

  83.33% {
    box-shadow: #f86 14px 14px 0 7px,
    #fc6 14px -14px 0 7px,
    #6d7 14px 14px 0 7px,
    #4ae 14px 14px 0 7px;
  }

  91.67% {
    box-shadow: #f86 -14px 14px 0 7px,
    #fc6 14px -14px 0 7px,
    #6d7 14px 14px 0 7px,
    #4ae -14px 14px 0 7px;
  }

  100% {
    box-shadow: #f86 -14px -14px 0 7px,
    #fc6 14px -14px 0 7px,
    #6d7 14px 14px 0 7px,
    #4ae -14px 14px 0 7px;
  }
}

.flex_div {
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

//
//.animation_div {
//  position: relative;
//  width: 80px;
//  height: 80px;
//  border-radius: 50%;
//  box-sizing: border-box;
//  /* background: #ffff00; */
//  line-height: 80px;
//  text-align: center;
//}
//
//.animation_div::before {
//  position: absolute;
//  left: 0;
//  top: 0;
//  display: block;
//  content: "";
//  width: 80px;
//  height: 80px;
//  border-width: 1px;
//  border-style: solid;
//  border-color: #00ffff transparent transparent transparent;
//  box-sizing: content-box;
//  animation: trotate 1.5s linear infinite;
//  border-radius: 50%;
//  z-index: 2;
//}
//
//.animation_div::after {
//  position: absolute;
//  left: -3px;
//  top: -3px;
//  display: block;
//  content: "";
//  width: 86px;
//  height: 86px;
//  border-width: 1px;
//  border-style: solid;
//  border-color: #ff0000 transparent transparent transparent;
//  box-sizing: content-box;
//  animation: trotate 1s linear infinite;
//  border-radius: 50%;
//  z-index: 1;
//}
//
//@keyframes trotate {
//  0% {
//    transform: rotate(0);
//  }
//  25% {
//    transform: rotate(90deg);
//  }
//  50% {
//    transform: rotate(180deg);
//  }
//  75% {
//    transform: rotate(270deg);
//  }
//  100% {
//    transform: rotate(360deg);
//  }
//}
</style>
