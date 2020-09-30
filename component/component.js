var component = {
    data: function () {
        return {
            number: 12
        }
    },
    template: '<p>こんにちは！{{number}}<button @click="increment">+1</button></p>',
    methods: {
        increment: function () {
            this.number += 1
        }
    },
}

Vue.component('my-component', )

new Vue({
    el: '#app',
    components: {
        'my-component': component
    },
    computed: {},
})