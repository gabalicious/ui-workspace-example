<script setup>
import { computed } from "vue";
import { useCardStyles } from "../composables/useCardStyles";

const props = defineProps({
  variant: {
    type: String,
    default: "square",
  },
  title: {
    type: String,
    default: "Title",
  },
});

const avatarText = computed(() => {
  let result = props.title;
  let split = props.title.split(" ");
  let first = split[0].charAt(0).toUpperCase();
  let last = split[1].charAt(0).toUpperCase();
  result = `${first}${last}`;
  return result;
});
const classes = useCardStyles(props);
</script>

<template>
  <div :class="classes.layout">
    <div :class="classes.cardContent">
      <div :class="classes.avatarStyles">
        <span>{{ avatarText }}</span>
      </div>

      <p :class="classes.font">
        {{ title }}
      </p>
    </div>
  </div>
</template>
