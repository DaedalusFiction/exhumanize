<template>
  <div>
    <button @click="handleOpenDialog">
      <p class="underline link">{{ text }}</p>
    </button>
  </div>
  <div
    v-if="isDialogOpen"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start w-full">
              <div class="mt-3 text-center sm:ml-4 w-full sm:mt-0 sm:text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {{ title }}
                </h3>
                <div class="mt-2">
                  <textarea
                    v-model="reportText"
                    class="w-full"
                    :placeholder="placeholder"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              @click="handleConfirm"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              {{ confirmButtonText }}
            </button>
            <button
              type="button"
              @click="handleCancel"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps([
  "action",
  "title",
  "text",
  "confirmButtonText",
  "critical",
  "placeholder",
]);
const emit = defineEmits(["confirm"]);
const reportText = ref("");
const isDialogOpen = ref(false);
const handleOpenDialog = () => {
  isDialogOpen.value = !isDialogOpen.value;
};
const handleConfirm = () => {
  emit("confirm", reportText.value);
  handleOpenDialog();
};
const handleCancel = () => {
  handleOpenDialog();
};
</script>

<style scoped>
.primary {
  @apply transition  hover:brightness-110;
}
</style>
