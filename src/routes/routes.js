import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';


const requireAuth = () => (from, to, next) => {
  var isAuthenticated= false;
  //this is just an example. You will have to find a better or 
  // centralised way to handle you localstorage data handling 
  if(localStorage.getItem('accessToken'))
    // 나중에는 여기서 서버에 접속해서 인증 보내야함.
    isAuthenticated = true;
   else
    isAuthenticated= false;
   if(isAuthenticated) 
   {
    next(); // allow to enter route
   } 
   else
   {
    next('/login'); // go to '/login';
   }
}


const routes = [
  {
    path: '/',
    redirect: 'home',
    component: DashboardLayout,
    beforeEnter : requireAuth(),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/roadmap/:roadmap_id',
        name: 'roadmap',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap.vue'),
        children : [
          {
            path : "talk",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapTalkList.vue'),
          },
          {
            path : "talk/talk_add",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapTalkAdd.vue'),
            props : true
          },
          {
            path : "talk/:talk_id",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapTalk.vue'),
            props : true
          },
          {
            path : "detail",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapDetail.vue'),
          },
          {
            path : "study",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapStudyList.vue'),
          },
          {
            path : "study/study_add",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapStudyAdd.vue'),
            props : true
          },
          {
            path : "study/:study_id",
            component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapStudy.vue'),
            props : true
          }
        ]
      },
      {
        path: '/makemap',
        name: 'makemap',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MakeRoadmap.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/mymap',
        name: 'mymap',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MyMap.vue')
      },
      {
        path: '/mystudy',
        name: 'mystudy',
        component: () => import(/* webpackChunkName: "demo" */ '../views/MyStudy.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Roadmap/RoadmapSearch.vue')
      }
      
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/loginadd',
        name: 'loginadd',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/LoginAdd.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];


export default routes;