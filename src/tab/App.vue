<template>
  <div id="app">
    <div id="time-container">
      <div id="time-bar-container">
        <component v-if="show" :is="currentTabComponent" :id="currentID"></component>
      </div>
    </div>
    <div id="abt" ref="abt" @click="fold">
      <div @click="changeCurrentTimeType('default')" id="all-link" :style="{ fontSize: fontSize('default') + 'vh' }">全</div>
      <div @click="changeCurrentTimeType('year')" id="year-link" :style="{ fontSize: fontSize('year') + 'vh' }">年</div>
      <div @click="changeCurrentTimeType('month')" id="month-link" :style="{ fontSize: fontSize('month') + 'vh' }">月</div>
      <div @click="changeCurrentTimeType('day')" id="day-link" :style="{ fontSize: fontSize('day') + 'vh' }">天</div>
      <div @click="changeCurrentTimeType('hour')" id="hour-link" :style="{ fontSize: fontSize('hour') + 'vh' }">时</div>
      <div @click="changeCurrentTimeType('minute')" id="minute-link" :style="{ fontSize: fontSize('minute') + 'vh' }">分</div>
    </div>
    <div id="settings" v-if="!exp" ref="settings" @click="fold">⏱</div>
  </div>
</template>

<script>
import DefaultTimeBar from './components/DefaultTimeBar';
import YearTimeBar from './components/YearTimeBar';
import MonthTimeBar from './components/MonthTimeBar';
import DayTimeBar from './components/DayTimeBar';
import HourTimeBar from './components/HourTimeBar';
import MinuteTimeBar from './components/MinuteTimeBar';

export default {
  name: 'app',
  components: {
    DefaultTimeBar,
    YearTimeBar,
    MonthTimeBar,
    DayTimeBar,
    HourTimeBar,
    MinuteTimeBar,
  },
  data() {
    return {
      exp: false,
      show: false,
      currentTab: 'default',
      initSize: 1.5,
    };
  },
  beforeCreate() {
    chrome.storage.local.get(['ctt'], res => {
      this.currentTab = res.ctt ? res.ctt : 'default';
      this.show = true;
    });
  },
  computed: {
    currentTabComponent() {
      return `${this.currentTab.toLowerCase()}-time-bar`;
    },
    currentID() {
      return this.currentTab === 'default' ? 'many-time-bar' : 'one-time-bar';
    },
  },
  methods: {
    fold() {
      if (this.exp) {
        this.$refs.abt.style.right = '120vw';
        this.$refs.abt.style.bottom = '-100vh';
        this.exp = false;
      } else {
        this.$refs.abt.style.right = 'calc(100vw - 20vh)';
        this.$refs.abt.style.bottom = '-42vh';
        this.exp = true;
      }
    },
    changeCurrentTimeType(timeType) {
      chrome.storage.local.set({ ctt: timeType });
      this.currentTab = timeType;
    },
    fontSize(timeType) {
      return timeType === this.currentTab ? this.initSize * 1.3 : this.initSize;
    },
  },
};
</script>

<style scoped>
@import 'css/base.css';
</style>
