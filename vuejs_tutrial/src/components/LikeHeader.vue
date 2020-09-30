<template>
  <div>
    <slot name="iine">デフォルトのタイトル</slot>
    <slot name="default"></slot>
    <h1>{{ headerText }}</h1>
    <slot name="num"></slot>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
    },
  },
};
</script>
