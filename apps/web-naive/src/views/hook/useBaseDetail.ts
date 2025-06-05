import {onMounted, type Ref, ref} from "vue";
import {type VbenFormProps} from "#/adapter/form";
import {useRouter} from "vue-router";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {commonFormConfig, commonGradConfig} from "#/util/constant";
// @ts-ignore
import type {FormSchema} from "@vben-core/form-ui/src/types";

interface BaseDetailProps {
    searchForm: FormSchema[]
    columns: FormSchema[]
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
    const pageConfig: Ref<{current: number,pageSize: number}> = ref({
        current: 1,
        pageSize: 50,
    })
    const router = useRouter()
    const defaultData = ref<any>({})
    const formOptions: VbenFormProps = {
        ...commonFormConfig,
        schema: searchForm,
    };
    const gridOptions: VxeTableGridOptions<RowType> = {
        ...commonGradConfig,
        columns: columns,
        pagerConfig: {
            currentPage: pageConfig.value.current,
            pageSize: pageConfig.value.pageSize,
            pageSizes: [50, 100, 200]
        },
    };
    const [Grid, gridApi] = useVbenVxeGrid({
        formOptions,
        gridOptions,
        gridEvents: {
            pageChange: (pager: any)=> {
                gridApi.setGridOptions({
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
        try {
            gridApi.setLoading(true)
            const postData = {
                pageNum: pageConfig.value.current,
                pageSize: pageConfig.value.pageSize,
                ...await gridApi.formApi.getValues(),
                ...defaultData.value
            }
            const result = await api.query(postData)
            gridApi.setLoading(false)
            if(result.code === 200) {
                gridApi.setGridOptions({
                    data: result.data
                })
            }
        } catch (e) {
            console.log('useBaseDetail init', e)
            gridApi.setLoading(false)
        }
    }
    // 新增
    const addItem = async (id: number) => {
        await router.push({
            path: pathName,
            query: {
                id,
            }
        })
    }
    // 删除
    const deleteItem = async (obj: any) => {
        try {
            const result = await api.delete({ ...obj })
            if(result.code === 200) {
                await queryTable()
            }
        } catch(e) {
            console.log('useBaseInfo deleteItem', e)
        }
    }
    // 导出
    const exportItem = async () => {}
    // 导入
    const importItem = async () => {}
    // 初始化请求
    onMounted(()=> {
        queryTable().then()
    })
    return {
        formOptions,
        gridOptions,
        queryTable,
        addItem,
        deleteItem,
        exportItem,
        importItem,
        Grid,
        gridApi,
        defaultData
    }
}
