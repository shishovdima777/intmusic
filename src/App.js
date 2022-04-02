import "./scss/app.scss";
import { logo } from "./assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";


function App() {
  return (
    <div className="background-img">
      <header>
        <div className="header-wrapper">
          <div className="header-child1">
            <img className="logo" src={logo} alt="intmusic logo" />
          </div>
          <nav className="header-child2">
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li className="vertical-line"></li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="main">
        <div className="main-wrapper">
          <div>
            <h1>Listening is everything</h1>
          </div>
          <div>
            <p>Millions of songs and podcasts. No credit card needed.</p>
          </div>
          <a href="#" className="main-link">
            <h2>GET INTMUSIC FREE</h2>
          </a>
        </div>
      </div>
      <footer>
        <div className="footer-parent1">
          <div className="footer-child1">
            <div className="footer-child1__elem1">
              <img className="logo" src={logo} alt="intmusic logo" />
            </div>
            <div className="footer-child1__elem2">
              <div>
                <h1>COMPANY</h1>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">For the record</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1>COMMUNITIES</h1>
                <ul>
                  <li>
                    <a href="#">For Artists</a>
                  </li>
                  <li>
                    <a href="#">Developers</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Investors</a>
                  </li>
                  <li>
                    <a href="#">Vendors</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1>USFUL LINKS</h1>
                <ul>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Web Player</a>
                  </li>
                  <li>
                    <a href="#">Free Mobil App</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-child2">
            <a href="#" className="social-button">
              <InstagramIcon className="icon" />
            </a>
            <a href="#" className="social-button">
              <TwitterIcon className="icon" />
            </a>
            <a href="#" className="social-button">
              <FacebookOutlinedIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-parent2">
          <div className="footer-child3">
            <ul>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">About Ads</a>
              </li>
            </ul>
          </div>
          <div>
            <p> &copy; Intmusic AB</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
