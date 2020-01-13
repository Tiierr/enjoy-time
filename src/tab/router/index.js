import Vue from 'vue';
import Router from 'vue-router';

import DefaultTimeBar from '../components/DefaultTimeBar';
import YearTimeBar from '../components/YearTimeBar';
import MonthTimeBar from '../components/MonthTimeBar';
import DayTimeBar from '../components/DayTimeBar';
import HourTimeBar from '../components/HourTimeBar';
import MinuteTimeBar from '../components/MinuteTimeBar';

Vue.use(Router);

const routes = [
  { path: '/', component: DefaultTimeBar },
  { path: '/year', component: YearTimeBar },
  { path: '/month', component: MonthTimeBar },
  { path: '/day', component: DayTimeBar },
  { path: '/hour', component: HourTimeBar },
  { path: '/minute', component: MinuteTimeBar },
];

export default new Router({
  mode: 'history',
  routes,
});
