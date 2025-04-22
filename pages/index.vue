<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex flex-col p-2 pt-12 md:grid grid-cols-12 gap-2">
      <div
        class="col-span-6"
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
    title: "Graffiti",
    backgroundColor: "#a30000",
    href: "/portfolio/graffiti",
    image: {
      src: "/images/graffittiConstruction.webp",
      alt: "Man walking by graffiti",
    },
  },
  {
    title: "Angles",
    backgroundColor: "#792359",
    href: "/portfolio/angles",
    image: {
      src: "/images/kiddo.webp",
      alt: "",
    },
  },
  {
    title: "Currency",
    backgroundColor: "#3F7D20",
    href: "/portfolio/currency",
    image: {
      src: "/images/dollaBills.webp",
      alt: "",
    },
  },
  {
    title: "Transportation",
    backgroundColor: "#F21B3F",
    href: "/portfolio/transportation",
    image: {
      src: "/images/bikeLady.webp",
      alt: "",
    },
  },
  {
    title: "Limbo",
    backgroundColor: "#007EA7",
    href: "/portfolio/limbo",
    image: {
      src: "/images/waitingGuys.webp",
      alt: "",
    },
  },
  {
    title: "Preparations",
    backgroundColor: "#6B2B06",
    href: "/portfolio/preparations",
    image: {
      src: "/images/circusLady.webp",
      alt: "",
    },
  },
  {
    title: "Radiance",
    backgroundColor: "#662C91",
    href: "/portfolio/radiance",
    image: {
      src: "/images/vent.webp",
      alt: "",
    },
  },
  {
    title: "Characters",
    backgroundColor: "#AD343E",
    href: "/portfolio/characters",
    image: {
      src: "/images/downcast.webp",
      alt: "",
    },
  },
  {
    title: "Cops",
    backgroundColor: "#1F271B",
    href: "/portfolio/cops",
    image: {
      src: "/images/cops.webp",
      alt: "",
    },
  },

  {
    title: "Signage",
    backgroundColor: "#064789",
    href: "/portfolio/signage",
    image: {
      src: "/images/copFuel.webp",
      alt: "",
    },
  },
];
</script>

<style scoped></style>
