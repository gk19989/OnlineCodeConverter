import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


/*function myFunction(){
  console.log("button clicked")
  console.log
}*/

class App extends React.Component {
  
  constructor(){
    super()
    this.state ={
      inputLanguage : "python",
      outputLanguage : "java",
      inputCode : "",
      outputCode : ""
    };
    this.handleClick = this.handleClick.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.outputChange = this.outputChange.bind(this)
    this.inputCodeChange = this.inputCodeChange.bind(this)
    this.outputCodeChange = this.outputCodeChange.bind(this)
    }
    
    inputChange(event)  {
      this.setState({
        inputLanguage : event.target.value
      })
    }

    outputChange(event) {
      this.setState({
        outputLanguage : event.target.value
      })
    }

    inputCodeChange(event) {
      this.setState({
        inputCode : event.target.value
      })
    }
    outputCodeChange(event) {
      this.setState({
        outputCode : event.target.value
      })
    }
    handleClick() {
        console.log("Clicked")
        console.log(this.state)
        this.setState({
          outputCode : "Converting..."
        })
        var myParams = {
          inputLanguage: this.state.inputLanguage, 
          outputLanguage: this.state.outputLanguage, 
          inputCode: this.state.inputCode
        }
        var myHeaders = new Headers({
          'Access-Control-Allow-Origin': '*'
        });
        fetch('http://2a16d49da093.ngrok.io/predict', {method : "post", body : JSON.stringify(myParams), mode:'cors',headers : myHeaders}).then(
          response => response.json()
        ).then(
         data => this.setState({ outputCode : data.code}) 
        ).catch(function(error) {
          console.log('Looks like there was a problem: \n', error);
        });
    }
  render(){
    return (
    <div className="App">
      
      <header>
        <h1 ><b>Online Code Converter</b></h1>
        <b>Convert code between C++, Java and Python &#x1F600;</b>
      </header>

      <main >
        <section class="laguageSelector">
          <div>
            <label for="in_lang"><b id="lang_b">Select Input Language</b></label>
            <select name="inp_language" id="in_lang" value={this.state.inputLanguage} onChange={this.inputChange}>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python3</option>
            </select>
          </div>
          <div>
            <label for="out_lang"><b id="lang_b">Select Output Language</b></label>
            <select name="out_language" id="out_lang" value={this.state.outputLanguage} onChange={this.outputChange}>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python3</option>
            </select>
          </div>
        </section>
        <section class="codearea">
          <div  id="inputarea">
            <textarea placeholder="Enter your code here!" value={this.state.inputCode} onChange={this.inputCodeChange}></textarea>
          </div>
          <div id="outputarea">
            <textarea  placeholder="Output will be generated here!" value={this.state.outputCode} onChange={this.outputCodeChange}></textarea>      
          </div>
        </section>
        <section id="convertarea">
          <button id="convert" onClick={this.handleClick}><b id="buttonText">CONVERT</b></button>
        </section>
      </main>
      <footer >
        {/*<h1 id="foottext"><b>Created by Mahesh Kumar Gudumala</b></h1>*/}
      </footer>
    </div>
  );
  }
  
}

export default App;


/*

 this.handleClick = this.handleClick.bind(this)*/
/*
 clang.cindex.Config.set_library_file('/usr/lib/x86_64-linux-gnu/libclang-6.0.so.1') */

 //headers : {'Access-Control-Allow-Origin': '*'}