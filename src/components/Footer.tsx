import React from 'react';
const footerLinks = [
  {
    "name": "dribbble",
    "url": "https://dribbble.com/harperatlas"
  },
  {
    "name": "twitter",
    "url": "https://twitter.com/HarperAtlas"
  },
  {
    "name": "instagram",
    "url": "https://www.instagram.com/harperatlas/"
  },
  {
    "name": "linkedin",
    "url": "http://linkedin.com/in/harper-atlas/"
  },
  {
    "name": "email",
    "url": "mailto:hello@harperatlas.com"
  }
];

export const Footer = () => {
    return (
        <footer className="footer text-center sm:text-left">
            <div className="flex hidden sm:block items-start container mx-auto">
                <h4>Say hello!</h4>
                <img className="footer-arrow" src="/images/arrow 2.png" alt="squiggle arrow" />
            </div>
            <div className="flex flex-wrap container mx-auto sm:justify-between">
                <div className="w-full sm:w-auto">
                    <a className="text-playfair" href="">&copy;{new Date().getFullYear()} Harper Atlas</a>
                </div>
                <div className="w-full sm:w-auto sm:content-end items-center">
                    {footerLinks.map((link, index) => (
                        <a key={index} target="_blank" rel="noopener" className="text-center m-0 inline-block pr-4"  href={link.url}>
                            <img className="icon inline-block" src={`/images/svg/${link.name}.svg`} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}