<script setup>
	import { useIpStore } from '../../stores/ipStore.js';

	const IPstore = useIpStore();
	
</script>

<template>
	<div class="InfoPanel" v-if="IPstore.ipData">
		<div class="IPAddress info">
			<p class="title">IP ADDRESS</p>
			<p class="data">{{ IPstore.ipData.ip }}</p>
		</div>
		<div class="divider"></div>
		<div class="location info">
			<p class="title">LOCATION</p>
			<p class="data">{{ IPstore.ipData.location.city }}, {{ IPstore.ipData.location.region }}, {{ IPstore.ipData.location.postalCode }}</p>
		</div>
		<div class="divider"></div>
		<div class="timezone info">
			<p class="title">TIMEZONE</p>
			<p class="data">UTC {{ IPstore.ipData.location.timezone }}</p>
		</div>
		<div class="divider"></div>
		<div class="isp info">
			<p class="title">ISP</p>
			<p class="data">{{ IPstore.ipData.isp }}</p>
		</div>
	</div>
</template>

<style scoped>
  @import "./InfoPanel.css";
</style>