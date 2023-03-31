<script setup>
import { ref, provide } from "vue";
// Components
import AccordionSection from "../AccordionSection.vue";
import AppHeader from "../AppHeader.vue";
import AppSidebar from "../AppSidebar.vue";
import PageHeader from "../PageHeader.vue";
import Button from "../Button.vue";
import BaseInput from "../BaseInput.vue";
import CardList from "./CardList.vue";
import BaseModal from "../BaseModal.vue";
//Assets
import filterBurger from "../../assets/filterBurger.svg";
import { useToggle } from "../../composables/useToggle";

// provide("theme", "client3");
const modal = useToggle();

const sidebar = useToggle();
const accordion = useToggle(true);

const query = ref("");
const users = ref([
  { id: 0, name: "Josh Humphrey" },
  { id: 1, name: "Stephanie Cheney" },
  { id: 2, name: "Justin Gaba" },
  { id: 3, name: "Greg Warner" },
  { id: 4, name: "Markel Spellman" },
]);
</script>

<template>
  <main
    class="absolute top-0 left-0 w-full h-screen mx-auto"
    ref="landing-page"
  >
    <Transition name="sidebar">
      <AppSidebar
        title="Le Sidebar"
        :show="sidebar.showing.value"
        @hide="sidebar.hide"
      >
        <template #sidebar-content>
          <AccordionSection
            section-header="Test Section"
            :show-section="accordion.showing.value"
            @toggle="accordion.toggle"
          ></AccordionSection>
        </template> </AppSidebar
    ></Transition>

    <BaseModal
      :show="modal.showing.value"
      title="Modal"
      @close-modal="modal.hide"
    >
      <template #modal-content>
        <div class="flex flex-col items-center w-full">
          <p id="modal-text" class="px-3">You have opened the modal.</p>
          <Button
            :disabled="modal.showing.value"
            variant="danger"
            id="close-modal"
            @click="modal.hide"
            >close</Button
          >
        </div>
      </template>
    </BaseModal>

    <AppHeader variant="default">
      <template #leftContent>
        <div class="w-12 h-12 rounded-full bg-slate-400"></div>
        <h1 class="text-15">App Header</h1>
      </template>
      <template #centerContent>
        <BaseInput
          placeholder="Search"
          :model-value="query"
          data-test="search-input"
        />
        <Button variant="primary" size="lg" id="search-button">Search</Button>
      </template>
      <template #rightContent>
        <Button
          variant="primary"
          id="open-modal"
          size="lg"
          @click="modal.toggle"
          >Toggle Modal</Button
        >
      </template>
    </AppHeader>
    <PageHeader>
      <template #left-content>
        <Button variant="primaryOutline" id="open-modal">Profiles</Button>
      </template>
      <template #center-content>
        <h4 class="text-15">Route Name or something</h4>
      </template>
      <template #right-content>
        <Button
          variant="square"
          id="open-sidebar"
          size="sm"
          @click="sidebar.toggle"
        >
          <img :src="filterBurger" alt="" class="h-6 mx-auto" />
        </Button>
      </template>
    </PageHeader>

    <CardList class="bg-background-gradient-dark" :list-items="users" />
  </main>
</template>
