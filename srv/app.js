Vue.createApp({
  data() {
    return {
      click: "",
      clicker: "",
    };
  },
  methods: {
    clickHandler() {
      window.alert("Impressive!");
    },
    keydownHandler(evt) {
      const updatedValue = evt.target.value;
      this.click = updatedValue;
    },
    keydownHandler2(evt) {
      const updatedValue = evt.target.value;
      this.clicker = updatedValue;
    },
  },
}).mount("#assignment");
