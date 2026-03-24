<script setup>
	import { useIpStore } from '../../stores/ipStore';
	import { ref } from 'vue';
	const ipStore = useIpStore(); 
	const userInput = ref('');
	
	function fetchIP(Ip){
		ipStore.fetchIPData(Ip);
	}
	
	const ResetIPError = (event) => {
		if(ipStore.isError) {
			ipStore.isError = false;
		}
	}
</script>

<template>
    <div class="searchBarContainer">
      <input type="text" @input='ResetIPError' v-model="userInput" class="searchInput" :class="{ ipError: ipStore.isError}" placeholder="Search for any IP address or domain" />
      <button class="searchButton" type="button" @click="fetchIP(userInput)">
        <img src="../../assets/icon-arrow.svg" alt="Search" class="searchIcon" />
      </button>
    </div>
</template>

<style scoped>
    @import "./SearchBar.css";
</style>
