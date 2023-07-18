# REDUX
Redux is a state management library
It helps to manage the state of an application in a more organized and centralized manner
Means states are stored in this library and when we want to use the state then we can easily access from Redux store


## you can send data from parent to child and also from child to parent or between Siblings
Earlier we send the data from parent to child by using the props,useContext Api hooks 
but now we can easily share the data of parent to child 
we first store the parent data in Redux store then we use it in child component


## Work-Flow of Redux
1) Action(What to Do)
2) Reducer(How to Do)
3) Store the reducer
4) wrap the parent(index.js) in React with Provider
5) use in Any Component As you Want

# EXAMPLE OF INCREMENT/DECREMENT COUNTER
## 1) Action(what to Do)==>TWO THINGS ONE INCREMENT COUNTER AND OTHER DECREMENT COUNTER
inside src created a folder called actions inside this created file index.js

     export const incNumber=(num)=>{
       return {
          type:"INCREMENT",
          payload:num
        }
     }

    export const decNumber=()=>{
      return {
         type:"DECREMENT"
       }
    }

## 2) REDUCER (HOW TO DO)
inside src folder created a folder called reducers inside this we can write any logic(means many files as we want)
and finally combine all the files inside reducers/index.js
  
updown.js(HOW TO DO)

     const initialState=0
     const changeTheNumber=(state=initialState,action)=>{
          switch(action.type){
            case "INCREMENT" :return state+action.payload;
            case "DECREMENT" : return state-1;
            default: return state
          }
     }
     
     export default changeTheNumber

index.js(Combine all reducers)

       import changeTheNumber from "./updown";
       import {combineReducers} from "redux"
       const rootReducer=combineReducers({
           changeTheNumber
       })
     export default rootReducer;


## 3)Store the Reducers in Redux
inside src folder crete a file called store.js

store.js
       import { legacy_createStore as createStore } from 'redux';
       import rootReducer from './reducers/index';
       const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
       export default store


## 4)Wrap the parent(index.js) with Provider

       import React from 'react';
       import ReactDOM from 'react-dom/client';
       import './index.css';
       import App from './App';
       import reportWebVitals from './reportWebVitals';
     + import store from './store';
     + import { Provider } from 'react-redux';
       
       // to check redux state
     + store.subscribe(() => console.log(store.getState()));
       
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(
         <React.StrictMode>
     +     <Provider store={store}>
             <App />
           </Provider>
         </React.StrictMode>
       );
       
       // If you want to start measuring performance in your app, pass a function
       // to log results (for example: reportWebVitals(console.log))
       // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
       reportWebVitals();
       

## 5)Now you can use it in Any Component in this example we will use in App.js

       import React from 'react'
       import './App.css'
     + import { useSelector, useDispatch } from "react-redux"
     + import changeTheNumber from './reducers/updown';
     + import { incNumber, decNumber } from "./actions/index"
       
       
       const App = () => {
      +  const myState = useSelector((state) => state.changeTheNumber);
      +  const dispatch = useDispatch();
       
         return (
           <>
             <div className='container'>
               <h1>Increment/Decrement counter</h1>
               <h4>Using React-Redux</h4>
               <div className='quantity'>
         +       <div onClick={() => dispatch(decNumber())}>-</div>
         +       <input name="quantity" type="text" value={myState} />
         +       <div onClick={() => dispatch(incNumber(5))}>+</div>
               </div>
             </div>
           </>
         )
       }
       
       export default App
              
              
              