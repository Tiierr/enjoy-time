<template>
  <div id="default-container">
    <div id="title">Enjoy {{ currentYear }}</div>
    <div id="default-time-bar">
      <year-container></year-container>
      <month-container></month-container>
      <day-container></day-container>
      <hour-container></hour-container>
      <minute-container></minute-container>
    </div>
  </div>
</template>

<script>
import yearContainer from './YearTimeBar';
import monthContainer from './MonthTimeBar';
import dayContainer from './DayTimeBar';
import hourContainer from './HourTimeBar';
import minuteContainer from './MinuteTimeBar';

export default {
  name: 'DefaultTimeBar',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  components: {
    yearContainer,
    monthContainer,
    dayContainer,
    hourContainer,
    minuteContainer,
  },
};
</script>

<style scoped>
#default-time-bar {
  position: -ms-device-fixed;
  top: auto;
}
</style>
