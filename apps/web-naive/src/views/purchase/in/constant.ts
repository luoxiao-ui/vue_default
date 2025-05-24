// 单据状态
export const purchaseInStatus = [
    {
        label: '制单',
        value: 'INIT',
        type: 'processing'
    },
    {
        label: '审核',
        value: 'AUDIT',
        type: 'warning'
    },
    {
        label: '作废',
        value: 'INVALID',
        type: 'error'
    }
];
// 单据日期类型
export const purchaseInDateType = [
    {
        label: '制单日期',
        value: 'create_date'
    },
    {
        label: '审核日期',
        value: 'audit_date'
    },
    {
        label: '作废日期',
        value: 'invalid_date'
    }
];
