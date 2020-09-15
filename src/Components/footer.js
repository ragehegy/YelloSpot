import React, { Component } from "react";
 
class Footer extends Component {
  render() {
    return (
        <div className="copyright">
        <div className="container clearfix">
            <div className="row">
              <div className="one-third column">
                <div className="service-features">
                  <p>
                    <strong>LEBANON</strong><br />
                    <strong>Tel / Fax:</strong> + 961 9 911 467, + 961 9 911 468<br />
                      <strong>Email Address:</strong> info@YelloSpot.com<br />
                    <strong>Address:</strong> Office 31, 4th Floor, City Center Bldg.,<br />
                    New Str., Ghadir, Jounieh, <strong>Lebanon</strong>
                  </p>
                </div>               
              </div>
              <div className="one-third column">
                <div className="service-features">
                  <p>
                    <strong>EGYPT</strong><br />
                    <strong>Tel / Fax:</strong> + 20 1027333125<br />
                    <strong>Email Address:</strong> egypt@YelloSpot.com<br />
                    <strong>Address:</strong> 140B, Hadayek El Ahram, Kafr Nassar,<br />
                    Al Ahram, Giza, <strong>Egypt</strong>
                  </p>
                </div>
              </div>
              <div className="one-third column">
                <div className="service-features">
                  <p>
                    <strong>GREECE</strong><br />
                    <strong>Tel / Fax:</strong> + 30 6945352152<br />
                    <strong>Email Address:</strong> greece@YelloSpot.com<br />
                    <strong>Address:</strong> 5th Floor, Aki Miaouli 71, Piraeus, <strong>Greece</strong>
                  </p>
                </div>
              </div>  
              <hr className="border-dark" />             
            </div>
            
            <div className="container text-center my-4">
              <div className="social-icons">
                <div className="social-icon"><a href="mailto:info@yellospot.com"><i className="fa fa-lg fa-envelope"></i></a></div>
                <div className="social-icon"><a href="https://www.facebook.com/pages/YelloSpot/645947028872274?ref=hl" target="_blank" data-original-title="Facebook"><i className="fa fa-lg fa-facebook"></i></a></div>
                <div className="social-icon"><a href="https://twitter.com/YelloSpot" target="_blank" data-original-title="Twitter"><i className="fa fa-lg fa-twitter"></i></a></div>
                <div className="social-icon"><a href="https://instagram.com/yellospot/" target="_blank" data-original-title="Instagram"><i className="fa fa-lg fa-instagram"></i></a></div>
                <div className="social-icon"><a href="https://www.linkedin.com/company/yellospot?trk=biz-companies-cym" target="_blank" data-original-title="LinkedIn"><i className="fa fa-lg fa-linkedin"></i></a></div>
                <div className="social-icon"><a href="https://plus.google.com/u/0/b/107067166167165746556/107067166167165746556/" rel="publisher" target="_blank" data-original-title="Google+"><i className="fa fa-lg fa-google-plus"></i></a></div>
              </div>
            </div>
            <hr className="border-dark" />
          </div>
          <br />
          <div className="sixteen columns" align="center">
            <p align="center"><strong><a href="TermsConditions.php" target="_blank">Terms & Conditions</a>&nbsp; l &nbsp; <a href="PrivacyPolicy.php" target="_blank">Privacy Policy l &nbsp;</a> <a href="sitemap.php" target="_self">Sitemap</a></strong><br />
              2016 All Rights Reserved. YelloSpot s.a.r.l    
            </p>
          </div>
       </div>
    );
  }
}
 
export default Footer;  