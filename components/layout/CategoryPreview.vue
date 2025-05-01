<template>
  <NuxtLink :to="href">
    <div
      class="relative overflow-hidden h-full transition-all"
      :class="{
        'rounded-xl': isHovering,
        'aspect-[3/2]': image.orientation === 'landscape',
        'aspect-[2/3]': image.orientation !== 'landscape',
      }"
      :style="{ backgroundColor }"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <!-- Image container with transition-all -->

      <!-- top -->
      <div v-if="loaded" class="flex flex-col justify-between h-full">
        <div class="flex gap-6 overflow-x-hidden z-40 -translate-x-[1.75rem]">
          <div
            class="animate-marquee text-white flex gap-6 whitespace-nowrap z-10 py-1"
            :style="{ backgroundColor }"
          >
            <div class="flex gap-6" v-for="(item, index) in 40" :key="index">
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
            <div class="flex gap-6" v-for="(item, index) in 40" :key="index">
              <span class="uppercase">{{ title }}</span>
              <span>//</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loaded" class="flex absolute top-0 w-full justify-between">
        <div
          id="leftmarquee"
          class="flex gap-6 px-1 z-30"
          :style="{
            backgroundColor: backgroundColor,
          }"
        >
          <div
            class="animate-marqueeVertical text-white flex z-50 flex-col gap-6 whitespace-nowrap py-1"
          >
            <div
              class="flex gap-6"
              v-for="(item, index) in 40"
              :key="index"
              :style="{
                writingMode: 'sideways-lr',
              }"
            >
              <span class="uppercase">{{ title }}</span>
              <span>//</span>
            </div>
          </div>
        </div>
        <!-- right  -->
        <div
          id="rightmarquee"
          class="z-40 px-1"
          :style="{
            backgroundColor: backgroundColor,
          }"
        >
          <div
            class="animate-marqueeVertical text-white flex z-50 flex-col gap-6 whitespace-nowrap py-1"
            :style="{ animationDirection: 'reverse' }"
          >
            <div
              class="flex gap-6"
              v-for="(item, index) in 40"
              :key="index"
              :style="{
                writingMode: 'sideways-lr',
              }"
            >
              <span class="uppercase">{{ title }}</span>
              <span>///</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-0 transition-all duration-300 ease-in-out z-40"
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
