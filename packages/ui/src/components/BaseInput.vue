<script setup>
import { computed, reactive } from "vue";
import addInputCss from "../utils/addBaseInputCss.ts";
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  dataTest: {
    type: String,
    default: "base-input",
  },
  modelValue: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  errMessage: {
    type: String,
  },
});

const classes = computed(() => {
  let result = addInputCss("base");
  if (props.hasError) {
    result = addInputCss("error");
  }

  return result;
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label v-if="label" :class="classes.label" ref="input-label">{{
      label
    }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      :class="classes.input"
      :value="modelValue"
      ref="base-input"
      :id="dataTest"
      :data-test="dataTest"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <p v-if="hasError" :class="classes.errMessage" ref="error-message">
      {{ errMessage }}
    </p>
  </div>
</template>
