import dayjs from "dayjs";

export const isTransText = (trueText: string, falseText: string) => {
    return [
        {
            label: trueText,
            value: true,
            type: 'success',
        },
        {
            label: falseText,
            value: false,
            type: 'error',
        },
    ];
};

// 公用的时间类型
export type DateRangeType =
    | 'today'
    | 'yesterday'
    | 'week'
    | 'lastWeek'
    | 'month'
    | 'lastMonth'
    | 'year';

export const getNormalTime = (dateType: DateRangeType) => {
    switch (dateType) {
        case 'today':
            return [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')];
        case 'yesterday':
            return [
                dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
                dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
            ];
        case 'week':
            return [
                dayjs().startOf('week').format('YYYY-MM-DD'),
                dayjs().format('YYYY-MM-DD'),
            ];
        case 'lastWeek':
            return [
                dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
                dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD'),
            ];
        case 'month':
            return [
                dayjs().startOf('month').format('YYYY-MM-DD'),
                dayjs().format('YYYY-MM-DD'),
            ];
        case 'lastMonth':
            return [
                dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
                dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
            ];
        case 'year':
            return [
                dayjs().startOf('year').format('YYYY-MM-DD'),
                dayjs().format('YYYY-MM-DD'),
            ];
        default:
            return [dayjs().format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')];
    }
};
