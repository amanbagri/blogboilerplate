import React from 'react'

const Page = () => {
    return (
        <div>

            <div className="main-wrapper ">
                



                <section className="section blog-wrap bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-12 mb-5">
                                        <div className="single-blog-item">
                                            <img src="/images/blog/2.jpg" alt="" className="img-fluid rounded" />

                                            <div className="blog-item-content bg-white p-5">
                                                {/* <div className="blog-item-meta bg-gray py-1 px-2">
                                                    <span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Creativity</span>
                                                    <span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
                                                    <span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i> 28th January</span>
                                                </div> */}

                                                <h2 className="mt-3 mb-4"><a href="blog-single.html">Improve design with typography?</a></h2>
                                                <p className="lead mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus natus, consectetur? Illum libero vel nihil nisi quae, voluptatem, sapiente necessitatibus distinctio voluptates, iusto qui. Laboriosam autem, nam voluptate in beatae.</p>

                                                <h3 className="quote">A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.</h3>

                                                <p className="lead mb-4 font-weight-normal text-black">The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>

                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, rerum beatae repellat tenetur incidunt quisquam libero dolores laudantium. Nesciunt quis itaque quidem, voluptatem autem eos animi laborum iusto expedita sapiente.</p>

                                                <div className="tag-option mt-5 clearfix">
                                                    <ul className="float-left list-inline">
                                                        <li>Tags:</li>
                                                        <li className="list-inline-item"><a href="#" rel="tag">Advancher</a></li>
                                                        <li className="list-inline-item"><a href="#" rel="tag">Landscape</a></li>
                                                        <li className="list-inline-item"><a href="#" rel="tag">Travel</a></li>
                                                    </ul>

                                                    <ul className="float-right list-inline">
                                                        <li className="list-inline-item"> Share: </li>
                                                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
                                                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 mb-5">
                                        <div className="posts-nav bg-white p-5 d-lg-flex d-md-flex justify-content-between ">
                                            <a className="post-prev align-items-center" href="#">
                                                <div className="posts-prev-item mb-4 mb-lg-0">
                                                    <span className="nav-posts-desc text-color">- Previous Post</span>
                                                    <h6 className="nav-posts-title mt-1">
                                                        Donec consectetuer ligula <br />vulputate sem tristique.
                                                    </h6>
                                                </div>
                                            </a>
                                            <div className="border"></div>
                                            <a className="posts-next" href="#">
                                                <div className="posts-next-item pt-4 pt-lg-0">
                                                    <span className="nav-posts-desc text-lg-right text-md-right text-color d-block">- Next Post</span>
                                                    <h6 className="nav-posts-title mt-1">
                                                        Ut aliquam sollicitudin leo.
                                                    </h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar-wrap">
                                    <div className="sidebar-widget search card p-4 mb-3 border-0">
                                        <input type="text" className="form-control" placeholder="search" />
                                        <a href="#" className="btn btn-mian btn-small d-block mt-2">search</a>
                                    </div>

                                    <div className="sidebar-widget card border-0 mb-3">
                                        <img src="/images/blog/blog-author.jpg" alt="" className="img-fluid" />
                                        <div className="card-body p-4 text-center">
                                            <h5 className="mb-0 mt-4">Arther Conal</h5>
                                            <p>Digital Marketer</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolore.</p>

                                            <ul className="list-inline author-socials">
                                                <li className="list-inline-item mr-3">
                                                    <a href="#"><i className="fab fa-facebook-f text-muted"></i></a>
                                                </li>
                                                <li className="list-inline-item mr-3">
                                                    <a href="#"><i className="fab fa-twitter text-muted"></i></a>
                                                </li>
                                                <li className="list-inline-item mr-3">
                                                    <a href="#"><i className="fab fa-linkedin-in text-muted"></i></a>
                                                </li>
                                                <li className="list-inline-item mr-3">
                                                    <a href="#"><i className="fab fa-pinterest text-muted"></i></a>
                                                </li>
                                                <li className="list-inline-item mr-3">
                                                    <a href="#"><i className="fab fa-behance text-muted"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
                                        <h5>Latest Posts</h5>

                                        <div className="media border-bottom py-3">
                                            <a href="#"><img className="mr-4" src="/images/blog/bt-3.jpg" alt="" /></a>
                                            <div className="media-body">
                                                <h6 className="my-2"><a href="#">Thoughtful living in los Angeles</a></h6>
                                                <span className="text-sm text-muted">03 Mar 2018</span>
                                            </div>
                                        </div>

                                        <div className="media border-bottom py-3">
                                            <a href="#"><img className="mr-4" src="/images/blog/bt-2.jpg" alt="" /></a>
                                            <div className="media-body">
                                                <h6 className="my-2"><a href="#">Vivamus molestie gravida turpis.</a></h6>
                                                <span className="text-sm text-muted">03 Mar 2018</span>
                                            </div>
                                        </div>

                                        <div className="media py-3">
                                            <a href="#"><img className="mr-4" src="images/blog/bt-1.jpg" alt="" /></a>
                                            <div className="media-body">
                                                <h6 className="my-2"><a href="#">Fusce lobortis lorem at ipsum semper sagittis</a></h6>
                                                <span className="text-sm text-muted">03 Mar 2018</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
    )
}

            export default Page