import profileBgImg from "../assets/img/profile/profile-bg-5.webp";
import profileSquareImg from "../assets/img/profile/profile-square-3.webp";
import portfolio1 from "../assets/img/portfolio/portfolio-1.webp";
import portfolio2 from "../assets/img/portfolio/portfolio-2.webp";
import portfolio3 from "../assets/img/portfolio/portfolio-3.webp";
import portfolio4 from "../assets/img/portfolio/portfolio-4.webp";
import portfolio5 from "../assets/img/portfolio/portfolio-5.webp";
import portfolio6 from "../assets/img/portfolio/portfolio-6.webp";

function About() {
  return (
    
  <main className="main">
    <section id="home" className="hero section dark-background">

      <img src={profileBgImg} alt="Profile Backgroud" data-aos="fade-in"/>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Hi, I'm Alex Morgan</h2>
            <p>I'm a <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span><span className="typed-cursor" aria-hidden="true"></span></p>
            <div className="social-links">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="about" className="about section">

      
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">About Me</span>
        <h2>About Me</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img src={profileSquareImg} className="img-fluid" alt="Profile Square Image"/>
                  <div className="status-indicator"></div>
                </div>
                <h3>Jordan Mitchell</h3>
                <span className="role">Full Stack Developer</span>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                  <span>4.8</span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <h4>156</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h4>8+</h4>
                  <p>Years</p>
                </div>
                <div className="stat-item">
                  <h4>42</h4>
                  <p>Awards</p>
                </div>
              </div>

              <div className="profile-actions">
                <a href="#" className="btn-primary"><i className="bi bi-download"></i> Download CV</a>
                <a href="#" className="btn-secondary"><i className="bi bi-envelope"></i> Contact</a>
              </div>

              <div className="social-connect">
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-github"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="content-wrapper">
              <div className="bio-section">
                <div className="section-tag">About Me</div>
                <h2>Transforming Ideas into Digital Reality</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              </div>

              <div className="details-grid">
                <div className="detail-item" data-aos="fade-up" data-aos-delay="250">
                  <i className="bi bi-briefcase"></i>
                  <div className="detail-content">
                    <span>Experience</span>
                    <strong>8+ Years</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-mortarboard"></i>
                  <div className="detail-content">
                    <span>Degree</span>
                    <strong>Master of Science</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="350">
                  <i className="bi bi-geo-alt"></i>
                  <div className="detail-content">
                    <span>Based In</span>
                    <strong>Portland, OR</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-envelope"></i>
                  <div className="detail-content">
                    <span>Email</span>
                    <strong>contact@example.com</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="150">
                  <i className="bi bi-phone"></i>
                  <div className="detail-content">
                    <span>Phone</span>
                    <strong>+1 (555) 234-5678</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-calendar-check"></i>
                  <div className="detail-content">
                    <span>Availability</span>
                    <strong>Open to Work</strong>
                  </div>
                </div>
              </div>

              <div className="skills-showcase" data-aos="fade-up" data-aos-delay="250">
                <div className="section-tag">Core Skills</div>
                <h3>Technical Proficiency</h3>

                <div className="skills-list skills-animation">
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">React &amp; Next.js</span>
                      <span className="skill-percent">95%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Node.js &amp; Express</span>
                      <span className="skill-percent">90%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">UI/UX &amp; Figma</span>
                      <span className="skill-percent">88%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">MongoDB &amp; PostgreSQL</span>
                      <span className="skill-percent">85%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">Docker &amp; AWS</span>
                      <span className="skill-percent">80%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

 
    <section id="resume" className="resume section">

     
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Resume</span>
        <h2>Resume</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">
          <div className="col-lg-6">
            <div className="experience-section">
              <div className="section-header" data-aos="fade-right" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Experience</span>
                  <h2>Professional Journey</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>

              <div className="experience-cards">
                <div className="exp-card featured" data-aos="zoom-in" data-aos-delay="300">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-buildings"></i>
                    </div>
                    <div className="period-badge">Current</div>
                  </div>
                  <div className="card-body">
                    <h3>Senior Creative Director</h3>
                    <p className="company-name">Digital Innovation Labs</p>
                    <span className="duration">2023 - Present</span>
                    <p className="description">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
                    <div className="skills-tags">
                      <span className="skill-tag">Leadership</span>
                      <span className="skill-tag">Strategy</span>
                      <span className="skill-tag">Innovation</span>
                    </div>
                  </div>
                </div>

                <div className="exp-card" data-aos="zoom-in" data-aos-delay="350">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-laptop"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>Product Design Lead</h3>
                    <p className="company-name">TechForward Solutions</p>
                    <span className="duration">2020 - 2023</span>
                    <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                  </div>
                </div>

                <div className="exp-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-palette"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>UX Designer</h3>
                    <p className="company-name">Creative Studio Inc</p>
                    <span className="duration">2017 - 2020</span>
                    <p className="description">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="education-section">
              <div className="section-header" data-aos="fade-left" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Education</span>
                  <h2>Academic Background</h2>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</p>
                </div>
              </div>

              <div className="education-timeline" data-aos="fade-left" data-aos-delay="300">
                <div className="timeline-track">
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2015 - 2017</span>
                        <span className="degree-level">Masters</span>
                      </div>
                      <h4>Master of Design Innovation</h4>
                      <p className="institution">Institute of Creative Arts</p>
                      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                      <div className="achievement">
                        <i className="bi bi-award"></i>
                        <span>Summa Cum Laude</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-book"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2011 - 2015</span>
                        <span className="degree-level">Bachelor</span>
                      </div>
                      <h4>Bachelor of Fine Arts</h4>
                      <p className="institution">Creative Arts University</p>
                      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-patch-check-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2016 - 2023</span>
                        <span className="degree-level">Certificates</span>
                      </div>
                      <h4>Professional Certifications</h4>
                      <div className="certifications-list">
                        <div className="cert-item">
                          <span className="cert-name">Advanced UX Research</span>
                          <span className="cert-year">2023</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Design Leadership</span>
                          <span className="cert-year">2022</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Digital Strategy</span>
                          <span className="cert-year">2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>


    <section id="services" className="services section">

      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Services</span>
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-palette"></i>
              </div>
              <h4>Brand Identity</h4>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus vivamus magna.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item featured">
              <div className="featured-tag">Featured</div>
              <div className="icon-wrapper">
                <i className="bi bi-layout-text-window-reverse"></i>
              </div>
              <h4>UI/UX Design</h4>
              <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui donec rutrum.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-code-slash"></i>
              </div>
              <h4>Development</h4>
              <p>Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ornare arcu.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-phone"></i>
              </div>
              <h4>Mobile Apps</h4>
              <p>Vivamus suscipit tortor eget felis porttitor volutpat quisque velit nisi pretium ut lacinia.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-megaphone"></i>
              </div>
              <h4>Digital Marketing</h4>
              <p>Nulla porttitor accumsan tincidunt curabitur aliquet quam id dui posuere blandit mauris.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-search"></i>
              </div>
              <h4>SEO Services</h4>
              <p>Pellentesque in ipsum id orci porta dapibus donec sollicitudin molestie malesuada proin.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>Analytics</h4>
              <p>Sed porttitor lectus nibh curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="icon-wrapper">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>Security</h4>
              <p>Vivamus magna justo lacinia eget consectetur sed convallis at tellus mauris blandit aliquet.</p>
              <a href="service-details.html" className="read-more">
                <span>Explore</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Transform Your Vision Into Reality</h3>
                  <p>Partner with us to bring your ideas to life with innovative solutions tailored to your needs</p>
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  <a href="service-details.html" className="cta-btn">Start Your Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    
    <section id="portfolio" className="portfolio section">

   
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Portfolio</span>
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="200">
            <li data-filter="*" className="filter-active">All Work</li>
            <li data-filter=".filter-creative">Creative</li>
            <li data-filter=".filter-digital">Digital</li>
            <li data-filter=".filter-strategy">Strategy</li>
            <li data-filter=".filter-development">Development</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-creative">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src={portfolio1} alt="Creative Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Creative Design</span>
                      <h4>Visual Identity System</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-1.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Branding</span>
                    <span className="tag">Identity</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-digital">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src={portfolio2} alt="Digital Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Digital Experience</span>
                      <h4>Interactive Web Platform</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-2.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Web Design</span>
                    <span className="tag">Development</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src={portfolio3} alt="Strategy Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Brand Strategy</span>
                      <h4>Market Positioning</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-3.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Strategy</span>
                    <span className="tag">Consulting</span>
                  </div>
                  <div className="project-year">2023</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src={portfolio4} alt="Development Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Full Stack</span>
                      <h4>Custom Application</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-4.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-creative">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src={portfolio5} alt="Creative Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Art Direction</span>
                      <h4>Campaign Design</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-5.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Creative</span>
                    <span className="tag">Campaign</span>
                  </div>
                  <div className="project-year">2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-digital">
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  <img src={portfolio6} alt="Digital Project" className="img-fluid" loading="lazy"/>
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">Digital Product</span>
                      <h4>Mobile Experience</h4>
                    </div>
                    <div className="portfolio-actions">
                      <a href="assets/img/portfolio/portfolio-6.webp" className="glightbox portfolio-link">
                        <i className="bi bi-plus-lg"></i>
                      </a>
                      <a href="#" className="portfolio-details">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-meta">
                  <div className="project-tags">
                    <span className="tag">Mobile</span>
                    <span className="tag">UI/UX</span>
                  </div>
                  <div className="project-year">2023</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="portfolio-bottom" data-aos="fade-up" data-aos-delay="400">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Like what you see?</h3>
              <p>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-accent">Let's Work Together</a>
            </div>
          </div>
        </div>

      </div>

    </section>


    <section id="contact" className="contact section">


      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Contact</span>
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>2847 Oak Street, San Francisco, CA 94102</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+1 (555) 234-5678</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p>alex@example.com</p>
              </div>
            </div>

          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>

  </main>
  );
}

export default About;
