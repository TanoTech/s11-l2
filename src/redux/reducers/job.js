import { GET_JOB } from "../actions";

const initialState = {
    jobList: [],
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOB:
            return {
                ...state,
                jobList: action.payload,
            };
        default:
            return state;
    }
};

export default jobReducer;