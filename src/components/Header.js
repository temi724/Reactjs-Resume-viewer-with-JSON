import React, { Component } from 'react';



class Header extends Component {
   render() {
      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var image = 'images/' + this.props.data.image;
         var bio = this.props.data.bio;
         var city = this.props.data.address.city;
         var state = this.props.data.state;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var zip = this.props.data.address.zip;
         var resumeDownload = this.props.data.resumeDownload;
         var networks = this.props.data.social.map(function (network){
            return <li key={network.name}>
            <a href={network.url}><i className={network.className}></i></a>
         </li>
         });

      }
      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {name}.</h1>
                  <h3>I'm a {city} based <span>{occupation}</span> {description}</h3>
                  <hr />
                  <ul className="social">
                     {/* <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                     <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                     <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                     <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                     <li><a href="#"><i className="fab fa-skype"></i></a></li> */}
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }

}

export default Header