import * as actionTypes from './actions';

const initialState = {
    id: null,
    title: "",
    category: "",
    datePosted: ""
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_TUTORIAL_BY_ID:
            // const newPerson = {
            //    id: Math.random(), // not really unique but good enough here!
            //    name: action.personData.name,
            //     age: action.personData.age
            // }
            return {
                ...state,
                tutorials: state.tutorials
            }
        case actionTypes.GET_ALL_TUTORIALS:
            return {
                ...state,
                tutorials: state.tutorials
            }
    }
    return state;
};

export default reducer;
