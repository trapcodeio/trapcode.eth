<script setup lang="ts">
import ExternalLinkSvg from "../components/ExternalLinkSvg.vue";
const services = [
  {
    url: new URL("https://atath.io"),
    title: "Calculate the All time High worth of your portfolio."
  },
  {
    url: new URL("https://github.com/trapcodeio/cryptocurrency-price-kit"),
    name: "Cryptocurrency Price Kit",
    title: "Nodejs cryptocurrency price kit package with multiple providers support."
  }
];

const links = [
  {
    url: "https://github.com/trapcodeio",
    name: "Github",
    svg: "/svgs/github.svg"
  },
  {
    url: "https://twitter.com/evilisasin",
    name: "Twitter",
    svg: "/svgs/twitter.svg"
  }
];
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <div class="text-center mt-36">
      <h1 class="xl:text-9xl lg:text-8xl md:text-7xl text-6xl tracking-wide">
        <template v-for="(char, key) in '<Trapcode.eth/>'">
          <span
            v-text="char"
            :class="{
              'text-red-500': key % 2 === 0,
              'text-gray-200': key % 2 === 1
            }"
          ></span>
        </template>
      </h1>
    </div>

    <section class="max-w-3xl mx-auto bg-light p-5 rounded mt-10 font-mono">
      <h6 class="text-center">
        <span class="border-b-2 pb-0.5 border-red-500">Crypto Related Projects</span>
      </h6>

      <div class="mt-10 space-y-5">
        <template v-for="link of services">
          <div class="leading-7">
            <a :href="link.url.href" target="_blank">
              <span class="mr-1">{{ link.name || link.url.hostname }}</span>
              <ExternalLinkSvg class="h-5 w-5 inline" />
            </a>
            -
            {{ link.title }}
          </div>
        </template>
      </div>
    </section>

    <footer class="mt-10 text-center">
      <template v-for="link in links">
        <a target="_blank" :href="link.url" :title="link.name" class="text-red-300">
          <span>{{ link.name }}</span> <ExternalLinkSvg class="h-5 w-5 inline" />
        </a>
      </template>
    </footer>
  </div>
</template>
