<template>
  <div>
    <div class="max-w-screen-2xl mx-auto">
      <button v-if="admin" class="btn my-3" @click="handleSignIn">
        Sign In
      </button>
      <div v-else class="md:grid min-h-screen grid-cols-12 border">
        <div
          class="col-span-2 border-r bg-backgroundAccent dark:bg-backgroundAccentDarkMode"
        >
          <div
            v-for="menuItem in menu"
            @click="selectedPanel = menuItem.name"
            :key="menuItem.name"
            class="transition hover:bg-background dark:hover:bg-dark flex gap-2 w-full max-w-full p-2 cursor-pointer"
            :class="
              menuItem.name === selectedPanel
                ? 'bg-background dark:bg-dark'
                : 'bg-backgroundAccent dark:bg-backgroundAccentDarkMode'
            "
          >
            <component :is="menuItem.icon" class="w-5 dark:stroke-white" />
            <p>{{ menuItem.name }}</p>
          </div>
        </div>
        <div class="col-span-10 p-3">
          <AdminPhotographList v-if="selectedPanel === 'Portfolio'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { auth, db, provider } from "~/firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, markRaw } from "vue";
import bookIcon from "~/components/icons/Book.vue";

definePageMeta({
  layout: "admin",
});
const admin = ref(false);
const menu = ref([{ name: "Portfolio", icon: bookIcon }]);
const selectedPanel = ref("Portfolio");

const handleSignIn = async () => {
  const user = await login();
  if (user) {
    admin.value = user.admin;
  }
};

const login = async () => {
  let currentUser;
  const user = await signInWithPopup(auth, provider)
    .then(async (result) => {
      GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      const userRef = doc(db, "users", result.user.uid);
      const userRefSnap = await getDoc(userRef);
      if (!userRefSnap.exists()) {
        setDoc(doc(db, "users", result.user.uid), {
          UID: result.user.uid,
          name: user.displayName,
          admin: false,
        });
      } else {
        currentUser = userRefSnap.data();
      }
    })
    .catch((error) => {
      console.log(error.message);
    });

  return currentUser;
};
</script>

<style scoped>
li {
  @apply font-semibold flex gap-2 text-lg cursor-pointer rounded-sm m-0 px-4 py-2;
}
</style>
