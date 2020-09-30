<template>
  <div>
    <LikeHeader header-text="hello">
      <template v-slot:iine>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:default>
        <h2>default1</h2>
        <h3>default2</h3>
      </template>
      <template v-slot:num>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber
      v-bind:total-number="number"
      @my-click="incrementNumber"
    ></LikeNumber>
    <LikeNumber
      :total-number="number"
      v-on:my-click="number = $event"
    ></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10,
    };
  },
  components: {
    LikeHeader,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
