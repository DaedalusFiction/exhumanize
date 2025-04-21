<template>
  <NuxtLink :to="href">
    <div
      class="relative bg-secondary overflow-hidden h-48 py-1 md:h-full"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <!-- Image container with transition -->
      <div
        class="absolute inset-0 transition-all duration-300 ease-in-out z-10"
        :class="isHovering && 'inset-7'"
      >
        <img
          :src="image.src"
          alt=""
          class="w-full h-48 md:h-full object-cover"
        />
      </div>
      <div class="flex flex-col justify-between h-full">
        <div class="relative flex gap-2 overflow-x-hidden">
          <div class="animate-marquee text-white flex gap-2 whitespace-nowrap">
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
          </div>
          <div
            class="absolute text-white flex gap-2 top-0 animate-marquee2 whitespace-nowrap"
          >
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
          </div>
        </div>
        <div class="relative bottom-0 flex gap-2 overflow-x-hidden">
          <div
            class="animate-marqueeReverse text-white flex gap-2 whitespace-nowrap"
          >
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
          </div>
          <div
            class="absolute text-white flex gap-2 top-0 animate-marquee2Reverse whitespace-nowrap"
          >
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
            <span>Graffiti</span>
            <span>//</span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { image, href, text } = defineProps(["image", "href", "text"]);
const isHovering = ref(false);
const handleMouseEnter = () => {
  console.log("hi");
};
const handleMouseLeave = () => {
  console.log("bye");
};
</script>

<style scoped></style>
