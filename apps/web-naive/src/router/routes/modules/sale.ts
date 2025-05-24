import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:badge-japanese-yen',
            order: 4,
            title: '销售管理',
        },
        name: 'sale',
        path: '/sale',
        children: [
            {
                name: 'wholeOrder',
                path: '/sale/order',
                component: ()=> import('#/views/sale/wholeOrder/index.vue'),
                meta: {
                    title: '批发订单',
                    keepAlive: true
                },
            },
            {
                name: 'wholeOrderDetail',
                path: '/sale/orderDetail',
                component: ()=> import('#/views/sale/wholeOrder/detail/index.vue'),
                meta: {
                    title: '批发订单详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'saleOrder',
                path: '/sale/saleOrder',
                component: ()=> import('#/views/sale/saleOrder/index.vue'),
                meta: {
                    title: '批发销售单',
                    keepAlive: true
                },
            },
            {
                name: 'saleOrderDetail',
                path: '/sale/saleOrderDetail',
                component: ()=> import('#/views/sale/saleOrder/detail/index.vue'),
                meta: {
                    title: '批发销售单详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'salePick',
                path: '/sale/salePick',
                component: ()=> import('#/views/sale/salePick/index.vue'),
                meta: {
                    title: '销售拣货单',
                    keepAlive: true
                },
            },
            {
                name: 'salePickDetail',
                path: '/sale/salePickDetail',
                component: ()=> import('#/views/sale/salePick/detail/index.vue'),
                meta: {
                    title: '销售拣货单详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'saleCheck',
                path: '/sale/saleCheck',
                component: ()=> import('#/views/sale/saleCheck/index.vue'),
                meta: {
                    title: '销售复核单',
                    keepAlive: true
                },
            },
            {
                name: 'saleCheckDetail',
                path: '/sale/saleCheckDetail',
                component: ()=> import('#/views/sale/saleCheck/detail/index.vue'),
                meta: {
                    title: '销售复核单详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'saleReturn',
                path: '/sale/saleReturn',
                component: ()=> import('#/views/sale/saleReturn/index.vue'),
                meta: {
                    title: '销售退货单',
                    keepAlive: true
                },
            },
            {
                name: 'saleReturnDetail',
                path: '/sale/saleReturnDetail',
                component: ()=> import('#/views/sale/saleReturn/detail/index.vue'),
                meta: {
                    title: '销售退货单详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'returnIn',
                path: '/sale/returnIn',
                component: ()=> import('#/views/sale/returnIn/index.vue'),
                meta: {
                    title: '退货入库单',
                    keepAlive: true
                },
            },
            {
                name: 'returnInDetail',
                path: '/sale/returnInDetail',
                component: ()=> import('#/views/sale/returnIn/detail/index.vue'),
                meta: {
                    title: '退货入库单详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
        ]
    }
]

export default routes
