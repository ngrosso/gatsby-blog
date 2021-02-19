import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="nz"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div>
          <p>
            Made with &#10084;&#65039; by Nicolás Grosso thanks to <a href="https://www.netlify.com/">Netlify</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
