<script setup>
import { onMounted } from 'vue';
import { useIpStore } from './stores/ipStore.js';
import SearchBar from './components/SearchBar/SearchBar.vue'
import InfoPanel from './components/InfoPanel/InfoPanel.vue'
import Mapview from './components/MapView/Mapview.vue';

const ipStore = useIpStore();

onMounted(() => {
  ipStore.fetchIPData('182.143.12.7');
});

</script>

<template>
  <div class="appContainer">
    <main class="appHeader">
      <h1 class="appTitle"> IP Address Tracker</h1>
      <SearchBar />
      <!--
      <p v-if="ipStore.isLoading">正在連線中...</p>
    
      <p v-if="ipStore.error" style="color: red;">{{ ipStore.error }}</p>

      <pre v-if="ipStore.ipData">{{ ipStore.ipData }}</pre>
      -->
      <InfoPanel />
    </main>
    <Mapview />
  </div>
</template>
