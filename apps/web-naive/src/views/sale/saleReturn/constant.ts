export const saleReturnStatus = [
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
export const inStatus = [
    {
        label: '待入库',
        value: 'UN_SALE',
        type: 'error',
    },
    {
        label: '已入库',
        value: 'ALL_SALE',
        type: 'processing',
    },
];
export const saleReturnDateType = [
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
