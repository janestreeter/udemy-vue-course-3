Vue.createApp({
  data: () => ({
    name: "jane",
    age: 11,
    randimal:
      "https://images.theconversation.com/files/337593/original/file-20200526-106811-ql6d51.jpg",
  }),
  methods: {
    penta() {
      return this.age + 5;
    },
    randy() {
      return Math.random();
    },
    test(evt) {
      this.name = evt.target.value;
    },
  },
}).mount("#assignment");
