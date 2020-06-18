import React, { useState, useEffect } from 'react';

import './index.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import IMenus, { IMenuLinks, MenuType } from 'interfaces/Menus.interface';

interface IHeaderProps {
  linkClass: string;
}

const HeaderLinks: React.FC<IHeaderProps> = (props) => {
  const menus = useSelector((state: RootState) => state.menus);
  const location = useLocation();
  const [headerMenu, setHeaderMenu] = useState<IMenus>();


  useEffect(() => {
    const headerToLoad: MenuType = (location.pathname.includes('pejota')) ? 'PJ' : 'PF';
    setHeaderMenu(menus.menusList.filter(menu => menu.Name === headerToLoad)[0]);
  }, [location, menus.menusList]);

  return (
    <>
      {headerMenu?.Links.map((link: IMenuLinks) => {
        return link.Url.includes('//') ? (
          <li key={link.id} className={props.linkClass}>
            <a href={link.Url} target="_blank" rel="noopener noreferrer">
              {link.Label}
            </a>
          </li>
        ) : (
          <li key={link.id} className={props.linkClass}>
            <NavLink to={link.Url}>{link.Label}</NavLink>
          </li>
        );
      })}
      <li className={props.linkClass}>
        <NavLink to="/cadastro" className="button button--small bg-amarelo color-branco">abra sua conta</NavLink>
      </li>
    </>
  );
};

export default HeaderLinks;
