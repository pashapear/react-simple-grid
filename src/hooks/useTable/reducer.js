import types from './types';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_ROW: {
            const { data } = state;
            return {
                ...state, data: [...data, payload]
            };
        }
        case types.EDIT_ROW: {
            const { data, config } = state;
            const { idKey } = config;
            return {
                ...state, data: data.map((item) => item[idKey] === payload[idKey] ? payload : item)
            };
        }
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};

export default reducer;
