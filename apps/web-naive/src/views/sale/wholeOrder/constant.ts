// 批发订单单据状态
export const wholeSaleStatus = [
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
export const saleStatus = [
    {
        label: '未销售',
        value: 'UN_WHOLESALE',
        type: 'error',
    },
    {
        label: '部分销售',
        value: 'SALE_HALF',
        type: 'warning',
    },
    {
        label: '全部销售',
        value: 'ALL_SALE',
        type: 'processing',
    },
];
// 批发订单单据日期类型
export const wholeSaleDateType = [
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
