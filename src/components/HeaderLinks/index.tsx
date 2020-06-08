import React from 'react';

import './index.scss';
import { NavLink } from 'react-router-dom';

const headerMockLinks = [
  {
    ID: 10,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: 'Produtos',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'produtos',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/produtos/',
    menu_order: 1,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 10,
    menu_item_parent: '0',
    object_id: '10',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: 'Produtos',
    url: '/produtos',
    target: '',
    attr_title: '',
    description: '',
    classes: [''],
    xfn: '',
    slug: 'produtos',
  },
  {
    ID: 11,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: 'Pejota',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'pejota',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/pejota/',
    menu_order: 2,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 11,
    menu_item_parent: '0',
    object_id: '11',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: 'Pejota',
    url: '/pejota',
    target: '',
    attr_title: '',
    description: '',
    classes: [''],
    xfn: '',
    slug: 'pejota',
  },
  {
    ID: 13,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: 'Perguntas',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'perguntas',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/perguntas/',
    menu_order: 3,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 13,
    menu_item_parent: '0',
    object_id: '13',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: 'Perguntas',
    url: '/perguntas',
    target: '',
    attr_title: '',
    description: '',
    classes: [''],
    xfn: '',
    slug: 'perguntas',
  },
  {
    ID: 14,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: 'Tarifas',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'tarifas',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/tarifas/',
    menu_order: 4,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 14,
    menu_item_parent: '0',
    object_id: '14',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: 'Tarifas',
    url: '/tarifas',
    target: '',
    attr_title: '',
    description: '',
    classes: [''],
    xfn: '',
    slug: 'tarifas',
  },
  {
    ID: 15,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: '#focanodinheiro',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'focanodinheiro',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/focanodinheiro/',
    menu_order: 5,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 15,
    menu_item_parent: '0',
    object_id: '15',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: '#focanodinheiro',
    url: 'https://focanodinheiro.neon.com.br',
    target: '_blank',
    attr_title: '',
    description: '',
    classes: [''],
    xfn: '',
    slug: 'focanodinheiro',
  },
  {
    ID: 16,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: 'Conheça a Neon',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'conheca-a-neon',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/conheca-a-neon/',
    menu_order: 6,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 16,
    menu_item_parent: '0',
    object_id: '16',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: 'Conheça a Neon',
    url: '/conheca-a-neon',
    target: '',
    attr_title: '',
    description: '',
    classes: [''],
    xfn: '',
    slug: 'conheca-a-neon',
  },
  {
    ID: 12,
    post_author: '1',
    post_date: '2019-07-15 19:49:47',
    post_date_gmt: '2019-07-15 19:49:47',
    post_content: '',
    post_title: 'Abra sua conta',
    post_excerpt: '',
    post_status: 'publish',
    comment_status: 'closed',
    ping_status: 'closed',
    post_password: '',
    post_name: 'abra-sua-conta',
    to_ping: '',
    pinged: '',
    post_modified: '2019-07-24 19:37:44',
    post_modified_gmt: '2019-07-24 19:37:44',
    post_content_filtered: '',
    post_parent: 0,
    guid: 'http://wordpress-prod.devneon.com.br/2019/07/15/abra-sua-conta/',
    menu_order: 7,
    post_type: 'nav_menu_item',
    post_mime_type: '',
    comment_count: '0',
    filter: 'raw',
    db_id: 12,
    menu_item_parent: '0',
    object_id: '12',
    object: 'custom',
    type: 'custom',
    type_label: 'Link personalizado',
    title: 'Abra sua conta',
    url: '/cadastro',
    target: '',
    attr_title: '',
    description: '',
    classes: ['button', 'button--small', 'bg-amarelo'],
    xfn: '',
    slug: 'abra-sua-conta',
  },
];

interface IHeaderLinks {
  linkClass: string;
}

const HeaderLinks: React.FC<IHeaderLinks> = (props) => {
  return (
    <>
      {headerMockLinks.map((link) => {
        return link.url.includes('//') ? (
          <li key={link.ID} className={props.linkClass}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          </li>
        ) : (
          <li key={link.ID} className={props.linkClass}>
            <NavLink to={link.url}>{link.title}</NavLink>
          </li>
        );
      })}
    </>
  );
};

export default HeaderLinks;
