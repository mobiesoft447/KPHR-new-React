import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>KPHR (new)</title>
        <meta property="og:title" content="KPHR (new)" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink10">
          <img
            alt="image"
            src="/cropped-kphr-logo-1500h.png"
            className="home-image10"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links1">
            <Link to="/virtual-assistants" className="home-navlink11">
              Virtual Assistants
            </Link>
            <Link to="/advisory" className="home-navlink12">
              Advisory
            </Link>
            <Link to="/consultants" className="home-navlink13">
              Consultants
            </Link>
            <Link to="/contact" className="home-navlink14">
              Contact
            </Link>
            <a href="tel:888-757-5747" className="home-link1">
              Call 888-757-KPHR
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="/cropped-kphr-logo-1500h.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links2">
              <Link to="/virtual-assistants" className="home-navlink15">
                Virtual Assistants
              </Link>
              <Link to="/advisory" className="home-navlink16">
                Advisory
              </Link>
              <Link to="/consultants" className="home-navlink17">
                Consultants
              </Link>
              <Link to="/contact" className="home-navlink18">
                Contact
              </Link>
              <a href="tel:888-757-5747" className="home-link2">
                Call 888-757-KPHR
              </a>
            </nav>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container11">
        <div className="home-container12">
          <img
            alt="image"
            src="/virtual-assistant-1-500w.jpg"
            className="home-image11"
          />
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15">
                <h1 className="home-text10">
                  <span>
                    Every company deserves great help. See how
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text12">Virtual Assistants</span>
                  <span> </span>
                  <span>can work for you.</span>
                </h1>
                <a
                  href="https://forms.fillout.com/t/8ZzEwTrmYqus"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <div className="home-container16">
                    <span className="home-text15">Get Started </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="home-icon20"
                    >
                      <path d="m14 12l-4 4V8z" fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container17"></div>
      <div className="home-container18">
        <div className="home-container19">
          <span className="home-text16">
            <span>
              A Professional Employer Organization offers the peace of mind that
            </span>
            <br></br>
            <span>
              comes with the expertise of a full-service HR department.
            </span>
          </span>
          <span className="home-text20">
            With KPHR, you get direct access to your own team of experienced
            professionals.
          </span>
        </div>
        <div className="home-container20">
          <div className="home-container21">
            <img
              alt="image"
              src="/users-cog-svgrepo-com-200h.png"
              className="home-image12"
            />
            <span className="home-text21">HR ADVISOR SERVICES</span>
            <span className="home-text22">
              <span>Navigate complex HR</span>
              <br></br>
              <span>challenges with confidence</span>
              <br></br>
              <span>using our on-demand, expert HR</span>
              <br></br>
              <span>advisory support tailored</span>
              <br></br>
              <span>to your business.</span>
            </span>
            <Link to="/advisory" className="home-navlink19">
              [Learn More]
            </Link>
          </div>
          <div className="home-container22">
            <img alt="image" src="/network-200h.png" className="home-image13" />
            <span className="home-text32">CONSULTANT PARTNERSHIP</span>
            <span className="home-text33">
              <span>Elevate your consulting</span>
              <br></br>
              <span>practice by offering our premier</span>
              <br></br>
              <span>virtual assistant services to your</span>
              <br></br>
              <span>clients, expanding your portfolio</span>
              <br></br>
              <span>and increasing client value.</span>
            </span>
            <Link to="/consultants" className="home-navlink20">
              [Learn More]
            </Link>
          </div>
          <div className="home-container23">
            <img
              alt="image"
              src="/cogwheels-200h.png"
              className="home-image14"
            />
            <span className="home-text43">VIRTUAL ASSISTANT</span>
            <span className="home-text44">
              <span>Boost your productivity</span>
              <br></br>
              <span>with our skilled virtual assistants,</span>
              <br></br>
              <span>providing tailored support for</span>
              <br></br>
              <span>your small to mid-sized</span>
              <br></br>
              <span>business needs.</span>
            </span>
            <Link to="/virtual-assistants" className="home-navlink21">
              [Learn More]
            </Link>
          </div>
        </div>
      </div>
      <div className="home-container24">
        <div className="home-container25">
          <div className="home-container26"></div>
          <span className="home-text54">ADVISORY SERVICES</span>
        </div>
      </div>
      <div className="home-container27">
        <img
          alt="image"
          src="/screenshot%202025-05-01%20070723-500w.png"
          className="home-image15"
        />
        <div className="home-container28">
          <div className="home-container29">
            <div className="home-container30">
              <h1 className="home-text55">
                Helping to create engaging, productive and profitable
                organizations
              </h1>
              <span className="home-text56">
                With our specialists, and experts at your disposal, you will
                face complex HR issues with confidence.
              </span>
              <Link to="/advisory" className="home-navlink22">
                <div className="home-container31">
                  <span className="home-text57">KNOW MORE</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon22"
                  >
                    <path d="m14 12l-4 4V8z" fill="currentColor"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container32">
        <span className="home-text58">
          <span>
            Over the years, we’ve learned a few things that have improved
          </span>
          <br></br>
          <span>overall company performance in our core area.</span>
        </span>
        <span>Let us share some of it with you:</span>
        <div className="home-container33">
          <div className="home-container34">
            <img
              alt="image"
              src="/kphr-recruitment-evaluation-200h.png"
              className="home-image16"
            />
            <span className="home-text63">Recruiting</span>
          </div>
          <div className="home-container35">
            <img
              alt="image"
              src="/kphr-shaking-hands-hr-specialist-200h.png"
              className="home-image17"
            />
            <span className="home-text64">Employer Branding</span>
          </div>
        </div>
        <div className="home-container36">
          <div className="home-container37">
            <img
              alt="image"
              src="/kphr-motivation-of-colleagues-200h.png"
              className="home-image18"
            />
            <span className="home-text65">Motivation</span>
          </div>
          <div className="home-container38">
            <img
              alt="image"
              src="/kphr-cropped-view-of-recruiter-and-employee-shaking-hands-200h.png"
              className="home-image19"
            />
            <span className="home-text66">Performance Bonuses</span>
          </div>
        </div>
        <div className="home-container39">
          <div className="home-container40">
            <img
              alt="image"
              src="/kphr-senior-man-looking-at-document-200h.png"
              className="home-image20"
            />
            <span className="home-text67">Scary Employment Handbooks</span>
          </div>
          <div className="home-container41">
            <img
              alt="image"
              src="/kphr-man-in-suit-in-corporation-200h.png"
              className="home-image21"
            />
            <span className="home-text68">Frivolous Suit</span>
          </div>
        </div>
      </div>
      <div className="home-container42">
        <div className="home-container43">
          <span className="home-text69">GET IN TOUCH</span>
          <div className="home-container44">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="home-icon24"
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
            <span className="home-text70">hello@kphr.com</span>
          </div>
          <div className="home-container45">
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              className="home-icon27"
            >
              <path
                d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                fill="currentColor"
              ></path>
            </svg>
            <span className="home-text71">888-757-5747</span>
          </div>
          <div className="home-container46">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              className="home-icon29"
            >
              <path
                d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                fill="currentColor"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="home-text72">
              <span>13300 Crossroads Pkwy N</span>
              <br></br>
              <span>City of Industry, CA 91746</span>
            </span>
          </div>
        </div>
        <div className="home-container47">
          <span className="home-text76">QUICK LINKS</span>
          <div className="home-container48">
            <Link to="/virtual-assistants" className="home-navlink23">
              Virtual Assistants
            </Link>
          </div>
          <div className="home-container49">
            <Link to="/advisory" className="home-navlink24">
              Advisory
            </Link>
          </div>
          <div className="home-container50">
            <Link to="/consultants" className="home-navlink25">
              Consultants
            </Link>
          </div>
          <div className="home-container51">
            <Link to="/contact" className="home-navlink26">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="home-container52">
        <div className="home-container53">
          <span className="home-text77">FOLLOW US</span>
          <a
            href="https://www.linkedin.com/company/kphr-kiperson-human-resources/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="home-icon31"
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
        <div className="home-container54"></div>
        <div className="home-container55">
          <div className="home-container56">
            <input
              type="text"
              placeholder="Your Email Address"
              className="home-textinput input"
            />
            <button type="button" className="home-button button">
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <div className="home-container57">
        <span>
          Results-focused human resources outsourcing services, recruiting
          services, behavioral and talent assessment tools.
        </span>
        <Link to="/" className="home-navlink27">
          <img
            alt="image"
            src="/cropped-kphr-logo-1500h.png"
            className="home-image22"
          />
        </Link>
        <span>Copyright © 2024 KPHR. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Home
