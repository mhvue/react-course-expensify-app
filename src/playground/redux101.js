import {createStore} from "redux";

console.log("101")

//Action generators. they return action objects.
const incrementCount= ({ incrementBy = 1} = {}) =>({
        type: "INCREMENT",
        incrementBy
});

const  decrementCount = ({ decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count,
});

const setReset = () => ({
    type: "RESET"
});

//reducers
//1)reducers are pure function. the output is only deteremined by the input
    //so below is just the state and action 
//2)never change state or action 

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT" : {
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        };
        case "RESET" : {
            return {
                count: 0
            }
        };
        case "SET": {
            return {
                count: action.count
            }
        }
        default: 
        return state
    }; 
}



//createStore expects a function to be the 1st argument (which is state)
//whatever u choose to set state to, to start, that is the default state object 
const store = createStore(countReducer);

//below gets called to see how store changes 
store.subscribe(() => {
    console.log(store.getState())
});

//we can 'unsubscribe' or stop anywhere with subscribe.  just set it to a const and call that 
//whereever u want it to stop 
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// });
//getState returns the current object 
//console.log(store.getState())

//Actions allows us to change the redux store 
//Action is an object that gets sent to the store
//our actions for count is Incrememt, decrement, reset 

//ncrement the count. convention is to have it all in caps.
//if more than one work, we need _ ex) INCREMENT_OTHER
{
    type: "INCREMENT"
}

//we wnat to sent it to the store. we do that by dispatch ()
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });
//unsubscribe();  //if we call it here, the rest is below is ignored. the state IS still changing, but we are no longer notified 
store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch({
//     type: "INCREMENT"
// });

store.dispatch(incrementCount())

//action to decrease by 1
// store.dispatch({
//     type: "DECREMENT"
// });

//set count back to 0
store.dispatch(setReset());

store.dispatch(decrementCount());


store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch({
//     type: "SET",
//     count: 101
// })

store.dispatch(setCount({ count: -101 }))

