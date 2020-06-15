import { IStrapiImage } from './StrapiImage.interface';

export interface ISectionBackground {
  id: number;
  themeColor: string;
}

export default interface ISectionFeature {
  id: number;
  sectionFeatureOrder: string;
  sectionFeatureIcon?: IStrapiImage;
  sectionFeatureTextBlock: HTMLElement | string;
  sectionFeatureImage?: IStrapiImage;
  sectionBackground: ISectionBackground;
  innerSectionBackground: ISectionBackground;
}
