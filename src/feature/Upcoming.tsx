import Link from 'next/link'
import React from 'react'

const Upcomming = () => {
    return (
        <div className='container upcoming-container'>
                 
                    {/* <video className="bg-video" playsInline={true} autoPlay={true} muted={true} loop={true}><source src="assets/mp4/bg.mp4" type="video/mp4" /></video> */}

            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <h1 className="fst-italic lh-1 mb-4">Coming Soon</h1>
                        <p className="mb-5">We&apos;re working hard to finish the development of this page.
                         Click  below home button to go back to home page. we launch this page soon!</p>
                        {/* <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div className="row input-group-newsletter">
                                <div className="col"><input className="form-control" id="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div className="col-auto"><button className="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form> */}
                        <Link href='/'>return to home</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Upcomming