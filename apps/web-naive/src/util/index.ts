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
