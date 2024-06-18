import { createWebHistory, createRouter } from 'vue-router';
import TraditionalLiquorComponent from '../components/TraditionalLiquorComponent.vue';
import MainComponent from '../components/MainComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import AgreeCompnent from '../components/AgreeComponent.vue';
import BagComponent from '../components/BagComponent.vue';
import ConfirmCompnent from '../components/ConfirmComponent.vue';
import DetailedCompnent from '../components/DetailedComponent.vue';
import ExchangeCompnent from '../components/ExchangeComponent.vue';
import InfoComponent from '../components/InfoComponent.vue';
import ListTakjuComponent from '../components/ListComponent.vue';
import OrderComponent from '../components/OrderComponent.vue';
import RegistComponent from '../components/RegistComponent.vue';
import ReviewComponent from '../components/ReviewComponent.vue';
import ReviewCreateComponent from '../components/ReviewCreateComponent.vue';
import ReviewUpdateComponent from '../components/ReviewUpdateComponent.vue';
import UpdateComponent from '../components/UpdateComponent.vue';
import QnaProductComponent from '../components/QnaProductComponent.vue';
import QnaProductListComponent from '../components/QnaProductListComponent.vue';
import QnaOnebyOneListComponent from '../components/QnaOnebyOneListComponent.vue';
import QnaOneByeOneComponent from '../components/QnaOneByOneComponent.vue';
import NoticeListComponent from '../components/NoticeListComponent.vue';
import NoticeComponent from '../components/NoticeComponent.vue';
import store from './store';

const routes = [
    {
        path: '/',
        component: MainComponent,
    },
    {
        path: '/traditionalliquor',
        component: TraditionalLiquorComponent,
    },
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/agree',
        component: AgreeCompnent,
    },
    {
        path: '/bag',
        component: BagComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/confirm',
        component: ConfirmCompnent,
        beforeEnter: chkAuth,
    },
    {
        path: '/detailed',
        component: DetailedCompnent,
    },
    {
        path: '/exchange',
        component: ExchangeCompnent,
    },
    {
        path: '/info',
        component: InfoComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/qnaproduct',
        component: QnaProductComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/qnaonebyone',
        component: QnaOneByeOneComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/qnaproductlist',
        component: QnaProductListComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/qnaonebyonelist',
        component: QnaOnebyOneListComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/list',
        component: ListTakjuComponent,
    },
    {
        path: '/order',
        component: OrderComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/regist',
        component: RegistComponent,
    },
    {
        path: '/review',
        component: ReviewComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/reviewcreate',
        component: ReviewCreateComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/reviewupdate',
        component: ReviewUpdateComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/update',
        component: UpdateComponent,
        beforeEnter: chkAuth,
    },
    {
        path: '/noticelist',
        component: NoticeListComponent,
    },
    {
        path: '/notice',
        component: NoticeComponent,
    },

];

function chkAuth(to, from, next) {
    if(store.state.authFlg) {
        next();
    } else {
        alert('로그인이 필요한 서비스입니다.');
        next('/login');
    }
}

const router = createRouter({
    // 뒤로가기 했을때는 스크롤 위치 저장, 그 외는 최상단으로
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
    history: createWebHistory(),
    routes,
});

export default router;