import Vue from 'vue'
import Router from 'vue-router'
import GlobalComponent from '@/components/GlobalComponent'
import UseGlobalComponent from '@/components/UseGlobalComponent'
import UseExtend from '@/components/UseExtend'
import UseDirective from '@/components/UseDirective'
import Provide from '@/components/Provide/Provide'
import ProvideChild from '@/components/Provide/ProvideChild'
import UseModel from '@/components/Model/UseModel'
import MockData from '@/components/MockData'
import UseFunctionComponent from '@/components/FunctionComponent/useFunctionComponent'
import UseSlot from '@/components/UseSlot/index'
import StaticComponent from '@/components/TagInput/StaticComponent'
import InlineTagInput from '@/components/TagInput/InlineTagInput'
import UseVModel from '@/components/UseVModel/index'
import CenterDemo from '@/components/CenterDemo/index'
import StickinessFooter from '@/components/CenterDemo/StickinessFooter'
import Sticky from '@/components/Sticky/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GlobalComponent',
      component: GlobalComponent
    },
    {
      path: '/useGlobalComponent',
      name: 'UseGlobalComponent',
      component: UseGlobalComponent
    },
    {
      path: '/useExtend',
      name: 'UseExtend',
      component: UseExtend
    }, {
      path: '/useDirective',
      name: 'UseDirective',
      component: UseDirective
    }, {
      path: '/provide',
      name: 'Provide',
      component: Provide
    }, {
      path: '/provideChild',
      name: 'ProvideChild',
      component: ProvideChild
    }, {
      path: '/useModel',
      name: 'UseModel',
      component: UseModel
    }, {
      path: '/mockData',
      name: 'mockData',
      component: MockData
    }, {
      path: '/useFunctionComponent',
      name: 'useFunctionComponent',
      component: UseFunctionComponent
    }, {
      path: '/useSlot',
      name: 'useSlot',
      component: UseSlot
    }, {
      path: '/staticComponent',
      name: 'staticComponent',
      component: StaticComponent
    }, {
      path: '/useVModel',
      name: 'useVModel',
      component: UseVModel
    }, {
      path: '/inlineTagInput',
      name: 'inlineTagInput',
      component: InlineTagInput
    }, {
      path: '/centerDemo',
      name: 'centerDemo',
      component: CenterDemo
    }, {
      path: '/stickinessFooter',
      name: 'stickinessFooter',
      component: StickinessFooter
    }, {
      path: '/sticky',
      name: 'sticy',
      component: Sticky
    }, {
      path: '/paddingDom',
      name: 'paddingDom',
      component: () => import('@/components/PaddingDom')
    }, {
      path: '/splitPane',
      name: 'splitPane',
      component: () => import('@/components/SplitPane/index')
    }, {
      path: '/isComponent',
      name: 'isComponent',
      component: () => import('@/components/IsComponent')
    }, {
      path: '/listenersComponent',
      name: 'listenersComponent',
      component: () => import('@/components/ListenersComponent')
    }, {
      path: '/editTable',
      name: 'editTable',
      component: () => import('@/components/EditTable')
    }, {
      path: '/useSwiper',
      name: 'useSwiper',
      component: () => import('@/components/UseSwiper')
    }, {
      path: '/renderlessComponent',
      name: 'renderlessComponent',
      component: () => import('@/components/RenderlessComponent/UseRenderlessComponent')
    }, {
      path: '/useBaseForm',
      name: 'useBaseForm',
      component: () => import('@/components/BaseForm/UseBaseForm')
    }, {
      path: '/validatorProps',
      name: 'validatorProps',
      component: () => import('@/components/ValidatorProps')
    }, {
      path: '/bus1',
      name: 'bus1',
      component: () => import('@/components/UseBus/Bus1')
    }, {
      path: '/useEmitter',
      name: 'useEmitter',
      component: () => import('@/components/UseEmitter/Panent.vue')
    }, {
      path: '/useSync',
      name: 'useSync',
      component: () => import('@/components/UseSync')
    }, {
      path: '/useEl',
      name: 'useEl',
      component: () => import('@/components/UseElExample')
    }, {
      path: '/testAddEventListener',
      name: 'testAddEventListener',
      component: () => import('@/components/TestAddEventListener')
    }, {
      path: '/baseCascader',
      name: 'baseCascader',
      component: () => import('@/components/BaseCascader/useCascader')
    }, {
      path: '/usemixins',
      name: 'useMixins',
      component: () => import('@/components/UseMixins')
    }, {
      path: '/useVueLazyComponent',
      name: 'useVueLazyComponent',
      component: () => import('@/components/UseVueLazyComponent')
    }
  ]
})
