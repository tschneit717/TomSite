<template>
    <div class="tracker-wrapper">
      <input type="text" name="summonerID" id="summonerInputId">
      <button name="submit" id="submitButton"></button>
    </div>
</template>
<script>
import 'utils/http.js'

export default {
  name: "LeagueTracker",
  props: {
    query: String
  },
  mounted() {
    // console.log(RIOT_URL,GET_SUMMONER,document.querySelector('#summonerInputId'),API_KEY)
    // document.querySelector('#submitButton').addEventListener('click', () => {
      fetch('/api/users').then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        // eslint-disable-next-line no-console
        console.log(myJson);
      });

      //   // eslint-disable-next-line no-console
      
  }
}
</script>
<style lang="scss" scoped>
  .tracker-wrapper {
    position: absolute;
  }
</style>