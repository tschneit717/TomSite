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
      // fetch('/api/users').then((response) => {
      fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Thorin087?api_key=RGAPI-77652b70-d6da-4a63-b573-f878f2006ef6').then((response) => {
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