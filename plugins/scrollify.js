import Vue from 'vue';
import $ from 'jquery';
import 'jquery-scrollify';

Vue.prototype.$scrollify = $.scrollify;

export default (context, inject) => {
  inject('scrollify', $.scrollify);
};
