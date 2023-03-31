<script lang="ts" setup>
import { computed } from "vue";
import addBlockStyles from "../utils/addDetailTextBlock";

const props = defineProps({
  label: {
    type: String,
    default: "Label",
  },
  labelWidth: {
    type: String,
    default: "w-64",
  },
  text: {
    type: [String, Number, Date],
    default: "Text Here",
  },

  variant: {
    type: String,
    default: "row",
  },
});

const blockStyles = computed(() => {
  let result = addBlockStyles(props.variant);
  return result;
});
</script>

<template>
  <div :class="blockStyles.container">
    <h4 :class="`${props.labelWidth} ${blockStyles.label}`">
      {{ props.label }}
    </h4>

    <p :class="`${blockStyles.text}`">
      {{ text }}
    </p>
  </div>
</template>
