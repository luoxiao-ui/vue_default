import {onMounted, type Ref, ref} from "vue";
import {useVbenForm, type VbenFormProps} from "#/adapter/form";
import {useVbenModal} from "@vben/common-ui";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";
import {commonFormConfig, commonGradConfig} from "#/util/constant";
// @ts-ignore
import type {FormSchema} from "@vben-core/form-ui/src/types";

interface BaseInfoProps {
    searchForm: FormSchema[]
    modalForm: FormSchema[]
    columns: any[]
    api: {
        query: (data: any) => Promise<any>,
        add: (data: any) => Promise<any>,
        delete: (data: any) => Promise<any>,
        update: (data: any) => Promise<any>
    }
}

interface RowType {
    category: string;
    color: string;
    id: string;
    price: string;
    productName: string;
    releaseDate: string;
}

export const useBaseInfo = (props: BaseInfoProps) => {
    const {
        searchForm,
        modalForm,
        columns,
        api
    } = props
    const pageConfig: Ref<{ current: number, pageSize: number }> = ref({
        current: 1,
        pageSize: 50,
    })
    const title = ref<string>('新增');
    const [BaseForm, formApi] = useVbenForm({
        ...commonFormConfig,
        wrapperClass: 'grid-cols-1',
        schema: modalForm,
    })
    const [Modal, modalApi] = useVbenModal({
        centered: true,
        onConfirm: async () => {
            formApi.validate().then(async (res) => {
                if (res.valid) {
                    formApi.getValues().then(async (res) => {
                        let result
                        if (!res.id) {
                            result = await api.add({...res})
                        } else {
                            result = await api.update({...res})
                        }
                        if (result.code === 200) {
                            await init()
                        }
                    })
                }
            })
        }
    });
    const formOptions: VbenFormProps = {
        ...commonFormConfig,
        schema: searchForm,
    }
    const gridOptions: VxeTableGridOptions<RowType> = {
        ...commonGradConfig,
        columns: columns,
        pagerConfig: {
            currentPage: pageConfig.value.current,
            pageSize: pageConfig.value.pageSize,
            pageSizes: [50, 100, 200]
        },
    };
    const [Grid, gradApi] = useVbenVxeGrid({
        formOptions,
        gridOptions,
        gridEvents: {
            pageChange: (pager: any) => {
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
        await init()
    }
    // 新增
    const addItem = async () => {
        title.value = '新增'
        modalApi.open()
    }
    // 删除
    const deleteItem = async (obj: any) => {
        try {
            const result = await api.delete({...obj})
            if (result.code === 200) {
                await init()
            }
        } catch (e) {
            console.log('useBaseInfo deleteItem', e)
        }
    }
    // 更新
    const updateItem = async (obj: any) => {
        title.value = '更新'
        modalApi.open()
        await formApi.setValues(obj)
    }
    const init = async () => {
        try {
            gradApi.setLoading(true)
            const postData = {
                pageNum: pageConfig.value.current,
                pageSize: pageConfig.value.pageSize,
                ...await gradApi.formApi.getValues()
            }
            const result = await api.query(postData)
            gradApi.setLoading(false)
            if (result.code === 200) {
                gradApi.setGridOptions({
                    data: result.data
                })
            }
        } catch (e) {
            console.log('useBaseInfo init', e)
            gradApi.setLoading(false)
        }
    }
    // 初始化请求
    onMounted(() => {
        init().then()
    })
    return {
        BaseForm,
        formApi,
        Modal,
        modalApi,
        formOptions,
        gridOptions,
        queryTable,
        addItem,
        deleteItem,
        updateItem,
        title,
        Grid,
    }
}
