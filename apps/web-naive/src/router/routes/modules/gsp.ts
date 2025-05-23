import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:building-2',
            order: 2,
            title: 'GSP管理',
        },
        name: 'gsp',
        path: '/gsp',
        children: [
            {
                name: 'firstEnter',
                path: '/gsp/firstEnter',
                component: ()=> import('#/views/gsp/firstEnter/index.vue'),
                meta: {
                    title: '首营企业管理',
                    keepAlive: true
                },
            },
            {
                name: 'firstEnterDetail',
                path: '/gsp/firstEnterDetail',
                component: ()=> import('#/views/gsp/firstEnter/detail/index.vue'),
                meta: {
                    title: '首营企业详情',
                    keepAlive: true,
                    hideInMenu: true,
                },
            },
            {
                name: 'firstBreed',
                path: '/gsp/firstBreed',
                component: ()=> import('#/views/gsp/firstBreed/index.vue'),
                meta: {
                    title: '首营品种管理',
                    keepAlive: true
                },
            },
            {
                name: 'firstBreedDetail',
                path: '/gsp/firstBreedDetail',
                component: ()=> import('#/views/gsp/firstBreed/detail/index.vue'),
                meta: {
                    title: '首营品种详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'firstClient',
                path: '/gsp/firstClient',
                component: ()=> import('#/views/gsp/firstClient/index.vue'),
                meta: {
                    title: '首营客户管理',
                    keepAlive: true
                },
            },
            {
                name: 'firstClientDetail',
                path: '/gsp/firstClientDetail',
                component: ()=> import('#/views/gsp/firstClient/detail/index.vue'),
                meta: {
                    title: '首营客户详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'supplier',
                path: '/gsp/supplier',
                component: ()=> import('#/views/gsp/supplier/index.vue'),
                meta: {
                    title: '供应商管理',
                    keepAlive: true
                },
            },
            {
                name: 'supplierDetail',
                path: '/gsp/supplierDetail',
                component: ()=> import('#/views/gsp/supplier/detail/index.vue'),
                meta: {
                    title: '供应商详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'client',
                path: '/gsp/client',
                component: ()=> import('#/views/gsp/client/index.vue'),
                meta: {
                    title: '客户管理',
                    keepAlive: true
                },
            },
            {
                name: 'clientDetail',
                path: '/gsp/clientDetail',
                component: ()=> import('#/views/gsp/client/detail/index.vue'),
                meta: {
                    title: '客户详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
            {
                name: 'drugInfo',
                path: '/gsp/drugInfo',
                component: ()=> import('#/views/gsp/drugInfo/index.vue'),
                meta: {
                    title: '药品资料',
                    keepAlive: true
                },
            },
            {
                name: 'drugInfoDetail',
                path: '/gsp/drugInfoDetail',
                component: ()=> import('#/views/gsp/drugInfo/detail/index.vue'),
                meta: {
                    title: '药品详情',
                    keepAlive: true,
                    hideInMenu: true
                },
            },
        ]
    }
]

export default routes
