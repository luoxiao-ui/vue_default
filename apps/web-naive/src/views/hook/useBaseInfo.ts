import {type Ref, ref} from "vue";
import {useVbenForm, type VbenFormProps} from "#/adapter/form";
import {useVbenModal} from "@vben/common-ui";
import {useVbenVxeGrid, type VxeTableGridOptions} from "#/adapter/vxe-table";

interface BaseInfoProps {
    searchForm: any[]
    modalForm: any[]
    columns: any[]
    api: {
        query: (data: any)=> Promise<any>,
        add: (data: any)=> Promise<any>,
        delete: (data: any)=> Promise<any>,
        update: (data: any)=> Promise<any>
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
    const loading = ref(false)
    const data = ref([])
    const pageConfig: Ref<{current: number,pageSize: number}> = ref({
        current: 1,
        pageSize: 50,
    })
    const title = ref<string>('新增');
    const [BaseForm, formApi] = useVbenForm({
        showDefaultActions: false,
        schema: modalForm,
        commonConfig: {
            colon: true
        },
    })
    const [Modal, modalApi] = useVbenModal({
        centered: true,
        onConfirm: async () => {
            formApi.validate().then(async (res) => {
                if (res.valid) {
                    formApi.getValues().then(async (res)=> {
                        let result
                        if(title.value === '新增') {
                            result = await api.add({...res})
                        } else {
                         result = await api.update({...res})
                        }
                        console.log(result, '----result')
                    })
                }
            })
        }
    });
    const formOptions: VbenFormProps = {
        commonConfig: {
            colon: true
        },
        wrapperClass: 'grid-cols-4',
        schema: searchForm,
        // 不显示表单按钮
        showDefaultActions: false,
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
        // const result = await api.query()
    }
    // 新增
    const addItem = async () => {
        title.value = '新增'
        modalApi.open()
    }
    // 删除
    const deleteItem = async (obj: any) => {
        const result = await api.delete({ ...obj })
        if(result) {}
    }
    // 更新
    const updateItem = async (obj: any) => {
        title.value = '更新'
        modalApi.open()
        await formApi.setValues(obj)
    }
    return {
        loading,
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
