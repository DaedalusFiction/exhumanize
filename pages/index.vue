<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex flex-col p-2 pt-12 md:grid grid-cols-12 gap-2">
      <div
        class="col-span-6"
        v-for="(category, index) in categories"
        :key="index"
      >
        <LayoutCategoryPreview
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
    href: "/categories/graffiti",
    image: {
      src: "/images/graffittiConstruction.webp",
      alt: "Man walking by graffiti",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/kiddo.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/dollaBills.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/bikeLady.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/waitingGuys.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/circusLady.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/vent.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/downcast.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/cops.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/classCops.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/ladies.webp",
      alt: "",
    },
  },
  {
    title: "",
    href: "/categories/",
    image: {
      src: "/images/copFuel.webp",
      alt: "",
    },
  },
];
</script>

<style scoped></style>
