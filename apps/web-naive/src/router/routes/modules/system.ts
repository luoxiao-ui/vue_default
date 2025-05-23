import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:settings',
            order: 6,
            title: '系统设置',
        },
        name: 'setting',
        path: '/setting',
        children: [
            {
                name: 'user',
                path: '/setting/user',
                component: ()=> import('#/views/system/user/index.vue'),
                meta: {
                    title: '用户管理',
                    keepAlive: true
                },
            },
            {
                name: 'role',
                path: '/setting/role',
                component: ()=> import('#/views/system/role/index.vue'),
                meta: {
                    title: '角色管理',
                    keepAlive: true
                },
            },
            {
                name: 'valueSetting',
                path: '/setting/valueSetting',
                component: ()=> import('#/views/system/setting/index.vue'),
                meta: {
                    title: '参数配置',
                    keepAlive: true
                },
            },
        ]
    }
]

export default routes
