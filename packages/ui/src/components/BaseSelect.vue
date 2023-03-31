<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { OnClickOutside } from "@vueuse/components";
import addInputCss from "../utils/addBaseInputCss.ts";
import addSelectCss from "../utils/addSelectCss.ts";

const props = defineProps({
  modelValue: String,
  label: String,
  options: Array,
});
const emit = defineEmits(["update:modelValue"]);

const showOptions = ref(false);
const selectedValue = ref(props.modelValue);
const visibleOptions = ref([...props.options]);

const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

const hideOptions = () => {
  showOptions.value = false;
};

const filterSelected = (selected) => {
  // Filters selected value from options
  // Runs when component is mounted and if an option is selected
  const filtered = selected.label
    ? props.options.filter((item) => item.label !== selected.label)
    : props.options.filter((item) => item !== selected);

  visibleOptions.value = filtered;
};
const filterQuery = (query) => {
  // Filters list of options based on whatever was typed in.
  if (query === "") {
    visibleOptions.value = props.options;
  }
  const filtered = visibleOptions.value.filter((item) =>
    item.label
      ? item.label.toLowerCase().includes(query.toLowerCase())
      : item.toLowerCase().includes(query.toLowerCase())
  );

  visibleOptions.value = filtered;
};

const setSelected = (option) => {
  filterSelected(option);
  showOptions.value = false;
  selectedValue.value = option.label ?? option;
  emit("update:modelValue", option.value ?? option);
};
const inputClasses = computed(() => {
  let result = addInputCss("base");
  if (props.hasError) {
    result = addInputCss("error");
  }

  return result;
});
const selectClasses = computed(() => {
  let result = addSelectCss("base");
  return result;
});

onBeforeMount(() => {
  let option = props.options.find((item) => item.value === props.modelValue);
  if (option) {
    selectedValue.value = option.label ?? option;
  }
  if (selectedValue.value) {
    filterSelected(selectedValue.value);
  }
});
</script>

<template>
  <section class="w-full bg-transparent border-none">
    <label :class="inputClasses.label" ref="select-label">{{ label }}</label>
    <OnClickOutside class="relative mt-2" @trigger="hideOptions">
      <div class="relative">
        <input
          ref="select-input"
          v-bind="$attrs"
          v-model="selectedValue"
          :class="inputClasses.input"
          type="text"
          data-testid="select-input"
          tabindex="0"
          @keydown.enter.prevent="toggleOptions"
          @click="toggleOptions"
          @input="filterQuery($event.target.value)"
        />

        <div v-if="showOptions" :class="selectClasses.options">
          <div
            v-for="option in visibleOptions"
            :id="option.value ?? option"
            :key="option.value ?? option"
            :class="selectClasses.option"
            :data-testid="option.value ?? option"
            tabindex="0"
            @keydown.enter.prevent="setSelected(option)"
            @click="setSelected(option)"
          >
            {{ option.label ?? option }}
          </div>
        </div>
      </div>
    </OnClickOutside>
  </section>
</template>
