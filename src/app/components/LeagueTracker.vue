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
      const request = new XMLHttpRequest()
  
      request.open('GET', 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Thorin087?api_key=RGAPI-77652b70-d6da-4a63-b573-f878f2006ef6', true),
      
      request.onload = function () {
        var data = JSON.parse(this.response)
        // eslint-disable-next-line no-console
        console.log(data)
      }
      request.send();
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