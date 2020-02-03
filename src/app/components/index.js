import Vue from "vue"

import vueCustomElement from "vue-custom-element"

import HeaderWidget from './Header.vue'
import LeagueTracker from './LeagueTracker.vue'
import Hero from './Hero.vue'
import ContentBlock from './ContentBlock.vue'
import FunkyBlock from './FunkyBlock.vue'
import BackgroundBlock from './BackgroundBlock.vue'

Vue.use(vueCustomElement)
Vue.customElement("header-widget", HeaderWidget)
Vue.customElement("league-tracker", LeagueTracker)
Vue.customElement("hero-banner", Hero)
Vue.customElement("content-block", ContentBlock)
Vue.customElement("funky-block", FunkyBlock)
Vue.customElement("background-block", BackgroundBlock)