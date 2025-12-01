const { createApp, onMounted } = Vue;

const travelReportData = {
  reportYear: 2025,
  monthlyTrips: 68,
  scenicSpots: 127,
  cityCoverage: 25,
  cityDepth: 25,
  logos: [
    {
      label: "百度地图",
      src: "https://img.alicdn.com/imgextra/i4/O1CN01zzJLRp1wqMNyaYMMd_!!6000000006347-2-tps-48-48.png",
    },
    {
      label: "每程旅行",
      src: "https://img.alicdn.com/imgextra/i1/O1CN01a6sjo91m6Wc1hZixA_!!6000000004886-2-tps-48-48.png",
    },
  ],
  tabs: [
    { icon: "📍", label: "百度地图" },
    { icon: "📄", label: "素合2025岁月出行报告" },
  ],
};

createApp({
  setup() {
    const state = Vue.reactive(travelReportData);

    onMounted(() => {
      document.body.classList.add("ready");
    });

    return state;
  },
}).mount("#app");
