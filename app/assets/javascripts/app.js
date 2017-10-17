document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hey Vue! how's it going?",
      reviews: [
                "I don't want to sound enamored, but I think Vue.Js is pretty cool.",
                "Vue.js can kick react's butt",
                "Vue.js, eh. it's ok."
                ],
      newReview: ""
    },
    mounted: function() {

    },
    methods: {
      addReview: function() {
        this.reviews.push(this.newReview);
      }
    },
    computed: {

    }
  });
});