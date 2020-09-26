new Vue({
  el: "#app",
  data: {
    event: "click",
    number: 0,
    x: 0,
    y: 0,
    message: "こんばんは",
  },
  methods: {
    countUp: function (event) {
      this.number += 1 + event;
    },
    changeMousePosition: function (devide, event) {
      this.x = event.x / devide;
      this.y = event.y / devide;
    },
  },
});