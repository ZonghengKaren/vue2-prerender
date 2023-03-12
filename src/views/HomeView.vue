<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :title="title"/>
<!--    <zhss></zhss>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import zhss from 'zhss'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'HomeView',
      obj: {
        a: 1
      },
      arr: ['a']
    }
  },
  mounted() {
    // console.log(this.$router.options)
    // console.log(this.$route)
    this.obj.a = 2;
    this.obj.b = 3;
    this.arr[1] = 'b';
    // console.log(this.obj)
  }
}
</script>
