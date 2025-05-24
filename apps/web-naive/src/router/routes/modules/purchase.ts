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
                name: 'purchaseOrderDetail',
                path: '/purchase/orderDetail',
                component: ()=> import('#/views/purchase/order/detail/index.vue'),
                meta: {
                    title: '采购订单详情',
                    keepAlive: true,
                    hideInMenu: true
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
                name: 'purchaseReceiveDetail',
                path: '/purchase/receiveDetail',
                component: ()=> import('#/views/purchase/receive/detail/index.vue'),
                meta: {
                    title: '采购收货单详情',
                    keepAlive: true,
                    hideInMenu: true,
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
                name: 'purchaseInDetail',
                path: '/purchase/inDetail',
                component: ()=> import('#/views/purchase/in/detail/index.vue'),
                meta: {
                    title: '采购入库单详情',
                    keepAlive: true,
                    hideInMenu: true,
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
            {
                name: 'purchaseReturnDetail',
                path: '/purchase/returnDetail',
                component: ()=> import('#/views/purchase/return/detail/index.vue'),
                meta: {
                    title: '采购退货单详情',
                    keepAlive: true,
                    hideInMenu: true,
                },
            },
        ]
    }
]

export default routes
