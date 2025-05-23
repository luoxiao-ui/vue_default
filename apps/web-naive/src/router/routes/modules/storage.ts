import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:package',
            order: 5,
            title: '库存管理',
        },
        name: 'storage',
        path: '/storage',
        children: [
            {
                name: 'storageQuery',
                path: '/sale/storageQuery',
                component: ()=> import('#/views/storage/query/index.vue'),
                meta: {
                    title: '库存查询',
                    keepAlive: true
                },
            },
            {
                name: 'storageRecord',
                path: '/sale/storageRecord',
                component: ()=> import('#/views/storage/record/index.vue'),
                meta: {
                    title: '库存进出记录',
                    keepAlive: true
                },
            },
            {
                name: 'storageAdjust',
                path: '/sale/storageAdjust',
                component: ()=> import('#/views/storage/adjust/index.vue'),
                meta: {
                    title: '库存调整',
                    keepAlive: true
                },
            },
            {
                name: 'storageCount',
                path: '/sale/storageCount',
                component: ()=> import('#/views/storage/adjust/index.vue'),
                meta: {
                    title: '库存盘点',
                    keepAlive: true
                },
            },
            {
                name: 'storageWhere',
                path: '/sale/storageWhere',
                component: ()=> import('#/views/storage/whereAdjust/index.vue'),
                meta: {
                    title: '库存归属调整',
                    keepAlive: true
                },
            },
            {
                name: 'storageTransTask',
                path: '/sale/storageTransTask',
                component: ()=> import('#/views/storage/transTask/index.vue'),
                meta: {
                    title: '转仓任务',
                    keepAlive: true
                },
            },
        ]
    }
]

export default routes
