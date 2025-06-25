import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container10">
      <Helmet>
        <title>Contact - KPHR (new)</title>
        <meta property="og:title" content="Contact - KPHR (new)" />
      </Helmet>
      <header data-thq="thq-navbar" className="contact-navbar-interactive">
        <Link to="/" className="contact-navlink10">
          <img
            alt="image"
            src="/cropped-kphr-logo-1500h.png"
            className="contact-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
          <nav className="contact-links1">
            <Link to="/virtual-assistants" className="contact-navlink11">
              Virtual Assistants
            </Link>
            <Link to="/advisory" className="contact-navlink12">
              Advisory
            </Link>
            <Link to="/consultants" className="contact-navlink13">
              Consultants
            </Link>
            <Link to="/contact" className="contact-navlink14">
              Contact
            </Link>
            <a href="tel:888-757-5747" className="contact-link1">
              Call 888-757-KPHR
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="contact-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
          <div className="contact-nav">
            <div className="contact-top">
              <img
                alt="image"
                src="/cropped-kphr-logo-1500h.png"
                className="contact-logo"
              />
              <div data-thq="thq-close-menu" className="contact-close-menu">
                <svg viewBox="0 0 1024 1024" className="contact-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="contact-links2">
              <Link to="/virtual-assistants" className="contact-navlink15">
                Virtual Assistants
              </Link>
              <Link to="/advisory" className="contact-navlink16">
                Advisory
              </Link>
              <Link to="/consultants" className="contact-navlink17">
                Consultants
              </Link>
              <Link to="/contact" className="contact-navlink18">
                Contact
              </Link>
              <a href="tel:888-757-5747" className="contact-link2">
                Call 888-757-KPHR
              </a>
            </nav>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="contact-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="contact-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="contact-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="contact-container11">
        <div className="contact-container12">
          <span className="contact-text10">CONTACT US</span>
        </div>
      </div>
      <div className="contact-container13">
        <div className="contact-container14">
          <div className="contact-container15">
            <div className="contact-container16">
              <svg
                width="50"
                height="50"
                viewBox="0 0 48 48"
                className="contact-icon20"
              >
                <path
                  d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                  fill="currentColor"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span className="contact-text11">
                <span className="contact-text12">ADDRESS</span>
                <br className="contact-text13"></br>
                <span className="contact-text14">13300 Crossroads Pkwy N</span>
                <br className="contact-text15"></br>
                <span className="contact-text16">
                  City of Industry, CA 91746
                </span>
              </span>
            </div>
            <div className="contact-container17">
              <svg
                width="50"
                height="50"
                viewBox="0 0 512 512"
                className="contact-icon22"
              >
                <path
                  d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="contact-text17">
                <span className="contact-text18">CONTACT NUMBERS</span>
                <br className="contact-text19"></br>
                <span className="contact-text20">888-757-5747</span>
              </span>
            </div>
            <div className="contact-container18">
              <svg
                width="50"
                height="50"
                viewBox="0 0 20 20"
                className="contact-icon24"
              >
                <path
                  d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z"
                  fill="currentColor"
                ></path>
                <path
                  d="M2 2a2 2 0 0 0-2 2v2l10 4l10-4V4a2 2 0 0 0-2-2z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="contact-text21">
                <span className="contact-text22">EMAIL</span>
                <br className="contact-text23"></br>
                <span>consultant@kphr.com</span>
              </span>
            </div>
          </div>
        </div>
        <div className="contact-container19">
          <div className="contact-container20">
            <span className="contact-text25">Call us or Fill the form</span>
            <div className="contact-container21">
              <span className="contact-text26">Name</span>
              <input
                type="text"
                placeholder="Name"
                className="contact-textinput1 input"
              />
            </div>
            <div className="contact-container22">
              <span className="contact-text27">Email</span>
              <input
                type="text"
                placeholder="Email"
                className="contact-textinput2 input"
              />
            </div>
            <div className="contact-container23">
              <span className="contact-text28">Message</span>
              <input
                type="text"
                placeholder="Message"
                className="contact-textinput3 input"
              />
            </div>
            <div className="contact-container24">
              <span className="contact-text29">Submit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container25">
        <iframe
          src="https://www.google.com/maps/place/13300+Crossroads+Pkwy+N,+City+of+Industry,+CA+91746,+USA/@34.030023,-118.0124921,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2d6cee3bdc707:0xc2ca818092f648d0!8m2!3d34.030023!4d-118.0099172!16s%2Fg%2F11bzz0q367?entry=ttu&amp;g_ep=EgoyMDI1MDQyOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
          className="contact-google-maps"
        ></iframe>
      </div>
      <div className="contact-container26">
        <div className="contact-container27">
          <span className="contact-text30">GET IN TOUCH</span>
          <div className="contact-container28">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="contact-icon27"
            >
              <path
                d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z"
                fill="currentColor"
              ></path>
              <path
                d="M2 2a2 2 0 0 0-2 2v2l10 4l10-4V4a2 2 0 0 0-2-2z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="contact-text31">hello@kphr.com</span>
          </div>
          <div className="contact-container29">
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              className="contact-icon30"
            >
              <path
                d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                fill="currentColor"
              ></path>
            </svg>
            <span className="contact-text32">888-757-5747</span>
          </div>
          <div className="contact-container30">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              className="contact-icon32"
            >
              <path
                d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                fill="currentColor"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="contact-text33">
              <span>13300 Crossroads Pkwy N</span>
              <br></br>
              <span>City of Industry, CA 91746</span>
            </span>
          </div>
        </div>
        <div className="contact-container31">
          <span className="contact-text37">QUICK LINKS</span>
          <div className="contact-container32">
            <Link to="/virtual-assistants" className="contact-navlink19">
              Virtual Assistants
            </Link>
          </div>
          <div className="contact-container33">
            <Link to="/advisory" className="contact-navlink20">
              Advisory
            </Link>
          </div>
          <div className="contact-container34">
            <Link to="/consultants" className="contact-navlink21">
              Consultants
            </Link>
          </div>
          <div className="contact-container35">
            <Link to="/contact" className="contact-navlink22">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-container36">
        <div className="contact-container37">
          <span className="contact-text38">FOLLOW US</span>
          <a
            href="https://www.linkedin.com/company/kphr-kiperson-human-resources/"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link3"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="contact-icon34"
            >
              <path
                d="M1 2.838A1.84 1.84 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.84 1.84 0 0 1 21.161 23H2.838A1.84 1.84 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0"
                fill="currentColor"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="contact-container38"></div>
        <div className="contact-container39">
          <div className="contact-container40">
            <input
              type="text"
              placeholder="Your Email Address"
              className="contact-textinput4 input"
            />
            <button type="button" className="contact-button button">
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <div className="contact-container41">
        <span>
          Results-focused human resources outsourcing services, recruiting
          services, behavioral and talent assessment tools.
        </span>
        <Link to="/" className="contact-navlink23">
          <img
            alt="image"
            src="/cropped-kphr-logo-1500h.png"
            className="contact-image2"
          />
        </Link>
        <span>Copyright © 2024 KPHR. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Contact
