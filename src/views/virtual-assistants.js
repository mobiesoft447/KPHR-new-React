import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './virtual-assistants.css'

const VirtualAssistants = (props) => {
  return (
    <div className="virtual-assistants-container10">
      <Helmet>
        <title>Virtual-Assistants - KPHR (new)</title>
        <meta property="og:title" content="Virtual-Assistants - KPHR (new)" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="virtual-assistants-navbar-interactive"
      >
        <Link to="/" className="virtual-assistants-navlink10">
          <img
            alt="image"
            src="/cropped-kphr-logo-1500h.png"
            className="virtual-assistants-image1"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          className="virtual-assistants-desktop-menu"
        >
          <nav className="virtual-assistants-links1">
            <Link
              to="/virtual-assistants"
              className="virtual-assistants-navlink11"
            >
              Virtual Assistants
            </Link>
            <Link to="/advisory" className="virtual-assistants-navlink12">
              Advisory
            </Link>
            <Link to="/consultants" className="virtual-assistants-navlink13">
              Consultants
            </Link>
            <Link to="/contact" className="virtual-assistants-navlink14">
              Contact
            </Link>
            <a href="tel:888-757-5747" className="virtual-assistants-link1">
              Call 888-757-KPHR
            </a>
          </nav>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="virtual-assistants-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="virtual-assistants-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="virtual-assistants-mobile-menu"
        >
          <div className="virtual-assistants-nav">
            <div className="virtual-assistants-top">
              <img
                alt="image"
                src="/cropped-kphr-logo-1500h.png"
                className="virtual-assistants-logo"
              />
              <div
                data-thq="thq-close-menu"
                className="virtual-assistants-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="virtual-assistants-icon12"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="virtual-assistants-links2">
              <Link
                to="/virtual-assistants"
                className="virtual-assistants-navlink15"
              >
                Virtual Assistants
              </Link>
              <Link to="/advisory" className="virtual-assistants-navlink16">
                Advisory
              </Link>
              <Link to="/consultants" className="virtual-assistants-navlink17">
                Consultants
              </Link>
              <Link to="/contact" className="virtual-assistants-navlink18">
                Contact
              </Link>
              <a href="tel:888-757-5747" className="virtual-assistants-link2">
                Call 888-757-KPHR
              </a>
            </nav>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="virtual-assistants-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="virtual-assistants-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="virtual-assistants-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="virtual-assistants-container11">
        <div className="virtual-assistants-container12">
          <div className="virtual-assistants-container13"></div>
          <span className="virtual-assistants-text100">Learn More</span>
        </div>
      </div>
      <div className="virtual-assistants-container14">
        <div className="virtual-assistants-container15">
          <div className="virtual-assistants-container16">
            <div className="virtual-assistants-container17">
              <h1 className="virtual-assistants-text101">
                Empower Your Business with KPHR Virtual Assistants
              </h1>
              <span className="virtual-assistants-text102">
                <span>
                  In today’s fast-paced business world, having the right support
                  can make all the difference. KPHR’s Virtual Assistant (VA)
                  Program is designed to give small to mid-sized businesses the
                  edge they need to thrive.
                </span>
                <br className="virtual-assistants-text104"></br>
                <br></br>
                <span className="virtual-assistants-text106">
                  Why Choose KPHR Virtual Assistants?
                </span>
                <br className="virtual-assistants-text107"></br>
                <br></br>
                <span>•</span>
                <span className="virtual-assistants-text110">
                  Tailored Support:
                </span>
                <span> Our VAs adapt to your unique business needs</span>
                <br className="virtual-assistants-text112"></br>
                <br></br>
                <span>•</span>
                <span className="virtual-assistants-text115">
                  Skilled Professionals:
                </span>
                <span> Access a pool of talented, pre-vetted assistants</span>
                <br className="virtual-assistants-text117"></br>
                <br></br>
                <span>•</span>
                <span className="virtual-assistants-text120">
                  Scalable Solutions:
                </span>
                <span>
                  {' '}
                  Easily adjust support levels as your business grows
                </span>
                <br className="virtual-assistants-text122"></br>
                <br></br>
                <span>•</span>
                <span className="virtual-assistants-text125">
                  Cost-Effective:
                </span>
                <span> Reduce overhead while increasing productivity</span>
                <br className="virtual-assistants-text127"></br>
                <br></br>
                <span>•</span>
                <span className="virtual-assistants-text130">Time-Saving:</span>
                <span>
                  {' '}
                  Focus on core business activities while we handle the rest
                </span>
                <br className="virtual-assistants-text132"></br>
                <br></br>
                <span className="virtual-assistants-text134">Our Services</span>
                <br className="virtual-assistants-text135"></br>
                <br></br>
                <span>
                  KPHR Virtual Assistants can handle a wide range of tasks,
                  including:
                </span>
                <br className="virtual-assistants-text138"></br>
                <br></br>
                <span>•</span>
                <span>Administrative Support</span>
                <br className="virtual-assistants-text142"></br>
                <br></br>
                <span>•</span>
                <span>Customer Service</span>
                <br className="virtual-assistants-text146"></br>
                <br></br>
                <span>•</span>
                <span>Data Entry and Management</span>
                <br className="virtual-assistants-text150"></br>
                <br></br>
                <span>•</span>
                <span>Social Media Management</span>
                <br className="virtual-assistants-text154"></br>
                <br></br>
                <span>•</span>
                <span>Research and Analysis</span>
                <br className="virtual-assistants-text158"></br>
                <br></br>
                <span>•</span>
                <span>Calendar and Email Management</span>
                <br className="virtual-assistants-text162"></br>
                <br></br>
                <span>•</span>
                <span>And much more!</span>
                <br className="virtual-assistants-text166"></br>
                <br></br>
                <span className="virtual-assistants-text168">How It Works</span>
                <br className="virtual-assistants-text169"></br>
                <br></br>
                <span>
                  1.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="virtual-assistants-text172">Discovery:</span>
                <span> Live chat to understand your needs and objectives</span>
                <br className="virtual-assistants-text174"></br>
                <br></br>
                <span>
                  2.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="virtual-assistants-text177">Matching:</span>
                <span>
                  {' '}
                  Search best solution that fit your criteria and needs
                </span>
                <br className="virtual-assistants-text179"></br>
                <br></br>
                <span>
                  3.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="virtual-assistants-text182">Onboarding:</span>
                <span> Your VA integrates seamlessly with team</span>
                <br className="virtual-assistants-text184"></br>
                <br></br>
                <span>4.</span>
                <span className="virtual-assistants-text187">Monitoring:</span>
                <span> We ensure work has met expectations</span>
                <br className="virtual-assistants-text189"></br>
                <br></br>
                <span>5.</span>
                <span className="virtual-assistants-text192">Support:</span>
                <span> A smooth transition and successful implementation</span>
                <br className="virtual-assistants-text194"></br>
                <br></br>
                <span className="virtual-assistants-text196">
                  Why KPHR Stands Out
                </span>
                <br className="virtual-assistants-text197"></br>
                <br></br>
                <span>
                  At KPHR, we understand that every business is unique. Our VA
                  Program is built on flexibility, quality, and reliability. We
                  pride ourselves on:
                </span>
                <br className="virtual-assistants-text200"></br>
                <br className="virtual-assistants-text201"></br>
                <br></br>
                <span>•</span>
                <span>Rigorous VA selection and training processes</span>
                <br className="virtual-assistants-text205"></br>
                <br></br>
                <span>•</span>
                <span>Comprehensive quality assurance measures</span>
                <br className="virtual-assistants-text209"></br>
                <br></br>
                <span>•</span>
                <span>
                  Dedicated account management for seamless communication
                </span>
                <br className="virtual-assistants-text213"></br>
                <br></br>
                <span>•</span>
                <span>
                  Flexible pricing models to suit businesses of all sizes
                </span>
                <br className="virtual-assistants-text217"></br>
                <br></br>
                <span className="virtual-assistants-text219">
                  Ready to Boost Your Productivity?
                </span>
                <br className="virtual-assistants-text220"></br>
                <br></br>
                <span>
                  Don’t let administrative tasks hold your business back. With
                  KPHR’s Virtual Assistant Program, you can focus on what truly
                  matters – growing your business.
                </span>
                <br className="virtual-assistants-text223"></br>
                <br></br>
              </span>
              <a
                href="https://forms.fillout.com/t/8ZzEwTrmYqus"
                target="_blank"
                rel="noreferrer noopener"
                className="virtual-assistants-link3"
              >
                <div className="virtual-assistants-container18">
                  <span className="virtual-assistants-text225">
                    GET STARTED
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="virtual-assistants-icon20"
                  >
                    <path d="m14 12l-4 4V8z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fE1FRVRJTkd8ZW58MHx8fHwxNzQ2MTM1MDk4fDA&amp;ixlib=rb-4.0.3&amp;h=1600"
            className="virtual-assistants-image2"
          />
        </div>
      </div>
      <div className="virtual-assistants-container19">
        <div className="virtual-assistants-container20">
          <span className="virtual-assistants-text226">GET IN TOUCH</span>
          <div className="virtual-assistants-container21">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="virtual-assistants-icon22"
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
            <span className="virtual-assistants-text227">hello@kphr.com</span>
          </div>
          <div className="virtual-assistants-container22">
            <svg
              width="20"
              height="20"
              viewBox="0 0 512 512"
              className="virtual-assistants-icon25"
            >
              <path
                d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                fill="currentColor"
              ></path>
            </svg>
            <span className="virtual-assistants-text228">888-757-5747</span>
          </div>
          <div className="virtual-assistants-container23">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              className="virtual-assistants-icon27"
            >
              <path
                d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                fill="currentColor"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="virtual-assistants-text229">
              <span>13300 Crossroads Pkwy N</span>
              <br></br>
              <span>City of Industry, CA 91746</span>
            </span>
          </div>
        </div>
        <div className="virtual-assistants-container24">
          <span className="virtual-assistants-text233">QUICK LINKS</span>
          <div className="virtual-assistants-container25">
            <Link
              to="/virtual-assistants"
              className="virtual-assistants-navlink19"
            >
              Virtual Assistants
            </Link>
          </div>
          <div className="virtual-assistants-container26">
            <Link to="/advisory" className="virtual-assistants-navlink20">
              Advisory
            </Link>
          </div>
          <div className="virtual-assistants-container27">
            <Link to="/consultants" className="virtual-assistants-navlink21">
              Consultants
            </Link>
          </div>
          <div className="virtual-assistants-container28">
            <Link to="/contact" className="virtual-assistants-navlink22">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="virtual-assistants-container29">
        <div className="virtual-assistants-container30">
          <span className="virtual-assistants-text234">FOLLOW US</span>
          <a
            href="https://www.linkedin.com/company/kphr-kiperson-human-resources/"
            target="_blank"
            rel="noreferrer noopener"
            className="virtual-assistants-link4"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="virtual-assistants-icon29"
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
        <div className="virtual-assistants-container31"></div>
        <div className="virtual-assistants-container32">
          <div className="virtual-assistants-container33">
            <input
              type="text"
              placeholder="Your Email Address"
              className="virtual-assistants-textinput input"
            />
            <button type="button" className="virtual-assistants-button button">
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <div className="virtual-assistants-container34">
        <span>
          Results-focused human resources outsourcing services, recruiting
          services, behavioral and talent assessment tools.
        </span>
        <Link to="/" className="virtual-assistants-navlink23">
          <img
            alt="image"
            src="/cropped-kphr-logo-1500h.png"
            className="virtual-assistants-image3"
          />
        </Link>
        <span>Copyright © 2024 KPHR. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default VirtualAssistants
