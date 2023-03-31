<script setup lang="ts">
import { computed } from "vue";
import addTooltipCss from "@utils/addTooltipCss";

const props = defineProps({
  position: {
    type: String,
    default: "top",
  },
  target: {
    type: String,
    default: "",
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "Helpful Text Here",
  },
  id: {
    type: String,
  },
});

const tooltipStyles = computed(() => {
  let result = addTooltipCss(props.position, props.darkMode);
  // if (!result) {
  //   result = {};
  // }
  console.log(result);
  return result;
});
</script>

<template>
  <div class="relative">
    <div
      :class="`relative  w-fit rounded-lg flex justify-end items-center border px-3 py-2 ${tooltipStyles.position} ${tooltipStyles.theme} z-0 `"
      :id="`tooltip-${id}`"
      :data-test="`tooltip-container-${id}`"
    >
      <p class="text-14 leading-16" :data-test="`tooltip-text-${id}`">
        {{ text }}
      </p>
    </div>
    <div
      :class="`${tooltipStyles.chevronPosition} z-10 absolute h-3 w-3 rotate-45 border ${tooltipStyles.theme}  `"
    ></div>
  </div>
</template>
