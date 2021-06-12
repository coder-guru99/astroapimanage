export const getUrlParams = (req) => {
    if (req && req.query) {
        return req.query;
    }
    return {};
}