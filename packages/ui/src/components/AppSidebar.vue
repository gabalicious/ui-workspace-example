<script setup>
import { computed } from "vue";
// Assets
import close from "../assets/close.svg";
// Styles
import addSidebarCss from "../utils/addSidebarCss.ts";

const props = defineProps({
  title: {
    type: String,
    default: "Sidebar",
  },
  show: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "default",
  },
});

const emit = defineEmits(["hide"]);

const sidebarStyles = computed(() => {
  let result = addSidebarCss(props.variant);
  return result;
});
</script>

<template>
  <div v-if="show" id="sidebar-container" :class="sidebarStyles.container">
    <header :class="sidebarStyles.header">
      <h4 id="sidebar-title" :class="sidebarStyles.title">{{ props.title }}</h4>
      <button
        id="close-sidebar"
        :class="sidebarStyles.closeButton"
        @click="emit('hide')"
      >
        <img :src="close" alt="close modal" />
      </button>
    </header>
    <slot name="sidebar-content" />
  </div>
</template>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.4s ease;
  transform: translateX(0);
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(200%);
}
</style>
