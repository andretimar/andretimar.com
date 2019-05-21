import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import normalize from 'normalize.css/normalize.css';
import stylesheet from '../src/css/style.scss';

const Header = () => (
  <React.Fragment>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-140629880-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-140629880-1');`,
        }}
      />

      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: normalize }}
      />
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta
        name="description"
        content="Hello. My name is Andre Timar.
              I’m an enthusiastic freelance Javascript
              developer specializing in React & Angular"
      />

      <title>Freelance React & Angular Developer - Andre Timar</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/images/favicon.ico"
      />
    </Head>
    <div className="container">
      <nav className="navbar">
        <div className="left">
          <Link href="/">
            <a className="logo">A</a>
          </Link>
        </div>
        <div className="right">
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </nav>
    </div>
  </React.Fragment>
);

export default Header;
