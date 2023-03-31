<template>
  <button
    :class="classes === '' ? initialState : classes"
    :disabled="disabled"
    :id="id"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useButtonStyles } from "../composables/useButtonStyles";

const props = defineProps({
  theme: {
    type: String,
    required: false,
  },
  id: {
    type: String,
  },
  className: {
    type: String,
    required: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    required: false,
    default: "md",
    validator: function (value: string) {
      return ["xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;
    },
  },
  rounded: {
    type: String,
    required: false,
    default: "rounded",
  },
  shadow: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  block: {
    type: Boolean,
    required: false,
    default: false,
  },
  outline: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const initialState = ref("bg-primary-500 text-white");

const { classes } = useButtonStyles(props);
const { id, disabled } = props;
</script>
