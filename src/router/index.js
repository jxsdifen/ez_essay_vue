import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import NotFound from '@/views/404'

import Main from '@/views/Main'
import HomeAdmin from '@/views/home/HomeAdmin'

//订单管理
import OrderMain from '@/views/order/OrderMain'
import OrderDetail from '@/views/order/OrderDetail'
import OrderAdd from '@/views/order/OrderAdd'
//会员管理
import MemberList from '@/views/member/MemberList'
//写手管理
import WriterList from '@/views/writer/WriterList'
import WriterAdd from '@/views/writer/WriterAdd'
import WriterEval from '@/views/writer/WriterEval'
import WriterLevel from '@/views/writer/WriterLevel'
import WriterStar from '@/views/writer/WriterStar'
import WriterLabel from '@/views/writer/WriterLabel'
//角色管理
import RoleList from '@/views/role/RoleList'
//营销推广
import Push from '@/views/sale/Push'
import BulkMail from '@/views/sale/BulkMail'
import Unsubscribe from '@/views/sale/Unsubscribe'
//广告发布
import AdBlock from '@/views/ad/AdBlock'
import AdCommon from '@/views/ad/AdCommon'
import AdBanner from '@/views/ad/AdBanner'
//订单要求管理
import reDraft from '@/views/require/draft'  //草稿箱
import reType from '@/views/require/type'  //类型
import reLearning from '@/views/require/learning' //学术
import reSubject from '@/views/require/subject' //科目
import rePage from '@/views/require/page' //页数
import reFormat from '@/views/require/format' //格式
import reRow from '@/views/require/row' //行距
import reResource from '@/views/require/resource' //资源数


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/', redirect: 'home'
    },
    {
      path: '/login',name: 'Login',component: Login
    },
    {
      path: '/404',name: 'NotFound',component: NotFound
    },
    {
      path: '/', component: Main,
      children: [
        { path: 'home',name: 'Home',component: HomeAdmin }
      ]
    },
    // 订单管理
    {
      path: '/', component: Main,
      children: [
        // { path: 'order/list',name: 'OrderList',component: OrderList }
        { path: 'order',component: OrderMain,
          children: [
            { path: 'detail',name: 'detail',component: OrderDetail },
            { path: 'add',name: 'addOrder',component: OrderAdd }
          ]
        }
      ]
    },
    // 会员管理
    {
      path: '/', component: Main,
      children: [
        { path: 'member/list',name: 'MemberList',component: MemberList }
      ]
    },
    // 写手管理
    {
      path: '/', component: Main,
      children: [
        { path: 'writer/list',name: 'WriterList',component: WriterList },
        { path: 'writer/add',name: 'WriterAdd',component: WriterAdd },
        // 评价
        { path: 'writer/eval',name: 'WriterEval',component: WriterEval },
        { path: 'writer/level',name: 'WriterLevel',component: WriterLevel },
        { path: 'writer/star',name: 'WriterStar',component: WriterStar },
        { path: 'writer/label',name: 'WriterLabel',component: WriterLabel }
      ]
    },
    // 角色管理
    {
      path: '/', component: Main,
      children: [
        { path: 'role/list',name: 'RoleList',component: RoleList }
      ]
    },
    // 营销推广
    {
      path: '/', component: Main,
      children: [
        { path: 'sale/push',name: 'Push',component: Push },
        { path: 'sale/bulkmail',name: 'Bulkmail',component: BulkMail },
        { path: 'sale/unsubscribe',name: 'Unsubscribe',component: Unsubscribe }
      ]
    },
    // 广告发布
    {
      path: '/', component: Main,
      children: [
        { path: 'ad/block',name: 'AdBlock',component: AdBlock },
        { path: 'ad/common',name: 'AdCommon',component: AdCommon },
        { path: 'ad/banner',name: 'AdBanner',component: AdBanner }
      ]
    },
    //订单要求管理
    {
      path: '/', component: Main,
      children: [
        { path: 'require/draft',name: 'reDraft',component: reDraft }, //草稿箱
        { path: 'require/type',name: 'reType',component: reType },  //类型
        { path: 'require/learning',name: 'reLearning',component: reLearning },  //学术
        { path: 'require/subject',name: 'reSubject',component: reSubject },  //科目

        { path: 'require/page',name: 'rePage',component: rePage },  //页数
        { path: 'require/format',name: 'reFormat',component: reFormat },  //格式
        { path: 'require/row',name: 'reRow',component: reRow },  //行距
        { path: 'require/resource',name: 'reResource',component: reResource }   //资源数
      ]
    }
  ]
})
