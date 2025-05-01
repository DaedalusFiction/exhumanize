<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex flex-col p-2 pt-12 md:grid grid-cols-5 gap-2">
      <div
        :class="{
          'row-span-2 col-span-3': category.image.orientation === 'landscape',
          'row-span-3 col-span-2': category.image.orientation === 'portrait',
        }"
        v-for="(category, index) in categories"
        :key="index"
      >
        <LayoutCategoryPreview
          :backgroundColor="category.backgroundColor"
          :href="category.href"
          :title="category.title"
          :image="category.image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    title: "shadows",
    backgroundColor: "#064789",
    href: "/portfolio/shadows",
    image: {
      src: "/images/shadeLady.webp",
      alt: "",
      orientation: "landscape",
    },
  },
  {
    title: "radiance",
    backgroundColor: "#662C91",
    href: "/portfolio/radiance",
    image: {
      src: "/images/orangeWig.webp",
      alt: "",
      orientation: "portrait",
    },
  },
  {
    title: "angles",
    backgroundColor: "#792359",
    href: "/portfolio/angles",
    image: {
      src: "/images/kiddo.webp",
      alt: "",
      orientation: "landscape",
    },
  },
  {
    title: "currency",
    backgroundColor: "#3F7D20",
    href: "/portfolio/currency",
    image: {
      src: "/images/dollaBills.webp",
      alt: "",
      orientation: "landscape",
    },
  },
  {
    title: "graffiti",
    backgroundColor: "#a30000",
    href: "/portfolio/graffiti",
    image: {
      src: "/images/cokeWall.webp",
      alt: "Man walking by graffiti",
      orientation: "portrait",
    },
  },
  {
    title: "crosswalks",
    backgroundColor: "#1F271B",
    href: "/portfolio/cops",
    image: {
      src: "/images/crosswalkDresses.webp",
      alt: "",
      orientation: "portrait",
    },
  },
  {
    title: "limbo",
    backgroundColor: "#007EA7",
    href: "/portfolio/limbo",
    image: {
      src: "/images/gardenSitter.webp",
      alt: "",
      orientation: "landscape",
    },
  },
  {
    title: "transportation",
    backgroundColor: "#F21B3F",
    href: "/portfolio/transportation",
    image: {
      src: "/images/bikeLady.webp",
      alt: "",
      orientation: "landscape",
    },
  },
  {
    title: "preparations",
    backgroundColor: "#6B2B06",
    href: "/portfolio/preparations",
    image: {
      src: "/images/circusLady.webp",
      alt: "",
      orientation: "landscape",
    },
  },
  {
    title: "characters",
    backgroundColor: "#AD343E",
    href: "/portfolio/characters",
    image: {
      src: "/images/stoolShirts.webp",
      alt: "",
      orientation: "landscape",
    },
  },
];
</script>

<style scoped></style>
