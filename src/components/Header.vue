<template>
  <header class="bg-transparent absolute text-right text-white w-screen grid p-5 lg:p-10">
    <nav class="justify-self-end">
      <ul>
        <li class="font-catamaran font-black text-red-500 transform hover:scale-110 hover:text-red-100 md:text-2xl" @click="scrollAbout">ABOUT</li>
        <li class="font-catamaran font-black text-red-500 transform hover:scale-110 hover:text-red-100 md:text-2xl" @click="scrollContact">CONTACT</li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      scrollAbout() {
        const element = document.querySelector('#about-section')
        element.scrollIntoView({behavior: 'smooth'});
      },
      scrollContact() {
        const element = document.querySelector('#contact-section')
        element.scrollIntoView({behavior: 'smooth'});
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>