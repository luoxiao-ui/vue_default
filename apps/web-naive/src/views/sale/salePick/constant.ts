export const salePickStatus = [
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
export const pickStatus = [
    {
        label: '待拣货',
        value: 'UN_SALE',
        type: 'error',
    },
    {
        label: '拣货中',
        value: 'SALE_HALF',
        type: 'warning',
    },
    {
        label: '拣货完成',
        value: 'ALL_SALE',
        type: 'processing',
    },
];
export const salePickDateType = [
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
