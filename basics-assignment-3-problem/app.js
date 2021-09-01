const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(value) {
            const that = this;
            setTimeout(function() {
                that.counter = 0;
            }, 5000)
        }
    },
    computed: {
        result() {
            if (this.counter < 37) return 'Not there yet';
            else if (this.counter > 37) {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(x) {
            this.counter += x;
            console.log(this.counter);
        }
    }

}).mount('#assignment');