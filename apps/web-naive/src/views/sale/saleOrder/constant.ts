// 批发订单单据状态
export const wholeSaleOrderStatus = [
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
export const outStatus = [
    {
        label: '待出库',
        value: 'UN_SALE',
        type: 'error',
    },
    {
        label: '出库中',
        value: 'SALE_HALF',
        type: 'warning',
    },
    {
        label: '已出库',
        value: 'ALL_SALE',
        type: 'processing',
    },
];
// 批发订单单据日期类型
export const wholeSaleOrderDateType = [
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
