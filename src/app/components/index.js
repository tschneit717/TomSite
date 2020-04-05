import Vue from "vue"

import vueCustomElement from "vue-custom-element"

import HeaderWidget from './Header.vue'
// import LeagueTracker from './LeagueTracker.vue'
import Hero from './Hero.vue'
import FunkyBlock from './FunkyBlock.vue'
import BackgroundBlock from './BackgroundBlock.vue'
import Timeline from './Canvas.vue'
import Sitemap from './Sitemap.vue'

Vue.use(vueCustomElement)
Vue.customElement("header-widget", HeaderWidget)
Vue.customElement("sitemap-component", Sitemap)
Vue.customElement("hero-banner", Hero)
Vue.customElement("funky-block", FunkyBlock)
Vue.customElement("background-block", BackgroundBlock)
Vue.customElement("timeline-element", Timeline)