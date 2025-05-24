export const saleCheckStatus = [
    {
        label: '制单',
        value: 'INIT',
        type: 'processing',
    },
    {
        label: '审核',
        value: 'AUDIT',
        type: 'warning',
    },
    {
        label: '作废',
        value: 'INVALID',
        type: 'error',
    },
];
export const checkStatus = [
    {
        label: '待复核',
        value: 'UN_SALE',
        type: 'error',
    },
    {
        label: '复核中',
        value: 'SALE_HALF',
        type: 'warning',
    },
    {
        label: '复核完成',
        value: 'ALL_SALE',
        type: 'processing',
    },
];
// 批发订单单据日期类型
export const saleCheckDateType = [
    {
        label: '制单日期',
        value: 'create_date',
    },
    {
        label: '审核日期',
        value: 'audit_date',
    },
    {
        label: '作废日期',
        value: 'invalid_date',
    },
];
