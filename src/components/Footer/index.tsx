import React, { useEffect, useState } from 'react';
import './index.scss';
import { RootState } from 'reducers';
import { useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import IMenus, { IMenuLinks, MenuType } from 'interfaces/Menus.interface';
import Markdown from 'markdown-to-jsx';

const Footer: React.FC = () => {
  const menus = useSelector((state: RootState) => state.menus);
  const location = useLocation();
  const [footerMenu, setFooterMenu] = useState<IMenus>();
  const [socialLinks, setSocialLinks] = useState<IMenus>();

  useEffect(() => {
    const footerToLoad: MenuType = (location.pathname.includes('pejota')) ? 'Footer PJ' : 'Footer PF';
    setFooterMenu(menus.menusList.filter(menu => menu.Name === footerToLoad)[0]);
    setSocialLinks(menus.menusList.filter(menu => menu.Name === 'Social Links')[0]);
  }, [location, menus.menusList]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="col-md-10 col-sm-12 offset-md-1">
          <nav className="footer__social-nav row">
            {socialLinks?.Links.map((socialLink: IMenuLinks) => 
              (
                <a 
                  key={socialLink.id}
                  href={socialLink.Url}
                  className={`footer__social-link footer__social-link--${socialLink.Label.toLowerCase()}`}
                  rel="noreferrer noopener"
                  target="_blank"
                >{socialLink.Label}
                </a>
              ))}
          </nav>
          <nav className="footer__footer-nav row">
            <ul className="footer__nav-list">
              {footerMenu?.Links.map((menuLink: IMenuLinks) => (
                <li key={menuLink.id} className="footer__nav-list-item">
                  {(menuLink.Url.includes('//')) ? 
                    (
                      <a 
                        className="footer__nav-link"
                        href={menuLink.Url}
                        rel="noreferrer noopener"
                        target="_blank"
                      >{menuLink.Label}
                      </a>
                    ) : 
                    (
                      <NavLink 
                        className="footer__nav-link"
                        to={menuLink.Url}
                      >{menuLink.Label}
                      </NavLink>
                    )}
                </li>
              ))}
            </ul>
          </nav>
          {footerMenu?.additionalText ? 
            <Markdown className="footer__copyright row">
              {footerMenu?.additionalText}
            </Markdown> : null}
        </div>
      </div>
    </footer>

  );
};

export default Footer;
