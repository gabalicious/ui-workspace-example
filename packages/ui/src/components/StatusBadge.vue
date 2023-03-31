<script setup>
import { useBadgeStyles } from "../composables/useBadgeStyles";

const props = defineProps({
  status: {
    type: String,
    default: "default",
  },
  text: {
    type: String,
    default: "Text Here",
  },
});

const classes = useBadgeStyles(props);
</script>

<template>
  <div :class="classes" data-test="badge-container">
    <p class="" ref="badge-text" data-test="badge-text">
      {{ text.toUpperCase() }}
    </p>
  </div>
</template>
