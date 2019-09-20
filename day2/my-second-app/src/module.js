import React, { Component } from 'react';

// export default class MyButton extends Component{
//     static defaultProps = {
//         disabled : false,
//         text : 'My Button'
//     }

//     render(){
//         const { disabled, text } = this.props;

//         return (
//             <button disabled={disabled}>{text}</button>
//         );
//     }

    
// }


// export default class MyComponent extends Component{
//     state = {
//         first : 'loading...',
//         second : 'loading...',
//         third : 'loading...',
//         fourth : 'loading...',
//         doneMessage : 'finished!'
//     }

//     render(){
//         const { state } = this;

//         return(
//             <ul>
//                 {Object.keys(state)
//                 .filter(key => key !== 'doneMessage')
//                 .map(key => (
//                     <li key = {key}>
//                         <strong>{key}: </strong>
//                         {state[key]}
//                     </li>
//                 ))}
//             </ul>
//         )
//     }
// }