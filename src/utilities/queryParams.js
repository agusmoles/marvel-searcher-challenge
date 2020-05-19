export const getQueryParams = (searchString) => {
    const searchParams = searchString.includes("?")
        ? searchString.split("?")[1]
        : searchString;
    let queryParams = {};

    searchParams.split("&").forEach((queryParam) => {
        const [key, value] = queryParam.split("=");

        queryParams[key] = value;
    });

    return queryParams;
};

export const parseQueryParams = (searchString) => {
    const queryParams = getQueryParams(searchString);

    if (queryParams.character) {
        queryParams["nameStartsWith"] = queryParams.character;
        delete queryParams.character;
    }

    const queryParamsString = Object.entries(queryParams)
        .map(([key, value]) => `&${key}=${value}`)
        .join("");

    return {
        queryParams: queryParams,
        queryParamsString: queryParamsString,
    };
};
