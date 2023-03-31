<script setup>
import { useDraggable, useWindowSize } from "@vueuse/core";
import { ref } from "vue";
// Styles

import { useModalStyles } from "../composables/useModalStyles";
// Assets
import close from "../assets/close.svg";
const props = defineProps({
  title: String,
  variant: {
    type: String,
    default: "default",
  },
  show: {
    type: Boolean,
    default: false,
  },
});
const { width, height } = useWindowSize();
const draggable = ref(null);
defineEmits(["closeModal"]);

const { style } = useDraggable(draggable, {
  initialValue: { x: width.value / 2.5, y: height.value / 4 },
  // This seems to center the modal on the x axis and
  // puts it just above center on the Y axis
});

const classes = useModalStyles(props);
</script>

<template>
  <div
    v-if="show && classes"
    :class="classes.backdrop"
    @click="$emit('closeModal')"
  ></div>
  <div v-if="show && classes" :style="style" :class="classes.container">
    <header ref="draggable" :class="classes.header">
      <h4 :class="classes.title">{{ props.title }}</h4>
      <button :class="classes.button" @click="$emit('closeModal')">
        <img class="h-4 mr-2" :src="close" alt="" />
      </button>
    </header>
    <slot name="modal-content" />
  </div>
</template>
