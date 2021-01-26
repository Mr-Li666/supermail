<template>
  <div class="navbar">
    <div class="navleft">
      <slot name="left"></slot>
    </div>
    <div class="navmiddle">
      <slot name="middle"></slot>
    </div>
    <div class="navright">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigator",
};
</script>

<style>
.navbar {
  width: 100%;
  height: 44px;
  
  display: flex;
  line-height: 44px;
  text-align: center;
  justify-content: space-between;
   box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.navleft{
  width: 60px;
}
.navmiddle{
  /* flex-grow: 2; */
  flex-basis: 100%;
}
.navright{
  width: 60px;
}
</style>