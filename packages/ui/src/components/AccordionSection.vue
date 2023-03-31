<script setup>
import BaseInput from "./BaseInput.vue";
// Assets
import caretUp from "../assets/caretUp.svg";
import caretDown from "../assets/caretDown.svg";
// Composables
import { useAccordionStyles } from "../composables/useAccordionStyles";

const props = defineProps({
  sectionHeader: String,
  showSection: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    default: 0,
  },
  variant: {
    type: String,
    default: "default",
  },
  dataTest: {
    type: String,
    default: `toggle-section`,
  },
});
const emit = defineEmits(["toggle"]);

const classes = useAccordionStyles(props);
</script>

<template>
  <section :id="`accordion-section-${index}`" :class="classes.container">
    <header :class="classes.header">
      <h4 :id="`section-title-${index}`" :class="classes.title">
        {{ props.sectionHeader }}
      </h4>
      <button
        :class="classes.button"
        :id="`toggle-section-${index}`"
        :data-test="`toggle-section-${index}`"
        @click="emit('toggle')"
      >
        <img class="" :src="showSection ? caretUp : caretDown" alt="" />
      </button>
    </header>
    <Transition name="content">
      <div v-if="showSection" :class="classes.content">
        <slot name="section-content">
          <form>
            <BaseInput label="Name" class="w-full" />
            <BaseInput label="Email" class="w-full" />
          </form>
        </slot>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.content-enter-active,
.content-leave-active {
  transition: all 0.25s linear;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
}
</style>
