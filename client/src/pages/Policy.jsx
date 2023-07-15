import React from 'react';
import Layout from './../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <p>
            We prioritize your privacy and employ strict security measures to
            protect your personal information.
          </p>
          <p>
            We collect and use your data to process orders, provide customer
            support, and enhance our services.
          </p>
          <p>
            Your information is shared with trusted third-party service
            providers for necessary purposes only.
          </p>
          <p>We use cookies to improve your browsing experience.</p>
          <p>We comply with applicable data protection laws.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
