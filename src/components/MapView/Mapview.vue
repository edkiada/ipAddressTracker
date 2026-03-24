<script setup>
	import L from "leaflet";
	import { useIpStore  } from "../../stores/ipStore";
	import Url from '../../assets/icon-location.svg'
	import "leaflet/dist/leaflet.css";
	import { onMounted, ref, watch } from "vue";

	const IPstore = useIpStore();
	const map = ref(null);
	const marker = ref(null);
	const customIcon = L.icon({
		iconUrl: Url,
		iconSize: [40, 50],
		iconAnchor: [20, 50]
	});


	const initMap = () => {
		const lat = IPstore.ipData?.location?.lat || 25.033;
		const lng = IPstore.ipData?.location?.lng || 121.565;

		map.value = L.map('map').setView([lat, lng], 13);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors'
		}).addTo(map.value);

		marker.value = L.marker([lat, lng], { icon: customIcon}).addTo(map.value);
	};
	watch(() => IPstore.ipData, (newData) => {
		if (newData && map.value) { // 確保資料拿到了且地圖已經蓋好了
			const { lat, lng } = newData.location; // 從新資料裡解構出經緯度
			
			// 讓地圖中心點平滑移動到新位置
			map.value.setView([lat, lng], 13); 
			
			// 把藍色大頭針也移過去新位置
			marker.value.setLatLng([lat, lng]); 
		}
	}, { deep: true }); // deep: true 表示要深層監聽，因為資料藏在物件的好幾層下面
	onMounted(() => {
		initMap();
	});

</script>

<template>
	<div id="map" class="map"></div>
</template>

<style scoped>
	.map {
		height: 70vh;
		width: 100%;
		z-index: 0;
	}
</style>