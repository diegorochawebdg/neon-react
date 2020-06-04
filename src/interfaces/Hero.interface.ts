export default interface IHero {
  hero_background: string;
  hero_text: any;
  hero_class?: string;
  hero_display_video: boolean;
  hero_link_adicional?: string;
  hero_video: string;
  hero_video_poster: string;
  hero_exibir_conteudo_adicional: boolean;
  hero_conteudo_adicional: string;
  hero_youtube_video_id: string;
}

export interface IHeroProps {
  content?: IHero;
}

export interface IHeroHtml {
  content?: IHero;
}
