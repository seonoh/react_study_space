import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import {MyButton} from './module'
// import {MySection} from './module'

// ReactDOM.render(<App />, document.getElementById('root'));

//render() 함수는 JSX 마크업을 렌더링하고 결과 콘텐트를 DOM 노드에 배치한다.
//리엑트 객체는 여기서 사용되지 않고
//트랜스파일된 JSX 소스에서 사용된다.
//asd
//JSX 마크업을 렌더링한다.
//자바스크립트와 혼합된 XML 문법에 주목하자.
//브라우저에 도달하기 전에 트랜스파일러에 의해 배치된다.
// ReactDOM.render(
//     <p>Hello, <strong>JSX</strong></p>,
//     document.getElementById('root')
//   );

// ReactDOM.render(
//     <div>
//       <button />
//       <code />
//       <input />
//       <label />
//       <p />
//       <pre />
//       <select />
//       <table />
//       <ul />
//     </div>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <section>
//       <header>
//         <h1>A Header</h1>
//       </header>
//       <nav>
//         <a href="item">Nav Item</a>
//       </nav>
//       <main>
//         <p>The main content...</p>
//       </main>
//       <footer>
//         <small>&copy; 2018</small>
//       </footer>
//     </section>,
//     document.getElementById('root')
//   );

// ReactDOM.render(

//     <MySection>
//         <MyButton>My Button Text</MyButton>
//     </MySection>
//     ,document.getElementById('root')
//     );

// const enabled = false;
// const text = 'A Button';
// const placeholder = 'input value...'
// const size = 50;

// ReactDOM.render(
//     <section>
//         <button disabled={!enabled}>{text}</button>
//         <input placeholder = {placeholder} size={size}/>
//     </section>
//     ,document.getElementById('root')
// );

const array = ['First', 'Second', 'Third'];
const object = ['First', 'Second', 'Third'];

ReactDOM.render(
    (
        <section>
            <h1>
                Array
            </h1>

            <ul>
                {array.map(
                    i => (
                        <li key={i}>{i}</li>
                    )
                )}
            </ul>

            <h1>Object</h1>
            <ul>
                {Object.keys(object).map(
                    i=>(
                        <li key = {i}>
                            <strong>{i}: </strong>{object[i]}
                        </li>
                    )
                )}
            </ul>
        </section>)
        ,document.getElementById('root')
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
