<template>
  <div id="day-time-bar">
    <div id="time-progress">本天的時間進度條: {{ time_percentage }}</div>
    <div id="time-graph">
      <div id="time-bar" :style="{ width: time_bar_with }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayTimeBar',
  data() {
    return {
      def_with: 80,
      time_percentage: '0%',
      time_bar_with: '0vw',
    };
  },
  methods: {
    dayRate() {
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      return Math.round(((now - startOfDay) / 1000 / 86400) * 100000) / 1000;
    },
    updateTimeBar() {
      // calculate percentage for month
      this.time_percentage = `${this.dayRate()}%`;
      this.time_bar_with = `${(this.def_with * this.dayRate()) / 100}vw`;
    },
  },
  mounted() {
    setInterval(this.updateTimeBar, 1000);
  },
};
</script>
