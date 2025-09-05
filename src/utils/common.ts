export const isNumber = (value: any) => value === +value;
export const rounded = (value: any, decimal = 2, unit = '') => {
    if (!isNumber(value)) return value

    const p1 = 10 ** (decimal + 1)
    const p2 = 10 ** decimal
    const round = Math.round((value * p1) / 10) / p2
    return `${round.toFixed(decimal)}${unit}`
}

export const convert = (value: any, decimal = 2, unit = '') => {
    if (!isNumber(value)) return value

    if (Math.abs(value) >= 1000000000000) {
        value = value / 1000000000000
        return `${+rounded(value, decimal)}万亿${unit}`
    } else if (Math.abs(value) >= 100000000) {
        value = value / 100000000
        return `${+rounded(value, decimal)}亿${unit}`
    } else if (Math.abs(value) >= 10000) {
        value = value / 10000
        return `${+rounded(value, decimal)}万${unit}`
    } else {
        return `${+rounded(value, decimal)}${unit}`
    }
}

export const color = (value: any, refer = 0, defaultColor = 'unset') => {
    if (value > refer) {
        return '#f13325'
    } else if (value < refer) {
        return '#00a843'
    } else {
        return defaultColor // '#59616c'
    }
}

export const rangeCls = (change: number | string) => {
    if(typeof change === "string") {
        change = Number(change)
    }
    return change > 0 ? "!text-[#3DB57A]" : "!text-[#E75A5B]";
}

export const rangeChange = (change: number | string) => {
    if(!change) return "--"

    if(typeof change === "string") {
        change = Number(change)
    }

    let symbol: string = "";

    if (change > 0) {
        symbol = "+"
    }

    return `${symbol}${change.toFixed(2)}%`;
}


export function formatMaxFixed(num: number | string, last = 8) {
    if (typeof num !== 'number') return '-';
    const [int, dec] = num.toString().split('.');
    if (!dec) return int;
    return `${int}.${dec.slice(0, last)}`;
}

export const languageText = (lang: string) => {
    switch (lang) {
        case "zh":
            return "简体中文";
        case "en":
            return "English";
        case "ja":
            return "日本語";
        case "ko":
            return "한국어";
        default:
            return "English";
    }
}
