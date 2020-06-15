import ISectionFeature from 'interfaces/SectionFeatureContent.interface';
import IHero from './Hero.interface';

export interface IComponentsSettings {
  created_at: string;
  id: number;
  updated_at: string;
}

export default interface IComponents extends IComponentsSettings {
  Hero: IHero;
  SectionFeatureContent: ISectionFeature[];
}
