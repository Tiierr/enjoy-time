<template>
  <div id="month-time-bar">
    <div id="time-progress">本月的時間進度條: {{ time_percentage }}</div>
    <div id="time-graph">
      <div id="time-bar" :style="{ width: time_bar_with }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'monthTimeBar',
  data() {
    return {
      def_with: 80,
      time_percentage: '0%',
      time_bar_with: '0vw',
    };
  },
  methods: {
    secondsPerMonth(y, m) {
      return new Date(y, m, 0).getDate() * 24 * 3600;
    },

    monthRate() {
      const now = new Date();
      const initDate = new Date(now.getFullYear(), now.getMonth());
      const spm = this.secondsPerMonth(now.getFullYear(), now.getMonth() + 1);
      return Math.round(((now - initDate) / spm) * 100) / 1000;
    },

    updateTimeBar() {
      // calculate percentage for month
      this.time_percentage = `${this.monthRate()}%`;
      this.time_bar_with = `${(this.def_with * this.monthRate()) / 100}vw`;
    },
  },
  mounted() {
    setInterval(this.updateTimeBar, 1000);
  },
};
</script>
