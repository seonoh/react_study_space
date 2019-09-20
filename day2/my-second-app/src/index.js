import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MyComponent from './module';
// import MyButton from './module';
// import { render as renderJSX } from 'react-dom';
import MyButton from './MyButton';
// import MyList from './MyList';


ReactDOM.render(
    (<MyButton/>),
    document.getElementById('root')
)
   

// const appState = {
//     text : 'My Button',
//     disabled : true,
//     items : [
//         'First',
//         'Second',
//         'Third'
//     ],
// };

// function render(props){
//     renderJSX((
//         <main>
//             <MyButton>
//                 text = {props.text}
//                 disabled = {props.disabled}
//             </MyButton>

//             <MyList items={props.items}/>
//         </main>
//     ),
//     document.getElementById('root')
//     );
// }

// render(appState);

// setTimeout(()=>{
//     appState.disabled = false;
//     appState.items.push('Fourth');

//     render(appState);
// },4000)

// ReactDOM.render(
//     (<MyButton/>),
//     document.getElementById('root')
// );

// const myComponent = ReactDOM.render(
//     (<MyComponent/>),
//     document.getElementById('root')
// );

// setTimeout(()=> {
//     myComponent.setState(
//         {
//             first : 'done!'
//         }
//     );
// },1000);

// setTimeout(()=> {
//     myComponent.setState(
//         {
//             second : 'done!'
//         }
//     );
// },2000);

// setTimeout(()=> {
//     myComponent.setState(
//         {
//             third : 'done!'
//         }
//     );
// },3000);

// setTimeout(()=> {
//     myComponent.setState(
//         {
//             fourth : myComponent.state.doneMessage
//         }
//     );
// },4000);

