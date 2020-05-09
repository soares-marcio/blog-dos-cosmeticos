import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="block">
            <h1 className="block-title">Company Info</h1>
            <div className="block-body">
              <figure className="foot-logo">
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo-light.png`} className="img-responsive" alt="Logo" />
              </figure>
              <p className="brand-description">
                Magz is a HTML5 &amp; CSS3 magazine template based on Bootstrap 3.
              </p>
              <a href="page.html" className="btn btn-magz white">About Us <i className="ion-ios-arrow-thin-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="block">
            <h1 className="block-title">Popular Tags <div className="right"><a href="#example">See All <i className="ion-ios-arrow-thin-right"></i></a></div></h1>
            <div className="block-body">
              <ul className="tags">
                <li><a href="#example">HTML5</a></li>
                <li><a href="#example">CSS3</a></li>
                <li><a href="#example">Bootstrap 3</a></li>
                <li><a href="#example">Web Design</a></li>
                <li><a href="#example">Creative Mind</a></li>
                <li><a href="#example">Standing On The Train</a></li>
                <li><a href="#example">at 6.00PM</a></li>
              </ul>
            </div>
          </div>
          <div className="line"></div>
          <div className="block">
            <h1 className="block-title">Newsletter</h1>
            <div className="block-body">
              <p>By subscribing you will receive new articles in your email.</p>
              <form className="newsletter">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="ion-ios-email-outline"></i>
                  </div>
                  <input type="email" className="form-control email" placeholder="Your mail" />
                </div>
                <button className="btn btn-primary btn-block white">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="block">
            <h1 className="block-title">Latest News</h1>
            <div className="block-body">
              <article className="article-mini">
                <div className="inner">
                  <figure>
                    <a href="single.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/news/img12.jpg`} alt="Sample Article" />
                    </a>
                  </figure>
                  <div className="padding">
                    <h1><a href="single.html">Donec consequat lorem quis augue pharetra</a></h1>
                  </div>
                </div>
              </article>
              <article className="article-mini">
                <div className="inner">
                  <figure>
                    <a href="single.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/news/img14.jpg`} alt="Sample Article" />
                    </a>
                  </figure>
                  <div className="padding">
                    <h1><a href="single.html">eu dapibus risus aliquam etiam ut venenatis</a></h1>
                  </div>
                </div>
              </article>
              <article className="article-mini">
                <div className="inner">
                  <figure>
                    <a href="single.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/news/img15.jpg`} alt="Sample Article" />
                    </a>
                  </figure>
                  <div className="padding">
                    <h1><a href="single.html">Nulla facilisis odio quis gravida vestibulum </a></h1>
                  </div>
                </div>
              </article>
              <article className="article-mini">
                <div className="inner">
                  <figure>
                    <a href="single.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/news/img16.jpg`} alt="Sample Article" />
                    </a>
                  </figure>
                  <div className="padding">
                    <h1><a href="single.html">Proin venenatis pellentesque arcu vitae </a></h1>
                  </div>
                </div>
              </article>
              <a href="#example" className="btn btn-magz white btn-block">See All <i className="ion-ios-arrow-thin-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12 col-sm-6">
          <div className="block">
            <h1 className="block-title">Follow Us</h1>
            <div className="block-body">
              <p>Follow us and stay in touch to get the latest news</p>
              <ul className="social trp">
                <li>
                  <a href="#example" className="facebook">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="twitter">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-twitter-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="youtube">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-youtube-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="googleplus">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-googleplus"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="instagram">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-instagram-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="tumblr">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-tumblr"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="dribbble">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="linkedin">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="skype">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="#example" className="rss">
                    <svg><rect width="0" height="0"/></svg>
                    <i className="ion-social-rss"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="line"></div>
          <div className="block">
            <div className="block-body no-margin">
              <ul className="footer-nav-horizontal">
                <li><a href="index.html">Home</a></li>
                <li><a href="#example">Partner</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="page.html">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="copyright">
            COPYRIGHT &copy; MAGZ 2017. ALL RIGHT RESERVED.
            <div>
              Made with <i className="ion-heart"></i> by <a href="http://kodinger.com">Kodinger</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;