new Vue({
    el: "#app",
    data: {
        message: "こんばんは",
        counter: 0,
        Active: 1,
        bg: 'bg-blue',
        styleObject: {
            color: "red",
            'background-color': "blue",
        },
        baseStyle: {
            fontSize: "60px",
        },
    },
    computed: {
        lessThanThree: function () {
            return this.counter >= 3 ? "３以上" : "3よりした"
        },
        ClassObject: function () {
            return {
                red: this.Active,
                'bg-blue': !this.Active
            }
        }
    },
    methods: {
        myAlert: function () {
            alert("アラート");
        },
    },
    watch: {
        counter: function () {
            let vm = this;
            setTimeout(function () {
                vm.counter = 0
            }, 3000)
        }
    }
});