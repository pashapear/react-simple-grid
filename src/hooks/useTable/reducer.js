import types from './types';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.EDIT_ROW: {
            const { data, config } = state;
            const { idKey } = config;
            return {
                ...state, data: data.map((item) => item[idKey] === payload[idKey] ? payload : item)
            };
        }
        case types.SET_QUERY:
            return { ...state, query: payload };

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};

export default reducer;
