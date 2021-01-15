<template>
  <div class="tabbarItem">
    <div v-if="!isAcitive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activecolor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  data() {
    return {
      // isAcitive:true
    };
  },
  props: {
    path: String,
    color:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isAcitive() {
      // console.log(this.$route.path)
      // console.log(this.path)
      return this.$route.path == this.path;
    },
    activecolor(){
      return this.isAcitive?{color:this.color}:{};
    }
  },
};
</script>

<style>
.tabbarItem {
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}

.tabbarItem img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
}

</style>