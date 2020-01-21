import React, { Component } from 'react';



class Testimonial extends Component {
   render() {
      if (this.props.data) {
         var testimonial = this.props.data.testimonials.map(function (tes) {
            return <li key={tes.user}>
               <blockquote>
                  <p>
                     {tes.text}
                  </p>
                  <cite>{tes.user}</cite>
               </blockquote>
            </li>
         });

      }
      return (
         <section id="testimonials">

            <div className="text-container">

               <div className="row">

                  <div className="two columns header-col">

                     <h1><span>Client Testimonials</span></h1>

                  </div>

                  <div className="ten columns flex-container">

                     {/* <div className="flexslider"> */}

                        <ul className="slides">

                        {testimonial}

                        </ul>

                     {/* </div> */}
                  </div>
               </div>
            </div>
         </section>
      );
   }

}

export default Testimonial