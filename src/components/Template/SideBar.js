import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link> */}
      <header>
        <h2>Anisha Singh Le Shuang</h2>
        <p>
          <a href="mailto:anishasinghleshuang.asls@gmail.com">anishasinghleshuang.asls@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Anisha. I&apos;m an engineer who enjoys exploring new tools and techniques
        to build solutions that solve real-world problems in smarter, more efficient ways.
        I believe that for technology to make a meaningful impact, it needs to be widely adopted
        — which is why I pursued a dual degree in engineering and business.
        I&apos;m driven by a desire to deeply understand the tools I work with,
        and I enjoy diving into the technical details to create solutions that are both
        innovative and practical.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
