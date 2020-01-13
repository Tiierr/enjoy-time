<template>
  <div id="minute-time-bar">
    <div id="time-progress">本分鐘的時間進度條: {{ time_percentage }}</div>
    <div id="time-graph">
      <div id="time-bar" :style="{ width: time_bar_with }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'minuteTimeBar',
  data() {
    return {
      def_with: 80,
      time_percentage: '0%',
      time_bar_with: '0vw',
    };
  },
  methods: {
    minuteRate() {
      const now = new Date();
      const startOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
      return Math.round(((now - startOfHour) / 1000 / 60) * 10000) / 100;
    },
    updateTimeBar() {
      // calculate percentage for month
      this.time_percentage = `${this.minuteRate()}%`;
      this.time_bar_with = `${(this.def_with * this.minuteRate()) / 100}vw`;
    },
  },
  mounted() {
    setInterval(this.updateTimeBar, 1000);
  },
};
</script>
