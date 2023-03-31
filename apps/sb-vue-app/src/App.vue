<template>
  <Button
    className="m-3"
    :theme="theme"
    id="asd"
    :variant="variant"
    :size="size"
    :disabled="disabled"
    :rounded="rounded"
    :shadow="shadow"
  >
    <p>{{ slot }}</p></Button
  >

  <Button
    className="m-3"
    theme="default"
    variant="primary"
    @click="toggleVariant"
    >Toggle variant {{ variant }}
  </Button>
  <Button className="m-3" theme="default" variant="primary" @click="toggleSize"
    >Toggle size {{ size }}
  </Button>
  <Button
    className="m-3"
    theme="default"
    variant="primary"
    @click="toggleDisabled"
    >Toggle disabled {{ disabled }}
  </Button>
  <Button className="m-3" theme="default" variant="primary" @click="toggleTheme"
    >Toggle theme {{ theme }}
  </Button>

  <Button className="m-3" theme="default" variant="primary" @click="toggleSlot"
    >Toggle slot {{ slot }}
  </Button>
  <Button
    className="m-3"
    theme="default"
    variant="primary"
    @click="toggleRounded"
    >Toggle rounded {{ rounded }}
  </Button>
  <Button
    className="m-3"
    theme="default"
    variant="primary"
    @click="toggleShadow"
    >Toggle shadow {{ shadow }}
  </Button>
</template>

<script setup lang="ts">
import "./index.css?raw";
import { Button } from "ui";
import { provide, ref } from "vue";
provide("theme", "default");

const variant = ref("primary");
const size = ref("md");
const disabled = ref(false);
const theme = ref("default");

const slot = ref("Hello World");
const rounded = ref("rounded");
const shadow = ref("shadow");

const toggleVariant = () => {
  variant.value = variant.value === "primary" ? "secondary" : "primary";
};

const toggleSize = () => {
  size.value = size.value === "md" ? "lg" : "md";
};

const toggleDisabled = () => {
  disabled.value = !disabled.value;
};

const toggleTheme = () => {
  theme.value = theme.value === "default" ? "client2" : "default";
};

const toggleSlot = () => {
  slot.value = slot.value === "Hello World" ? "Hello World 2" : "Hello World";
};

const toggleRounded = () => {
  rounded.value =
    rounded.value === "rounded" ? "rounded-cross-lt-rb" : "rounded";
};

const toggleShadow = () => {
  shadow.value = shadow.value === "colored" ? "shadow-none" : "colored";
};
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
