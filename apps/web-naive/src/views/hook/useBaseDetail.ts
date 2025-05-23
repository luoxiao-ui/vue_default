import {type Ref, ref} from "vue";
import {type VbenFormProps} from "#/adapter/form";
import {useRouter} from "vue-router";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";

interface BaseDetailProps {
    searchForm: any[]
    columns: any[]
    api: {
        query: (data: any)=> Promise<any>,
        delete: (data: any)=> Promise<any>,
    },
    pathName: string
}

interface RowType {
    category: string;
    color: string;
    id: string;
    price: string;
    productName: string;
    releaseDate: string;
}

export const useBaseDetail = (props: BaseDetailProps) => {
    const {
        searchForm,
        columns,
        api,
        pathName
    } = props
    const loading = ref(false)
    const data = ref([])
    const pageConfig: Ref<{current: number,pageSize: number}> = ref({
        current: 1,
        pageSize: 50,
    })
    const router = useRouter()
    const formOptions: VbenFormProps = {
        commonConfig: {
            colon: true
        },
        wrapperClass: 'grid-cols-4',
        schema: searchForm,
        // 默认展开
        collapsed: false,
        // 控制表单是否显示折叠按钮
        showCollapseButton: false,
        // 是否在字段值改变时提交表单
        submitOnChange: false,
        // 按下回车时是否提交表单
        submitOnEnter: true,
        // 紧凑模式
        compact: true,
        // 隐藏提交按钮
        submitButtonOptions: {
            show: false
        },
    };
    const gridOptions: VxeTableGridOptions<RowType> = {
        loading: loading.value,
        columns: columns,
        data: data.value,
        pagerConfig: {
            currentPage: pageConfig.value.current,
            pageSize: pageConfig.value.pageSize,
            pageSizes: [50, 100, 200]
        },
        height: 'auto',
        keepSource: true,
        stripe: true,
        toolbarConfig: {
            custom: true,
            export: true,
            refresh: true,
            resizable: true,
            search: true,
            zoom: true,
        },
    };
    const [Grid, gradApi] = useVbenVxeGrid({
        formOptions,
        gridOptions,
        gridEvents: {
            pageChange: (pager: any)=> {
                gradApi.setGridOptions({
                    pagerConfig: {
                        currentPage: pager.currentPage,
                        pageSize: pager.pageSize,
                    }
                })
                pageConfig.value.pageSize = pager.pageSize
                pageConfig.value.current = pager.currentPage
            }
        }
    });

    // 查询
    const queryTable = async () => {
        console.log('--------pageConfig', pageConfig)
    }
    // 新增
    const addItem = async () => {
        await router.push({
            path: pathName,
            query: {
                id: -1,
            }
        })
    }
    // 删除
    const deleteItem = async (obj: any) => {
        const result = await api.delete({ ...obj })
        if(result) {}
    }
    // 更新
    const updateItem = async (obj: any) => {
        await router.push({
            path: pathName,
            query: {
                id: obj.id,
            }
        })
    }
    return {
        loading,
        formOptions,
        gridOptions,
        queryTable,
        addItem,
        deleteItem,
        updateItem,
        Grid,
    }
}
