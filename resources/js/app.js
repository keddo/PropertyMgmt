
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueRouter from 'vue-router';
import { Form, HasError, AlertError } from 'vform';
import moment from 'moment';
import VueProgressBar from 'vue-progressbar';
import swal from 'sweetalert2';



require('./bootstrap');

window.Vue = require('vue');

Vue.use(VueRouter);
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue')},
    { path: '/developers', component: require('./components/Developer.vue')},
    { path: '/users', component: require('./components/Users.vue')},
    { path: '/materials', component: require('./components/Materials.vue')},
    { path: '/profile', component: require('./components/Profile.vue')},
]

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 const router = new VueRouter({
     mode:'history',
     routes
 });


 Vue.use(VueProgressBar, {
     color: 'rgb(244, 115, 17)',
     failedColor: 'red',
     height: '2px'
 })

 window.swal = swal;
 const toast = swal.mixin({
     toast: true,
     position: 'top-end',
     showConfirmButton: false,
     timer: 3000
 })

 window.toast = toast;

 window.Fire = new Vue();


 //Adding filters in to our application using momentjs

 Vue.filter('myDate', function(created){
     return moment(created).format('MMMM Do,  YYYY');
 })
const app = new Vue({
    el: '#app',
    router
});
