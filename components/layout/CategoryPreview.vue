<template>
  <NuxtLink :to="href">
    <div
      class="relative aspect-[3/2] overflow-hidden h-full transition-all"
      :class="isHovering && `rounded-xl`"
      :style="{ backgroundColor }"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <!-- Image container with transition-all -->
      <div
        class="absolute inset-0 transition-all duration-300 ease-in-out z-50"
        :class="{ 'inset-7': isHovering }"
      >
        <img
          ref="imageRef"
          @load="loaded = true"
          :src="image.src"
          alt=""
          class="w-full h-full object-cover transition-all"
          :class="isHovering && `rounded-xl`"
        />
      </div>
      <!-- top -->
      <div v-if="loaded" class="flex flex-col justify-between h-full">
        <div class="flex gap-6 overflow-x-hidden z-40 -translate-x-[1.75rem]">
          <div
            class="animate-marquee text-white flex gap-6 whitespace-nowrap z-10 py-1"
            :style="{ backgroundColor }"
          >
            <div class="flex gap-6" v-for="(item, index) in 20" :key="index">
              <span class="uppercase">{{ title }}</span>
              <span>//</span>
            </div>
          </div>
        </div>
        <!-- bottom  -->
        <div
          v-if="loaded"
          class="bottom-0 flex gap-6 py-1 rotate-180 overflow-x-hidden z-20"
          :style="{ backgroundColor }"
        >
          <div
            class="animate-marquee text-white flex gap-6 whitespace-nowrap z-20"
          >
            <div class="flex gap-6" v-for="(item, index) in 20" :key="index">
              <span class="uppercase">{{ title }}</span>
              <span>//</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loaded" class="flex flex-col justify-between">
        <div
          class="flex gap-6 overflow-x-hidden -rotate-90 origin-top-left z-30"
          :style="{ backgroundColor }"
        >
          <!-- left  -->
          <div
            class="animate-marquee text-white flex gap-6 whitespace-nowrap py-1"
          >
            <div class="flex gap-6" v-for="(item, index) in 20" :key="index">
              <span class="uppercase">{{ title }}</span>
              <span>//</span>
            </div>
          </div>
        </div>
        <!-- right  -->
        <div
          class="flex gap-6 overflow-x-hidden rotate-90 origin-top-right z-0"
        >
          <div
            class="animate-marquee py-1 text-white flex gap-6 whitespace-nowrap z-0"
            :style="{ backgroundColor }"
          >
            <div class="flex gap-6" v-for="(item, index) in 20" :key="index">
              <span class="uppercase">{{ title }}</span>
              <span>//</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const { image, href, title, backgroundColor } = defineProps([
  "image",
  "href",
  "backgroundColor",
  "title",
]);

const loaded = ref(false);
const isHovering = ref(false);
const imageRef = ref(null);

onMounted(async () => {
  await nextTick();

  // Check if image is already complete (cached or loaded very quickly)
  if (imageRef.value && imageRef.value.complete) {
    loaded.value = true;
    return;
  }

  // If image is still loading, the @load event will handle it
});
</script>

<style scoped></style>
