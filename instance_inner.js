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