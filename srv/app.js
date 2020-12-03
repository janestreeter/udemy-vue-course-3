const vueOptions = {
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    outPutGoal() {
      const randomNumba = Math.random();
      if (randomNumba < 0.5) {
        return "pinky Pie";
      } else if (randomNumba > 0.6) {
        return "apple jack";
      } else {
        return "flutter shy";
      }
    },
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
};
Vue.createApp(vueOptions).mount("#swag");
