<template>
  <div id="hour-time-bar">
    <div id="time-progress">本小時的時間進度條: {{ time_percentage }}</div>
    <div id="time-graph">
      <div id="time-bar" :style="{ width: time_bar_with }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HourTimeBar',
  data() {
    return {
      def_with: 80,
      time_percentage: '0%',
      time_bar_with: '0vw',
    };
  },
  methods: {
    hourRate() {
      const now = new Date();
      const startOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
      return Math.round(((now - startOfHour) / 1000 / 3600) * 10000) / 100;
    },
    updateTimeBar() {
      // calculate percentage for month
      this.time_percentage = `${this.hourRate()}%`;
      this.time_bar_with = `${(this.def_with * this.hourRate()) / 100}vw`;
    },
  },
  mounted() {
    setInterval(this.updateTimeBar, 1000);
  },
};
</script>
