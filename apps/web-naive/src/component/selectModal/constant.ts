import type {VxeTableGridOptions} from "@vben/plugins/vxe-table";
import type {VbenFormProps} from "@vben-core/form-ui";

export const selectOptions: {
    [key in 'drug']: {
        title: string
        gridOptions: VxeTableGridOptions<any>
        formOptions: VbenFormProps
        apiUrl: string
    };
} = {
    drug: {
        title: '选择药品',
        gridOptions: {
            minHeight: '600px',
            checkboxConfig: {
                trigger: 'row',
                range: true,
            },
            columns: [
                { field: 'name', title: '药品名称', width: 120 }
            ],
            data: [
                { name: '药品1', id: 1, bar_code: '123', spec: '1g*10粒', unit: '盒' },
                { name: '药品2', id: 2, bar_code: '2', spec: '1*10版', unit: '宝' }
            ]
        },
        formOptions: {
            showCollapseButton: false,
            wrapperClass: 'grid-cols-2',
            schema: [
                { label: '药品名称', fieldName: 'name', component: 'Input' },
            ],
        },
        apiUrl: ''
    }
}
