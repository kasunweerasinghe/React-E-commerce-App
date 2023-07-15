import React from 'react';
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our e-commerce website! We're a dedicated team of
            enthusiasts, passionate about creating a seamless online shopping
            experience. Our platform was developed as part of a university
            coursework, aiming to provide you with a user-friendly and efficient
            e-commerce solution. We prioritize your satisfaction and
            convenience. With a curated selection of products from trusted
            vendors, we offer competitive prices across various categories. From
            trendy fashion to cutting-edge electronics, we've got you
            covered.Our customer service is exceptional. We've designed our
            website with an intuitive interface, making it easy to navigate and
            find what you need. Our support team is always ready to assist you,
            ensuring a hassle-free shopping experience. Your privacy and
            security matter to us. We employ industry-standard encryption and
            robust security measures to protect your personal information. Thank
            you for choosing our e-commerce platform. We continuously strive to
            enhance your experience and value your feedback. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
