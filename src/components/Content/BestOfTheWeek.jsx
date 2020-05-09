import React from 'react';

const BestOfTheWeek = () => (
  <section className="best-of-the-week">
    <div className="container">
      <h1><div className="text">Best Of The Week</div>
        <div className="carousel-nav" id="best-of-the-week-nav">
          <div className="prev">
            <i className="ion-ios-arrow-left"></i>
          </div>
          <div className="next">
            <i className="ion-ios-arrow-right"></i>
          </div>
        </div>
      </h1>
      <div className="owl-carousel owl-theme carousel-1">
        <article className="article">
          <div className="inner">
            <figure>
              <a href="single.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/news/img03.jpg`} alt="Sample Article" />
              </a>
            </figure>
            <div className="padding">
              <div className="detail">
                  <div className="time">December 11, 2016</div>
                  <div className="category"><a href="category.html">Travel</a></div>
              </div>
              <h2><a href="single.html">tempor interdum Praesent tincidunt</a></h2>
              <p>Praesent tincidunt, leo vitae congue molestie.</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="inner">
            <figure>
              <a href="single.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/news/img16.jpg`} alt="Sample Article" />
              </a>
            </figure>
            <div className="padding">
              <div className="detail">
                <div className="time">December 09, 2016</div>
                <div className="category"><a href="category.html">Sport</a></div>
              </div>
              <h2><a href="single.html">Maecenas porttitor sit amet turpis a semper</a></h2>
              <p> Proin vulputate, urna id porttitor luctus, dui augue facilisis lacus.</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="inner">
            <figure>
              <a href="single.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/news/img15.jpg`} alt="Sample Article" />
              </a>
            </figure>
            <div className="padding">
              <div className="detail">
                <div className="time">December 26, 2016</div>
                <div className="category"><a href="category.html">Lifestyle</a></div>
              </div>
              <h2><a href="single.html">Fusce ac odio eu ex volutpat pellentesque</a></h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="inner">
            <figure>
              <a href="single.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/news/img14.jpg`} alt="Sample Article" />
              </a>
            </figure>
            <div className="padding">
              <div className="detail">
                <div className="time">December 26, 2016</div>
                <div className="category"><a href="category.html">Travel</a></div>
              </div>
              <h2><a href="single.html">Nulla facilisis odio quis gravida vestibulum</a></h2>
              <p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="inner">
            <figure>
              <a href="single.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/news/img01.jpg`} alt="Sample Article" />
              </a>
            </figure>
            <div className="padding">
              <div className="detail">
                <div className="time">December 26, 2016</div>
                <div className="category"><a href="category.html">Travel</a></div>
              </div>
              <h2><a href="single.html">Fusce Ullamcorper Elit At Felis Cursus Suscipit</a></h2>
              <p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
            </div>
          </div>
        </article>
        <article className="article">
          <div className="inner">
            <figure>
              <a href="single.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/news/img11.jpg`} alt="Sample Article" />
              </a>
            </figure>
            <div className="padding">
              <div className="detail">
                <div className="time">December 26, 2016</div>
                <div className="category"><a href="category.html">Travel</a></div>
              </div>
              <h2><a href="single.html">Donec consequat arcu at ultrices sodales</a></h2>
              <p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default BestOfTheWeek;