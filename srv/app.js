Vue.createApp({
  data() {
    return {
      click: "",
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
  },
}).mount("#assignment");
