<template>
  <div class="hello">
    <h1>ChildCom</h1>
    {{obj}}
    <div>{{arr}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildCom',
  props: {
    msg: String
  },
  data() {
    return {
      obj: {a:1},
      arr: [1],
    }
  },
  mounted() {
    // console.log(this.$attrs)
    // console.log(this.$listeners)
    this.obj.b = 2;
    this.arr[1] = 2;
    this.$set(this.obj, 'b', '3')
    this.$set(this.arr, 1, 3)
    this.$emit('onClick', '3333');
    const data = {a: 1};
    data.a = 2;
    console.log(data);
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
