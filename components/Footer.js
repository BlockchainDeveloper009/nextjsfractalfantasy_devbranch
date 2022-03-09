import React from "react";
const TWITTER_HANDLE = 'fractalfantasy1';

const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const LINKEDIN_HANDLE = 'fractalfantasy';

const LINKEDIN_LINK = `https://www.linkedin.com/company/${LINKEDIN_HANDLE}/`;



// props
// destucturing
//<img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
/*
<img alt="Linkedin Logo" className="linkedIn-logo" src={linkedInLogo} />
    <a
      className="footer-text"
      href={LINKEDIN_LINK}
      target="_blank"
      rel="noreferrer"
    >{`@${LINKEDIN_HANDLE}`}</a>
    </div>       
*/
export default function Footer() {
  return (
    <div>
        <div className="footer-container">
        
   
            <span class="iconify" data-icon="logos:twitter"></span>
            
            <a
                className="footer-text"
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
            >{`@${TWITTER_HANDLE}`}</a> 

            <span class="iconify" data-icon="logos:linkedin-icon">
            <span class="iconify" data-icon="logos:discord"></span>
            <span class="iconify" data-icon="logos:tiktok-icon"></span>
            <span class="iconify" data-icon="ant-design:medium-workmark-outlined"></span>
            <a
            className="footer-text"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            >{`@${LINKEDIN_HANDLE}`}</a>    
            </span>
            
            
        </div>       
    
  
  
    </div>
  );
}