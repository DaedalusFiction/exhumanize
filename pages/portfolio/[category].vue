<template>
  <div>
    <LayoutPageHeader :header="category" />
    <div
      class="flex flex-col md:grid grid-cols-12 gap-2 max-w-screen-2xl px-3 mx-auto"
    >
      <div
        v-for="(photograph, index) in photographs"
        :key="index"
        class="col-span-4"
      >
        <img :src="photograph.data().image.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/firebase.config";

const router = useRoute();
const category = router.params.category;
const photographs = ref([]);
onMounted(async () => {
  const collectionRef = collection(db, `photographs/categories/` + category);
  const photographsSnapshot = await getDocs(collectionRef);
  console.log(photographsSnapshot.docs);
  photographs.value = photographsSnapshot.docs;
});
</script>

<style scoped></style>
