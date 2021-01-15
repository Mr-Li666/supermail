<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style>
#tabbar {
  display: flex;
  justify-content: space-around;
  background: pink;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>