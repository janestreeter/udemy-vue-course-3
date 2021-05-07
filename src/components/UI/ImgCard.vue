<template>
  <div class="img-card" :style="{ backgroundImage: `url(${url})` }">
    <div class="img-card-title">{{ title }}</div>
    <div class="img-card-description">{{ description }}</div>
    <img-card-footer :sub="sub" />
  </div>
</template>

<script>
import ImgCardFooter from "./ImgCardFooter.vue";
export default {
  components: { ImgCardFooter },
  props: {
    url: {
      type: String,
      default: "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png",
      required: false,
    },
    title: {
      type: String,
      default: "Empty",
      required: false,
    },
    description: {
      type: String,
      default: "no description...",
      required: false,
    },
    sub: {
      type: String,
      default: "",
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div.img-card {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  width: 200px;
  height: 200px;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: initial;
}
div.img-card-title {
  color: white;
  font-weight: 900;
}
div.img-card-description {
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  max-height: 40px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: inline-block;
}
</style>
