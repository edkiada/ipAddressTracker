import { defineStore } from 'pinia';

export const useIpStore = defineStore('ip', {
  state: () => ({
		ipData: null,
		isLoading: false,
		error: null,
		isError: false
	}),
	actions: {
		async fetchIPData(ip) {
			this.isLoading = true;
			this.error = null;
			const apiKey = 'at_F5GmZIDChGIO3C6QX3NdrIUxqtJbN';
			const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Failed to fetch IP data');
				}
				const data = await response.json();
				const safeIsp = data.isp || 'UnKnown ISP';
				this.ipData = {
					...data,
					isp: safeIsp
				};
				console.log('抓取成功');
			}
			catch (error) {
				this.error = error.message;
				this.isError = true;
				console.error('抓取失败:', error);
			}
			finally {
				this.isLoading = false;
			}
		}
	} 
});