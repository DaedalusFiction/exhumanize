<template>
  <NuxtLink :to="href">
    <div
      class="relative aspect-[3/2] overflow-hidden h-full"
      :style="{ backgroundColor }"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <!-- Image container with transition -->
      <div
        class="absolute inset-0 transition-all duration-300 ease-in-out z-50"
        :class="isHovering && 'inset-7'"
      >
        <img :src="image.src" alt="" class="w-full h-full object-cover" />
      </div>
      <!-- top -->
      <div class="flex flex-col justify-between h-full">
        <div class="flex gap-2 overflow-x-hidden z-40 -translate-x-[1.75rem]">
          <div
            class="animate-marquee text-white flex gap-2 whitespace-nowrap z-10 py-1"
            :style="{ backgroundColor }"
          >
            <div class="flex gap-1" v-for="(item, index) in 20" :key="index">
              <span>{{ title }} </span>
              <span>//</span>
            </div>
          </div>
        </div>
        <!-- bottom  -->
        <div
          class="bottom-0 flex gap-2 py-1 rotate-180 overflow-x-hidden z-20"
          :style="{ backgroundColor }"
        >
          <div
            class="animate-marquee text-white flex gap-2 whitespace-nowrap z-20"
          >
            <div class="flex gap-1" v-for="(item, index) in 20" :key="index">
              <span>{{ title }} </span>
              <span>//</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <div
          class="flex gap-2 overflow-x-hidden -rotate-90 origin-top-left z-30"
          :style="{ backgroundColor }"
        >
          <!-- left  -->
          <div
            class="animate-marquee text-white flex gap-2 whitespace-nowrap py-1"
          >
            <div class="flex gap-1" v-for="(item, index) in 20" :key="index">
              <span>{{ title }} </span>
              <span>//</span>
            </div>
          </div>
        </div>
        <!-- right  -->
        <div
          class="flex gap-2 overflow-x-hidden rotate-90 origin-top-right z-0"
        >
          <div
            class="animate-marquee py-1 text-white flex gap-2 whitespace-nowrap z-0"
            :style="{ backgroundColor }"
          >
            <div class="flex gap-1" v-for="(item, index) in 20" :key="index">
              <span>{{ title }} </span>
              <span>//</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { image, href, title, backgroundColor } = defineProps([
  "image",
  "href",
  "backgroundColor",
  "title",
]);
const isHovering = ref(false);
const handleMouseEnter = () => {
  console.log("hi");
};
const handleMouseLeave = () => {
  console.log("bye");
};
</script>

<style scoped></style>
