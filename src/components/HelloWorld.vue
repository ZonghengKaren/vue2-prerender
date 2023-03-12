<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <Child :title2="title2" v-bind="$attrs" v-on="$listeners" @onClick="onClick"></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Child
  },
  data() {
    return {
      title2: 'HelloWorld'
    }
  },
  methods: {
    onClick(e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/assets/var.scss';
h1 {
  margin: 40px 0 0;
  color: $warningColor;
}
</style>
