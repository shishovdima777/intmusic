import "./scss/app.scss";
import { logo } from "./assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Links } from "./components";

function App() {
  const companyLinks = [
    { value: "About", href: "/about" },
    { value: "About", href: "/about" },
    { value: "Jobs", href: "/jobs" },
    { value: "For the record", href: "/fortherecord" },
  ];
  const communityLinks = [
    { value: "For Artists", href: "/forartists" },
    { value: "Developers", href: "/developers" },
    { value: "Advertising", href: "/advertising" },
    { value: "Inventors", href: "/inventors" },
    { value: "Vendors", href: "/vendors" },
  ];
  const usfulLinks = [
    { value: "Support", href: "/support" },
    { value: "Web Player", href: "/webplayer" },
    { value: "Free Mobil App", href: "/freemobilapp" },
  ];

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
                <Links items={companyLinks} />
              </div>
              <div>
                <h1>COMMUNITIES</h1>
                <Links items={communityLinks} />
              </div>
              <div>
                <h1>USFUL LINKS</h1>
                <Links items={usfulLinks} />
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
