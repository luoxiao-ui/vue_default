import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:shopping-cart',
            order: 3,
            title: '采购管理',
        },
        name: 'purchase',
        path: '/purchase',
        children: [
            {
                name: 'purchaseOrder',
                path: '/purchase/order',
                component: ()=> import('#/views/purchase/order/index.vue'),
                meta: {
                    title: '采购订单',
                    keepAlive: true
                },
            },
            {
                name: 'purchaseReceive',
                path: '/purchase/receive',
                component: ()=> import('#/views/purchase/receive/index.vue'),
                meta: {
                    title: '采购收货单',
                    keepAlive: true
                },
            },
            {
                name: 'purchaseIn',
                path: '/purchase/in',
                component: ()=> import('#/views/purchase/in/index.vue'),
                meta: {
                    title: '采购入库单',
                    keepAlive: true
                },
            },
            {
                name: 'purchaseReturn',
                path: '/purchase/return',
                component: ()=> import('#/views/purchase/return/index.vue'),
                meta: {
                    title: '采购退货单',
                    keepAlive: true
                },
            },
        ]
    }
]

export default routes
