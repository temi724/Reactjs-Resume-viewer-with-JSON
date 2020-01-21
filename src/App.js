import React, { Component } from 'react';
import $ from 'jquery';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Resume from './components/Resume'



// import './App.css';
class App extends Component{
constructor(props){
  super(props);
  this.state={
    // foo:'bar',
    resumeData:{}
  }
}

getResumedata(){
$.ajax({
url:'http://localhost:3000/resumeData.json',
dataType:'json', 
cache:false,
success:function(data){
this.setState({resumeData:data})
}.bind(this),
error:function(xhr,status,err){
  console.log(err);
  alert(err)
}
});
}

componentDidMount(){
  this.getResumedata();
}
  render() {
  // console.log(this.state.resumeData)
  
    return (
      <div className="App" >
      <Header data={this.state.resumeData.main}/>
      <About data={this.state.resumeData.main} />
      <Resume data={this.state.resumeData.resume}/>
      <Portfolio data={this.state.resumeData.portfolio}/>
      <Testimonial data={this.state.resumeData.testimonials}/>
      <Contact/>
     
      <Footer/>
     
    
    </div>
    )
  }
}


export default App
