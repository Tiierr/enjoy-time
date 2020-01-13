<template>
  <div id="year-time-bar">
    <div id="time-progress">今年的時間進度條: {{ time_percentage }}</div>
    <div id="time-graph">
      <div id="time-bar" :style="{ width: time_bar_with }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'yearTimeBar',
  data() {
    return {
      def_with: 80,
      time_percentage: '0%',
      time_bar_with: '0vw',
    };
  },
  methods: {
    secondsPerYear(year) {
      if (this.leapYear(year)) {
        return 31622400;
      }
      return 31536000;
    },
    leapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },
    yearRate() {
      const now = new Date();
      const initDate = new Date(now.getFullYear(), now.getMonth());
      const spy = this.secondsPerYear(now.getFullYear());
      return Math.round(((now - initDate) / spy) * 100) / 1000;
    },
    updateTimeBar() {
      // calculate percentage for year
      this.time_percentage = `${this.yearRate()}%`;
      this.time_bar_with = `${(this.def_with * this.yearRate()) / 100}vw`;
    },
  },
  mounted() {
    setInterval(this.updateTimeBar, 1000);
  },
};
</script>
