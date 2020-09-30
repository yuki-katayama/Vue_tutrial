Vue.component('hello', {
    template: "<p>component</p>"
})

let vm1 = new Vue({
    el: "#app1",
    data: {
        message: "インスタンス1"
    },
    methods: {},
    computed: {},
});

new Vue({
    el: "#app2",
    data: {
        message: "インスタンス2"
    },
    methods: {
        change1: function () {
            vm1.message = "変更されました。"
        }
    },
    computed: {},
});

new Vue({
    data: {
        name: "ゆうき",
        drink: "コーラ",
    },
    render: function (createElement) {
        return createElement('h1', "好きな飲み物は" + this.drink);
    },
    methods: {},
    computed: {},
}).$mount("#app3")

new Vue({
    el: "#app4",
    data: {
        name: "ゆうきんぐ",
    },
    beforeCreate: function () {
        console.log("beforeCreate")
    },
    created: function () {
        console.log("created")
    },
    beforeMount: function () {
        console.log("beforeMount")
    },
    mounted: function () {
        console.log("mounted")
    },
    beforeUpdate: function () {
        console.log("beforeUpdate")
    },
    updated: function () {
        console.log("updated")
    },
    beforeDestroy: function () {
        console.log("beforeDestroy")
    },
    destroyed: function () {
        console.log("destroyed")
    },
    methods: {
        destroy: function () {
            this.$destroy()
        }
    }
})