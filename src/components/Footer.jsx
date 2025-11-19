import React from 'react';
import './Footer.css';
// Placeholder icons - replace with actual imports like from 'react-icons/fa'
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialIcons = [
    { name: 'Facebook', icon: 'f', link: '#' },
    { name: 'Instagram', icon: '📷', link: '#' },
    { name: 'Twitter', icon: '🐦', link: '#' },
    { name: 'LinkedIn', icon: 'in', link: '#' },
    { name: 'YouTube', icon: '▶️', link: '#' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top-section">
        
        {/* --- Branding and Follow Us (Screenshot 3) --- */}
        <div className="footer-brand-section">
          <div className="company-logo">
            <span className="logo-icon">C</span>
            <span className="logo-text">Cognition</span>
          </div>
          <p className="brand-description">
            A team of highly qualified digestive health experts in the UK with advanced lab technologies.
          </p>

          <h4>Follow Us</h4>
          <div className="social-links">
            {socialIcons.map((item) => (
              <a key={item.name} href={item.link} aria-label={item.name} className="social-icon-link">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Newsletter and Support (Screenshot 3) --- */}
        <div className="footer-contact-section">
          
          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <h4>Subscribe Our Newsletter</h4>
            <form className="newsletter-form">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
          </div>

          {/* Customer Support */}
          <div className="customer-support">
            <h4>Customer Support:</h4>
            <div className="support-details">
              <a href="mailto:admin@gi-cognition.com" className="support-link email-link">
                📧 admin@gi-cognition.com
              </a>
              <a href="tel:+442034112011" className="support-link phone-link">
                📞 +44 (0)203 411 2011
              </a>
            </div>
            <p className="working-hours">Monday – Friday 9:00 AM – 5 PM</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      
      {/* --- Legal and Providers (Screenshot 3) --- */}
      <div className="footer-bottom-section">
        
        {/* Legal/Registration Info */}
        <div className="legal-info">
          <p>
            GI Cognition Ltd, Registered in England & Wales: Company No. **12345678** | 5th Floor, The Grange, 100 High Street, Southgate, London, N14 6BN, United Kingdom
          </p>
        </div>

        {/* Financial/Brand Logos */}
        <div className="provider-payment-brands">
          
          <div className="logo-group">
            <h5>Our Accepted Insurance Providers</h5>
            <div className="logo-list provider-list">[Providers Logos]</div>
          </div>

          <div className="logo-group">
            <h5>Payment Options</h5>
            <div className="logo-list payment-list">
              <span className="payment-logo visa">Visa</span>
              <span className="payment-logo mastercard">Mastercard</span>
              {/* ... other logos */}
            </div>
          </div>

          <div className="logo-group">
            <h5>Available on</h5>
            <div className="logo-list availability-list">
              <span className="availability-logo ebay">eBay</span>
              <span className="availability-logo amazon">Amazon</span>
            </div>
          </div>

          <div className="logo-group">
            <h5>Our Brands</h5>
            <div className="logo-list brand-list">
              <span className="brand-logo online-tag">Online</span>
              <div className="green-logo-box">[Brand Logo]</div> 
            </div>
          </div>

        </div>
      </div>

      {/* --- Regulatory Section (Screenshot 4) --- */}
      <div className="regulatory-section">
        
        {/* CQC Section */}
        <div className="cqc-block">
          <div className="cqc-logo"></div>
          <p>
            **GIC is regulated by the Care Quality Commission** (<a href="#" className="learn-more">Learn More</a>). It is illegal to provide healthcare services without a license from the CQC. If you encounter unlicensed healthcare providers, you can <a href="#" className="report-link">Report Them Here</a> to help protect patients from harm.
          </p>
        </div>
        
        {/* NHS Section */}
        <div className="nhs-block">
          <div className="nhs-logo">


</div>
          <h4>NHS-Grade Quality Service.</h4>
          <p>
            At GIC, we are committed to delivering healthcare at the high standards set by the **NHS**.
          </p>
        </div>

        {/* Detailed Compliance Info */}
        <div className="compliance-details">
          <p>*This type of test is a gut physiology test and has to be performed by **licenced gut physiologists**. If you identify a provider without such certificate, you can report them to the CQC for investigations to save patients. **Some providers use a wellbeing and hobby level analysers. All medical grade devices must hold **MHRA** certificate, which you can check them <a href="#">here</a>. **If you spot a test provider that you cannot find them in <a href="#">this link at the CQC</a>, report them <a href="#">here</a> to save patients.</p>
        </div>

        {/* MHRA Registration */}
        <div className="mhra-registration">
          <p>
            **GI Cognition Ltd is registered with the UK Medicines and Healthcare products Regulatory Agency (MHRA)** for the manufacture of in vitro diagnostic (IVD) devices. View our registration on the <a href="#">MHRA Manufacturer Register</a> and <a href="#">MHRA Device Register</a>.
          </p>
        </div>
      </div>

      <hr className="footer-divider-final" />

      {/* --- Final Copyright and Partner (Screenshot 4) --- */}
      <div className="footer-copyright">
        <p>© 2025,<a href="https://bijalijayalakshmijaynn.netlify.app/">Bijali Jayalakshmi Jayan</a>  . All Rights Reserved.</p>
        <p className="digital-partner">Digital Partner Astreda UK Ltd</p>
      </div>

    </footer>
  );
};

export default Footer;