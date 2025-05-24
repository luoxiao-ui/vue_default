// 日期范围
export const dateRange = [
    {
        label: '今天',
        value: 'today',
    },
    {
        label: '昨天',
        value: 'yesterday',
    },
    {
        label: '本周',
        value: 'week',
    },
    {
        label: '上周',
        value: 'lastWeek',
    },
    {
        label: '本月',
        value: 'month',
    },
    {
        label: '上月',
        value: 'lastMonth',
    },
    {
        label: '今年',
        value: 'year',
    },
];

// 固定的参数
export const commonFormConfig = {
    commonConfig: {
        colon: true
    },
    showDefaultActions: false,
    wrapperClass: 'grid-cols-4',
    // 默认展开
    collapsed: false,
    // 控制表单是否显示折叠按钮
    showCollapseButton: false,
    // 是否在字段值改变时提交表单
    submitOnChange: false,
    // 按下回车时是否提交表单
    submitOnEnter: true,
    // 紧凑模式
    compact: true,
}
export const commonGradConfig = {
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
    }
}

export const textColor: {
    [key in 'success' | 'warning' | 'error' | 'info']: string;
} = {
    success: '#63e2b7',
    warning: '#f2c97d',
    error: '#e88080',
    info: '#2080f0'
}

