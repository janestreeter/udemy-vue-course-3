<template>
  <div class="img-card-footer">
    <div class="sub-icon" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="sub-title">{{ sub }} and more</div>
  </div>
</template>

<script>
export default {
  props: {
    sub: {
      type: String,
      required: true,
    },
  },
  created() {
    const bla = this;

    fetch(`https://www.reddit.com/${this.sub}/about.json`)
      .then((res) => res.json())
      .then(function(data) {
        bla.url = data.data.icon_img;
      });
  },
  data() {
    return {
      url: "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png",
    };
  },
  methods: {},
};
</script>

<style scoped>
div.sub-icon {
  width: 20px;
  height: 20px;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: initial;
  border-radius: 10px;
  margin-right: 10px;
  border-style: dotted;
  border-width: 1px;
  border-color: white;
}
div.sub-title {
  color: white;
}
div.img-card-footer {
  display: flex;
}
</style>
