<template>
  <section>
    <img-card
      v-for="item of images"
      :key="item.id"
      :url="item.url"
      :title="item.title"
      :description="item.description"
      :sub="item.sub"
    />
    <base-card>
      <h2>How was you learning experience?</h2>
      <button @click="getImages">up</button>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import ImgCard from "../UI/ImgCard.vue";
export default {
  components: { ImgCard },
  data() {
    return {
      enteredName: "",
      chosenRating: null,
      invalidInput: false,
      images: [],
    };
  },
  emits: ["survey-submit"],
  methods: {
    submitSurvey() {
      if (this.enteredName === "" || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.$emit("survey-submit", {
        userName: this.enteredName,
        rating: this.chosenRating,
      });
      this.enteredName = "";
      this.chosenRating = null;
    },
    getImages() {
      const that = this;
      fetch(
        "https://www.reddit.com/api/trending_searches_v1.json?withAds=1&raw_json=1&gilding_detail=1"
      )
        .then((res) => res.json())
        .then(function(data) {
          for (const search of data.trending_searches) {
            const item = search.results.data.children[0].data;
            console.log(item);
            const img = {
              id: item.id,
              url: item.preview.images[0].source.url,
              title: search.display_string,
              description: item.title,
              sub: item.subreddit_name_prefixed,
            };

            that.images.push(img);
          }
        });
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
