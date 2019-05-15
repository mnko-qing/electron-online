<template>
  <div class="settings">
    <header>设置</header>
    <div class="main">
      <article>
        <label>文件导出路径设置</label>
        <div 
          @click="selectExportPath"
          :class="[
          'export-path',
          'no-text-select',
          'overflow-ellipsis',
          {'click-scale':addScale}]">
          {{exportPath}}
        </div>
      </article>
      <Divider />
      <article>
        <label>字体大小设置</label>
        <Slider
          :min="14"
          :max="24" 
          show-input
          v-model="fontSize">
        </Slider>
      </article>
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'
export default {
  name:'settings',
  data() {
    return {
      fontSize:14,
      addScale:false,
      exportPath:'C:\\Users\\30103\\Desktop'
    }
  },
  mounted() {
    
  },
  methods:{
    selectExportPath() {
      this.addScale = true
      remote.dialog.showOpenDialog({
        title:'选择文件夹',
        buttonLabel:'选择文件夹',
        defaultPath:this.exportPath,
        properties: ['openDirectory','createDirectory']
      }, filePaths => {
        // 取消时 filepaths 是 undefined
        if(filePaths) {
          this.exportPath = filePaths[0]
        }
        this.addScale = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .settings {
    header,footer {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
    }
    header {
      border-bottom: 1px solid #e8eaec;
    }
    .main {
      article {
        padding: 30px;
      }
      .ivu-divider-horizontal {
        margin: 0;
      }
      .export-path {
        height: 30px;
        line-height: 30px;
        border:1px solid #e8eaec;
        margin-top: 10px;
        padding-left: 10px;
      }
    }
  }
</style>

