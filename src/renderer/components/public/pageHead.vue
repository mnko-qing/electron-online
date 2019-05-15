<template>
  <div class="pageHead">
    <Input 
      search 
      v-model="value" 
      @on-search="search"
      :placeholder="`搜索${name}名称`"/>

    <slot name="search"></slot>

    <Button type="primary" class="create" @click="create">
      创建{{name}}
    </Button>
    <slot name="button"></slot>
  </div>
</template>

<script>

export default {
  name:'pageHead',
  props:['name','searchValue'],
  data() {
    return {
      value:this.searchValue,
    }
  },
  methods:{
    create() {
      this.$emit('create')
    },
    search() {
      this.$emit('search',this.value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

