<template>
    <div>
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
  methods: {
    async apiCall() {
      const playerName = 'Thorin087';
      const apiKey = 'RGAPI-77652b70-d6da-4a63-b573-f878f2006ef6';
      const config = {
        "async": true,
        "type": "GET",
        'url': 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+playerName+'?api_key='+apiKey,
        headers: {'Access-Control-Allow-Origin': '*'}
      }
      this.ajax(config).done(function (response) {
        // eslint-disable-next-line no-console
        console.log(response);
      });
    }
  },
  mounted() {
    // console.log(RIOT_URL,GET_SUMMONER,document.querySelector('#summonerInputId'),API_KEY)
    this.apiCall();
  },
}
</script>
<style lang="scss" scoped>

</style>