import types from './types';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case types.SET_QUERY:
            return update(state, {
                query: {
                    $set: payload
                }
            });

        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};

export default reducer;
