<script setup>
import { computed } from "vue";
// Styles
import { addPageHeaderCss } from "../utils/addHeaderCss.ts";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
});

const headerStyles = computed(() => {
  let result = addPageHeaderCss(props.variant);
  return result;
});
</script>

<template>
  <header :class="headerStyles.container">
    <section :class="headerStyles.headerContent">
      <div :class="headerStyles.leftSlot">
        <slot name="left-content"> </slot>
      </div>

      <div :class="headerStyles.centerSlot">
        <slot name="center-content"> </slot>
      </div>

      <div :class="headerStyles.rightSlot">
        <slot name="right-content"> </slot>
      </div>
    </section>
  </header>
</template>
