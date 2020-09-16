import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greed from './components/Greed'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import './components/mystyle.css'
import Inline from './components/Inline';
import './components/appStyle.css'
import  styles from './components/appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
      <LifeCycleA></LifeCycleA>
      {/* <Form></Form> */}
      {/* <h1 class="error">TestCSS</h1>
      <h1 class={styles.success}>TestCSS_module</h1> */}
    {/* <Inline></Inline> */}
      {/* <StyleSheet primary='true'></StyleSheet> */}
      {/* <NameList></NameList>
     <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind>
      <FunctionClick></FunctionClick>
     <Message></Message>
     <Counter></Counter>
     Danish
     <Greed name = "danish" dest="software professional">
     <p> this is danish</p>
     </Greed>
     <Greed name = "irshad" dest="software student">
       <button>
         test
       </button>
     </Greed>
     <Welcome></Welcome> */}
     
    </div>
  );
}

export default App;
