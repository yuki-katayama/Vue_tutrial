new Vue({
    el: "#app",
    data: {
        ok: false,
        maybeOk: true,
        aisatu: true,
        drinks: ["cola", "soda", "tea", "coffee"],
        objects: {
            firstName: "太郎",
            lastName: "田中",
            age: 21
        }
    },
    methods: {
        remove: function () {
            this.drinks.shift()
        }
    },
    computed: {},
});