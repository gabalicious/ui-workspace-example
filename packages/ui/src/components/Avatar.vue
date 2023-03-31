<template>
  <div :class="classes" :style="style">
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineProps } from "vue";
import addAvatarCss from "../utils/addAvatarCss";
export default {
  name: "avatar",

  props: {
    label: {
      type: String,
      required: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    variant: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {
      addAvatarCss,
      classes: computed(() => ({
        [`${addAvatarCss(props.variant)}`]: props.variant,
        [`bg-${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    };
  },
};
</script>

<style scoped></style>
