const app = Vue.createApp({
    data() {
      return {
        name: 'Irwin',
        age: 37,
        randomPhoto: 'https://picsum.photos/200/300',
        myFavouriteNumber: 13
      };
    },
    methods: {
        favouriteNumber: function() {
            if (this.random() === 0) {
                return this.random();
            }
            return this.myFavouriteNumber;
        },
        random: function() {
            const random = Math.random()
            if (random > 0.5) { return 0; }
            return 1;
        }
    }
  });
  
  app.mount('#assignment');