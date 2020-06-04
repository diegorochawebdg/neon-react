import React from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { Container } from './styles';
import Hero from '../../components/Hero';
import IHero from '../../interfaces/Hero.interface';

const heroMock: IHero = {
  hero_background: 'azul-claro',
  hero_text:
    '<h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>\n<p>Neon, conta grátis e cartão sem anuidade. Abra sua conta, é só baixar o app!</p>\n<p><a class="button button--small bg-amarelo color-branco" href="/cadastro">Abra sua conta</a></p>\n',
  hero_video: '/assets/videos/neon-plus.mp4',
  hero_video_poster: '/assets/images/home-section-header.jpg',
  hero_display_video: false,
  hero_exibir_conteudo_adicional: true,
  hero_youtube_video_id: '',
  hero_conteudo_adicional:
    '<p><img class="alignnone size-full wp-image-2614" src="https://static.devneon.com.br/wp-content/uploads/2020/01/WHINDERSSON_v2.png" alt="" width="632" height="640" srcset="https://static.devneon.com.br/wp-content/uploads/2020/01/WHINDERSSON_v2.png 632w, https://static.devneon.com.br/wp-content/uploads/2020/01/WHINDERSSON_v2-296x300.png 296w" sizes="(max-width: 632px) 100vw, 632px" /></p>\n',
};

const Modular: React.FC<RouteComponentProps> = () => {
  return <Hero content={heroMock} />;
};

export default Modular as React.FC;
