const app = Vue.createApp({
    data() {
        return {
            alertText: 'This is an alert!',
            textBox1: '',
            textBox2: ''
        };
    },
    methods: {
        showAlert() {
            alert(this.alertText);
        },
        editTextBox1() {
            this.textBox1 = event.target.value;
        },
        editTextBox2(event) {
            this.textBox2 = event.target.value;
        } 
    }

}).mount('#assignment');