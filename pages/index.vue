<template>
  <div class="max-w-screen-2xl mx-auto">
    <div class="flex flex-col p-2 pt-12 md:grid grid-cols-12 gap-2">
      <div class="col-span-6">
        <LayoutCategoryPreview
          href="https://google.com"
          text="This is the text"
          :image="img"
        />
      </div>
      <div class="col-span-6">
        <img src="/public/images/kiddo.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/dollaBills.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/bikeLady.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/waitingGuys.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/circusLady.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/vent.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/downcast.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/cops.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/classCops.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/ladies.webp" alt="" />
      </div>
      <div class="col-span-6">
        <img src="/public/images/copFuel.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const img = { src: "/images/graffittiConstruction.webp" };
</script>

<style scoped></style>
