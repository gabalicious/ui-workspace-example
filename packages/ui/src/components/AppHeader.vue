<script setup>
import { computed } from "vue";
// Styles
import addHeaderCss from "../utils/addHeaderCss.ts";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
});

const headerStyles = computed(() => {
  let result = addHeaderCss(props.variant);
  return result;
});
</script>

<template>
  <header ref="app-header" :class="headerStyles.container">
    <section :class="headerStyles.headerContent">
      <div :class="headerStyles.leftSlot">
        <slot name="leftContent"> </slot>
      </div>

      <div :class="headerStyles.centerSlot">
        <slot name="centerContent"> </slot>
      </div>

      <div :class="headerStyles.rightSlot">
        <slot name="rightContent"> </slot>
      </div>
    </section>
  </header>
</template>
