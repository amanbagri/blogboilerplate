import Link from 'next/link'
import React from 'react'

const AppFooter = () => {
  return (
    <div className='mt-5'>
        <footer className="footer-39201 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md mb-4 mb-md-0">
            <h3>Store</h3>
            <ul className="list-unstyled nav-links">
              <li><Link href="/upcoming">Men</Link></li>
              <li><Link href="/upcoming">Women</Link></li>
              <li><Link href="/upcoming">Children</Link></li>
              <li><Link href="/upcoming">New Arrivals</Link></li>
              <li><Link href="/upcoming">Top Brands</Link></li>
              <li><Link href="/upcoming">Special Offers</Link></li>
            </ul>
          </div>
          <div className="col-md mb-4 mb-md-0">
            <h3>About</h3>
            <ul className="list-unstyled nav-links">
              <li><Link href="/upcoming">About us</Link></li>
              <li><Link href="/upcoming">Clients</Link></li>
              <li><Link href="/upcoming">Services</Link></li>
              <li><Link href="/upcoming">Best sellers</Link></li>
              <li><Link href="/upcoming">Blog</Link></li>
              <li><Link href="/upcoming">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md mb-4 mb-md-0">
            <h3>Legal</h3>
            <ul className="list-unstyled nav-links">
              <li><Link href="/upcoming">Terms &amp; Conditions</Link></li>
              <li><Link href="/upcoming">Privacy Policy</Link></li>
              <li><Link href="/upcoming">Legality</Link></li>
              <li><Link href="/upcoming">Author License</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>Subscribe</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor ducimus doloremque earum ullam. Architecto voluptatum odio magni.</p>
            <form action="#" className="subscribe">
                <input type="text" className="form-control" placeholder="Enter your e-mail"/>
                <input type="submit" className="btn btn-submit" value="Send" />
              </form>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12">
            <div className="border-top my-5"></div>
          </div>
          <div className="col-md-6">
            <p><small>&copy; 2019 All Rights Reserved.</small></p>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="social list-unstyled">
              <li><Link href="/upcoming"><span className="icon-facebook"></span></Link></li>
              <li><Link href="/upcoming"><span className="icon-twitter"></span></Link></li>
              <li><Link href="/upcoming"><span className="icon-pinterest"></span></Link></li>
              <li><Link href="/upcoming"><span className="icon-instagram"></span></Link></li>
              <li><Link href="/upcoming"><span className="icon-behance"></span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default AppFooter