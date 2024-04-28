import React from "react";
import { Footer, Navbar } from "../components";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Our journey starts, here in the vibrant streets of India, where every
          color, pattern, and stitch carries the weight of our heritage. But our
          vision extends far beyond that— “We start from the streets of India.
          We aim to take over the streets of the world.” Each piece of clothing
          you hold in your hands carries the legacy of our great nation's rich
          textile, craft and culture. Our mission is simple- Reclaiming Indian
          superiority. We Indians were the Kings of fashion and the textile
          industry. We were the original market leaders and trendsetters. Our
          clothes and fashion were exported all around the world. Because of its
          significance in ancient traditions, religions, and mythology, the
          lotus was chosen as the Siren of our Brand (RWDY) The quality & design
          of our products and our focus on creating a movement that reclaims our
          rich cultural supremacy with the utility and convenience of
          contemporary design have enabled us to create experiences that
          currently define and differentiate us. And this has enabled us to
          inspire a movement where fashion is no longer fast, but something that
          connects us to our roots, to our history, our people and inspire the
          world to join our rich culture- we aim to make clothes that can be
          passed onto future generations of friends and family and are pieces to
          hold and feel proud about owning. Join the movement, wear the pride,
          and make a statement. Namaste. Welcome.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row mt-5">
          <div className="col-md-4 mb-3">
            <h3>Contact Us</h3>
            <p>
              <FiMail className="h-5 w-5 inline-block mr-2" />{" "}
              <strong>Email:</strong> uyyalanitish45@gmail.com
            </p>
            <p>
              <FaPhone className="h-5 w-5 inline-block mr-2" />{" "}
              <strong>Phone:</strong> +91-7898989876
            </p>
            <p>
              <FaWhatsapp className="h-5 w-5 inline-block mr-2" />{" "}
              <strong>WhatsApp:</strong> +91-7986746546
            </p>
            <p>
              <FaInstagram className="h-5 w-5 inline-block mr-2" />{" "}
              <strong>Instagram:</strong>
              <a href="https://www.instagram.com/rwdyclub/"> RowdyWear </a>
            </p>
          </div>
          <div className="col-md-8">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61737.27442745213!2d78.69418017241685!3d14.736341405969904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37e6ef581dc8d%3A0x3c62c18f214b2add!2sMydukur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1711366597686!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

// import React from 'react'
// import { Footer, Navbar } from "../components";
// const AboutPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">About Us</h1>
//         <hr />
//         <p className="lead text-center">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//           facere doloremque veritatis odit similique sequi. Odit amet fuga nam
//           quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
//           totam vero quas provident ipsam, veritatis nostrum velit quos
//           recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
//           earum unde eligendi autem praesentium, doloremque distinctio nesciunt
//           porro tempore quis eaque labore voluptatibus ea necessitatibus
//           exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
//           tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
//           quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
//           delectus expedita a alias nam recusandae illo debitis repellat libero,
//           quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
//           dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
//         </p>

//         <h2 className="text-center py-4">Our Products</h2>
//         <div className="row">
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card h-100">
//                 <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Mens's Clothing</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card h-100">
//                 <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Women's Clothing</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card h-100">
//                 <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Jewelery</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3 col-sm-6 mb-3 px-3">
//               <div className="card h-100">
//                 <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">Electronics</h5>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default AboutPage
