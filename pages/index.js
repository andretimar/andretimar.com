import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';
import PortfolioItem from '../components/PortfolioItem';

class Index extends Component {
  static async getInitialProps() {
    return null;
  }

  render() {
    return (
      <Layout>
        <main className="home">
          <div className="container">
            <section className="header">
              <h1>
                <b>Hello.</b> My name is <b>Andre Timar.</b>
                <br /> I’m an enthusiastic freelance Javascript
                <br /> developer specializing in <b>React</b> & <b>Angular</b>
              </h1>
            </section>
            <section className="portfolio">
              <h2>Featured Works</h2>
              <div className="content">
                <PortfolioItem
                  url="https://www.behance.net/gallery/78400247/TOPRUM"
                  color="#005a95"
                  image="/static/images/portfolio/portfolio-toprum"
                  name="TopRum Sky & Bar"
                  tagline="EXCLUSIVE ROOFTOP TAPAS & SKYBAR"
                />
                <PortfolioItem
                  url="https://www.behance.net/gallery/78523371/HOTEL-RUM"
                  color="#ffdebe"
                  image="/static/images/portfolio/portfolio-hotelrum"
                  name="Hotel Rum Budapest"
                  tagline="LUXURY BOUTIQUE HOTEL IN BUDAPEST"
                />
                <PortfolioItem
                  url="https://www.behance.net/gallery/78420691/320DTLA"
                  color="#fae857"
                  image="/static/images/portfolio/portfolio-320dtla"
                  name="DTLA Yoga Wear"
                  tagline="LUXURY SPORTSWEAR FROM LOS ANGELES"
                />
                <PortfolioItem
                  url="https://www.behance.net/gallery/78522457/HOTEL-COLLECT"
                  color="#b63547"
                  image="/static/images/portfolio/portfolio-hotelcollect"
                  name="Hotel Collect"
                  tagline="BOUTIQUE HOTEL IN DOWNTOWN BUDAPEST"
                />
                <PortfolioItem
                  url="https://www.behance.net/gallery/78523987/BLACK-SWAN-BAR"
                  color="#000"
                  image="/static/images/portfolio/portfolio-blackswan"
                  name="Black Swan Bar Budapest"
                  tagline="Dating Mobile Application"
                />
                <PortfolioItem
                  url="https://www.behance.net/gallery/78523699/HOUSING-BUDAPEST"
                  color="#c7e891"
                  image="/static/images/portfolio/portfolio-housingbudapest"
                  name="Housing Budapest"
                  tagline="Real Estate Agency"
                />
              </div>
            </section>
          </div>
          <section className="placeholder">
            <div className="image" />
          </section>
          <section className="about">
            <div className="container">
              <div className="left">
                <p className="greeting">Hello Everybody, I am</p>
                <h1 className="name">
                  Andre <br />
                  Timar
                </h1>
                <h2 className="title">Frontend Developer</h2>
                <p>
                  I’m a self-taught frontend Javascript developer based in
                  Budapest, Hungary with 5+ years of experience in the field.
                </p>

                <p>
                  I build clean, accessible websites using mainly React &
                  Angular but I have worked with almost all the other JS
                  frameworks out there. My clients are located all over the
                  world, and vary from individual entrepreneurs to
                  forward-thinking businesses in need of a web presence.
                </p>
                <p>
                  I live in the beautiful city of Budapest where I freelance
                  full time out of a lovely co-working office surrounded by
                  awesome creative people, and I’m always on the lookout for new
                  projects!
                </p>
              </div>
              <div className="right">
                <picture>
                  <source
                    srcSet="/static/images/andre.webp"
                    type="image/webp"
                    alt="Andre Timar"
                  />
                  <source
                    srcSet="/static/images/andre.jpg"
                    type="image/jpeg"
                    alt="Andre Timar"
                  />
                  <img src="/static/images/andre.jpg" alt="Andre Timar" />
                </picture>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default PageWrapper(Index);
