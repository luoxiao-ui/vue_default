// 基础资料

import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:archive',
            order: 1,
            title: '基础资料',
        },
        name: 'BaseInfo',
        path: '/baseInfo',
        children: [
            {
                name: 'potionManage',
                path: '/baseInfo/potionManage',
                component: ()=> import('#/views/baseInfo/potionManage/index.vue'),
                meta: {
                    title: '剂型管理',
                    keepAlive: true
                },
            },
            {
                name: 'savePlan',
                path: '/baseInfo/savePlan',
                component: ()=> import('#/views/baseInfo/savePlan/index.vue'),
                meta: {
                    title: '储存条件',
                    keepAlive: true
                },
            },
            {
                name: 'unitManage',
                path: '/baseInfo/unitManage',
                component: ()=> import('#/views/baseInfo/unitManage/index.vue'),
                meta: {
                    title: '单位管理',
                    keepAlive: true
                },
            },
            {
                name: 'featureType',
                path: '/baseInfo/featureType',
                component: ()=> import('#/views/baseInfo/featureType/index.vue'),
                meta: {
                    title: '功能分类',
                    keepAlive: true
                },
            },
            {
                name: 'returnReason',
                path: '/baseInfo/returnReason',
                component: ()=> import('#/views/baseInfo/returnReason/index.vue'),
                meta: {
                    title: '退货原因',
                    keepAlive: true
                },
            },
            {
                name: 'storageAdRson',
                path: '/baseInfo/storageAdRson',
                component: ()=> import('#/views/baseInfo/storageAdRson/index.vue'),
                meta: {
                    title: '库存调整原因',
                    keepAlive: true
                },
            },
            {
                name: 'houseManage',
                path: '/baseInfo/houseManage',
                component: ()=> import('#/views/baseInfo/houseManage/index.vue'),
                meta: {
                    title: '仓库管理',
                    keepAlive: true,
                },
            },
            {
                name: 'houseManageDetail',
                path: '/baseInfo/houseManage/detail',
                component: ()=> import('#/views/baseInfo/houseManage/detail/index.vue'),
                meta: {
                    title: '仓库管理详情',
                    hideInMenu: true,
                    keepAlive: true,
                },
            },
            {
                name: 'storageManage',
                path: '/baseInfo/storageManage',
                component: ()=> import('#/views/baseInfo/storage/index.vue'),
                meta: {
                    title: '库位管理',
                    keepAlive: true,
                },
            },
            {
                name: 'storageManageDetail',
                path: '/baseInfo/storageManage/detail',
                component: ()=> import('#/views/baseInfo/storage/detail/index.vue'),
                meta: {
                    title: '库位详情',
                    keepAlive: true,
                    hideInMenu: true,
                },
            },
        ],
    },
]

export default routes;
