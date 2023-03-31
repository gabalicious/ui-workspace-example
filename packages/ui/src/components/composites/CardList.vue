<script setup>
// Components
import Card from "../Card.vue";

const props = defineProps({
  listItems: {
    type: Array,
  },
  type: {
    type: String,
    default: "row",
  },
});
</script>

<template>
  <section
    class="flex flex-col items-center w-full h-screen light-bg-gradient dark:dark-bg-gradient"
  >
    <div class="w-[98%] mx-auto mt-8 flex flex-col items-center gap-3">
      <Card
        v-for="item in listItems"
        :key="item.id"
        :variant="type"
        :title="item.name"
      />
    </div>
  </section>
</template>
