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
                name: 'saleOrder',
                path: '/sale/saleOrder',
                component: ()=> import('#/views/sale/saleOrder/index.vue'),
                meta: {
                    title: '批发销售单',
                    keepAlive: true
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
                name: 'saleCheck',
                path: '/sale/saleCheck',
                component: ()=> import('#/views/sale/saleCheck/index.vue'),
                meta: {
                    title: '销售复核单',
                    keepAlive: true
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
                name: 'returnIn',
                path: '/sale/returnIn',
                component: ()=> import('#/views/sale/returnIn/index.vue'),
                meta: {
                    title: '退货入库单',
                    keepAlive: true
                },
            },
        ]
    }
]

export default routes
