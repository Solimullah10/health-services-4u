import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5  container'>
            <h2 className='text-success'>i. Differences With Authorization And Authentication</h2>
            <p>
                i. Authorization: Authorization is a security mechanism used to determine user/client privileges or access levels related to system resources, including computer programs, files, services, data and application features. Authorization is normally preceded by authentication for user identity verification. System administrators (SA) are typically assigned permission levels covering all system and user resources.
                ii. Authorization determines what resources a user can access.
                iii.  the user.	Authorization isn't visible to or changeable by the user.
                iv. Authorization always takes place after authentication.


                Authentication:
                i. Authentication is the process of recognizing a user's identity. It is the mechanism of associating an incoming request with a set of identifying credentials. The credentials provided are compared to those on a file in a database of the authorized user's information on a local operating system or within an authentication serve.
                ii. Authentication verifies who the user is.
                iii. Authentication is visible to and partially changeable by the user.
                iv. Authentication is the first step of a good identity and access management process.
            </p>
            <h2 className='text-success'>ii. Why are you using firebase? What other options do you have to implement authorization</h2>
            <p>
                Firebase is a web app development platform created by Google. It lets you develop the whole app on the front-end without any server-side code.The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.

                This Other options are have to implement authorization-Attribute-based access control (ABAC)

                i. Role-based access control (RBAC)

                ii. User-based access control (UBAC)

                iii. Context-based access control (CBAC)

                iv. Rule-based access control

                Resources and roles are tightly coupled and changes to roles (such as adding, removing, or changing an access context) can impact multiple resources

                Changes to your security requirements can imply deep changes to application code to reflect these changes

                Depending on your application size, role management might become difficult and error-prone

                It is not the most flexible access control mechanism. Roles do not represent who you are and lack contextual information. If you have been granted a role, you have at least some access.
            </p>
            <h2 className='text-success'>iii. What other services does firebase provide other than authentication</h2>
            <p>
                There are many services which Firebase provides, Most useful of them are:
                i. Cloud Firestore.
                ii. Cloud Functions.
                iii. Authentication.
                iv. Hosting.
                v. Cloud Storage.
                vi. Google Analytics.
                vii. Predictions.
                viii. Cloud Messaging
                Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it.Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle your requests. Moreover, you won't be charged a penny for using this service as it's free of charge.Firebase provides authentication using email, password, and phone number using OTP, and it is also free!!!
                They charge a few bucks for OTP verification, but after ten thousand successful verifications per month. If you don't have that much user base, you are good to go with free service, and if you have more users, we believe you can pay that amount.

            </p>

        </div>
    );
};

export default Blog;