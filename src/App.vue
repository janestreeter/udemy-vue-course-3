<template>
  <learning-survey @survey-submit="storeSurvey">
    <user-experiences :results="savedSurveyResults"></user-experiences>
  </learning-survey>
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

import axios from "axios";
// fetch('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: this.enteredName,
//     rating: this.chosenRating,
//   }),
// });
//
// axios.post('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
//   name: this.enteredName,
//   rating: this.chosenRating,
// });

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      savedSurveyResults: [],
    };
  },
  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
