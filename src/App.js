import './App.css';
import MainContainer from './containers/MainContainer';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>
      <div className="div-spacer"></div>
      <div className="wrapper header-bar">

        <div className="header-with-search-container clearfix">

          <div className="site-brand__link logo-size">
            <div id="mygov-logo" aria-label="Social Security Scotland logo" className="site-brand__logo" tabIndex="0">

              <img id="mygov-logo-img" src={require('./assets/logo/social-security-scotland-logo.svg').default} alt="Social Security Scotland logo" />
            </div>
          </div>

          <span className="seperator"></span>
        </div>

      </div>

      <div className="wrapper">
        <div className="pusher"></div>
        <a aria-hidden="true" className="visually-hidden" id="focusHandler">New page.</a>
      </div>

      <main id="content" role="main">
        <div className="wrapper content-area">
          <div className="grid">
            <div className="grid__item large--eight-twelfths">
              <Router>
              <MainContainer />
              </Router>
            </div>
          </div>
        </div>
      </main>

      <div className="footer-section">
        <footer id="c" className="site-footer">
          <div className="wrapper">

            <ul className="site-items grid">

              <li className="site-items__item">
                <a className="site-items__link" href="https://www.mygov.scot/accessibility/" target="_self" title="Accessibility"
                  data-gtm="link-footer">Accessibility</a>
              </li>

              <li className="site-items__item">
                <a className="site-items__link" href="https://www.mygov.scot/contact-social-security-scotland/" target="_self"
                  title="Contact us" data-gtm="link-footer">Contact us</a>
              </li>

              <li className="site-items__item">
                <a className="site-items__link" href="https://www.mygov.scot/social-security-data/" target="_self" title="Privacy"
                  data-gtm="link-footer">Privacy</a>
              </li>

              <li className="site-items__item">
                <a className="site-items__link" href="https://www.socialsecurity.gov.scot/" target="_self"
                  title="Social Security Corporate Site" data-gtm="link-footer">Social Security Corporate Site</a>
              </li>

              <li className="site-items__item">
                <a className="site-items__link" href="https://mygov.scot/" target="_self"
                  title="Social Security Corporate Site" data-gtm="link-footer">mygov.scot</a>
              </li>

              <li className="site-items__item">
                <a className="site-items__link" href="https://gov.scot/" target="_self"
                  title="Social Security Corporate Site" data-gtm="link-footer">The Scottish Government</a>
              </li>

            </ul>

            <div className="grid">
              <div className="grid__item medium--full site-footer__summary">

                <p>mygov.scot is the place for people in Scotland to access public services that are easy to find and simple
                  to use.&nbsp;<br></br>
                </p>


              </div>
              <div className="grid__item medium--six-twelfths footer-logo">
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;
