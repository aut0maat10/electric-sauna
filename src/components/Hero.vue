<template>
  <div class="bg-hero bg-no-repeat bg-cover w-full h-screen p-10 grid md:gap-5 grid-cols-2 md:grid-cols-6 grid-flow-row-dense content-center items-center">
  <!-- <div class="bg-hero bg-no-repeat bg-cover flex flex-col justify-center w-full h-screen"> -->
    <h1 class="font-rubik-mono tracking-tighter text-4xl xl:text-7xl font-black text-white text-left leading-[1rem] justify-self-start col-span-2 md:col-span-6">ELECTRIC<br>SAUNA<br>PRODUCTIONS</h1>
    <p v-if="notMobile" class="col-span-2 font-catamaran text-sm xl:text-xl text-white text-left p-1 align-self-start justify-self-start md:justify-self-end">WE MAKE PRODUCTION MUSIC FOR<br>MUSIC LIBRARIES.<br>WE WORK IN VARIOUS STYLES OF<br><span class="text-red-500">ROCK, POP, AND ACOUSTIC MUSIC.</span></p>
    <h2 class="font-catamaran text-8xl lg:text-9xl xl:text-xxl text-left font-black text-red-500 align-self-start justify-self-start md:leading-10 col-span-2 pt-2.5">MUSIC</h2>
    <ArrowCircleDownIcon v-if="notMobile" class="animate-pulse transform hover:scale-110 col-span-2 w-24 h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 text-red-500 hover:text-red-100 justify-self-center align-self-center" @click="testing" />
    <!-- <img class="fill-red-500 justify-self-start" src="../assets/down-arrow.svg" alt="downward pointing arrow"> -->
    <!-- <p class="text-6xl font-rubik-mono text-white align-self-start leading-10">V</p> -->
    <span class="md:col-span-2"></span>
    <!-- <h2 class="text-white">{{ windowWidth }}</h2>
    <h2 class="text-white">{{breakpoint }}</h2> -->
    <h2 class="font-rubik-mono tracking-8 text-white text-left text-4xl md:text-5-xl xl:text-7xl leading-[0.5rem] font-black col-span-2 md:col-span-4 justify-self-start align-self-center">FOR TV<br>AND FILM</h2>
    <!-- <h2 class="font-rubik-mono tracking-tighter text-white text-8xl leading-[0.5rem] font-black col-span-3 justify-self-center">AND FILM</h2> -->
  </div>
</template>

<script>

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

import { ArrowCircleDownIcon } from '@heroicons/vue/solid'
  export default {
    components: { ArrowCircleDownIcon },
    data() {
      return {
        windowWidth: window.innerWidth
      }
    },
    methods: {
      testing() {
        alert('HELLO')
      },
    },
    computed: {
      notMobile() {
        return this.windowWidth >= parseInt(fullConfig.theme.screens.md, 10)
      },
      breakpoint() {
        return fullConfig.theme.screens.md
      },
    },
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    }
  }
</script>

<style>

</style>