import Link from 'next/link'
import React from 'react'


const AppHeader = () => {
    return (
        <div className='mb-5'>
            <section className="ftco-section">
                {/* <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Title</h2>
                        </div>
                    </div>
                </div> */}
                <div className="container-fluid px-md-5">
                    <div className="row justify-content-between">
                        <div className="col-md-8 order-md-last">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                <Link href='/' className="navbar-brand" >Bolerplate <span>code</span></Link>
                                </div>
                                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                                    <form action="#" className="searchform order-lg-last">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control pl-3" placeholder="Search" />
                                            <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="social-media">
                                <p className="mb-0 d-flex">
                                    <Link href='/upcoming' className="d-flex align-items-center justify-content-center"><span className="fa-brands fa-facebook"><i className="sr-only">Facebook</i></span></Link>
                                    <Link href='/upcoming' className="d-flex align-items-center justify-content-center"><span className="fa-brands fa-twitter"><i className="sr-only">Twitter</i></span></Link>
                                    <Link href='/upcoming' className="d-flex align-items-center justify-content-center"><span className="fa-brands fa-instagram"><i className="sr-only">Instagram</i></span></Link>
                                    {/* <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa-brands fa-dribbble"><i className="sr-only">Dribbble</i></span></a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item "><Link href='/' className="nav-link">Home</Link></li>
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle "
                                     id="dropdown04" data-bs-toggle="dropdown" 
                                    aria-haspopup="true" role="button" aria-expanded="false">Page</div>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                       <li> <Link href='/upcoming' className="dropdown-item">Page 1</Link></li>
                                       <li> <Link href='/upcoming' className="dropdown-item">Page 2</Link></li>
                                       <li> <Link href='/upcoming' className="dropdown-item">Page 3</Link></li>
                                       <li> <Link href='/upcoming' className="dropdown-item">Page 4</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link href='/upcoming' className="nav-link">Work</Link></li>
                                <li className="nav-item"><Link href='/blog' className="nav-link">Blog</Link></li>
                                <li className="nav-item"><Link href='/upcoming' className="nav-link">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>



            </section>
        </div>
    )
}

export default AppHeader