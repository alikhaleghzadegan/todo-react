import React, { useState } from 'react';
import './style.css';
// import './main.js';
import profilePic from './images/profilePic.jpeg';
import logomain from './images/logomain.png';

export default () => {

  return (
    <div class="EASY">
    <body>    
    <header>        
        <div class="header">
            <div class="profile">                
                <img id="prof-pic" src={profilePic}/>
                <h3>Hello, Onur!</h3>
            </div>
        </div>          
    </header>
    <main>        
      <section id="contentpaper">        
            <img id="logomain" src={logomain}/>
            <h1>To Do List!</h1>            
        <form id="new-task-form">
            <input type="text" id="new-task-input" placeholder="What's your plan for today?"/>
            <button type="submit" id="new-task-submit"></button>
        </form>
        <div id="task-list">
            <h2>Tasks</h2>
            <hr/>
            <div id="tasks">                    
            </div>
        </div>
      </section>
    </main> 
    <script src="main.js"></script>   
    </body>
            
</div> 
  );
};
