export const params_quote_symbol = {
    url: "/api/quote/symbol",
    params: {
        symbol: "",
    }
};

export const params_quote_query = {
    url: "/api/quote/query",
    params: {
        symbols: "",
    }
};


export const params_historical_chart = {
    url: "/api/historical-chart",
    params: {
        timeframe: "1min",
        symbol: "",
        from: "",
        to: "",
    }
};

export const params_economic_calendar = {
    url: "/api/economic/calendar",
    params: {
        from: "",
        to: "",
        country: "",
        importance: "",
    }
};


export const params_forex_list = {
    url: "/api/forex/list"
};


export const params_forex_quote = {
    url: "/api/forex/quote",
    params: {
        symbols: ""
    }
};