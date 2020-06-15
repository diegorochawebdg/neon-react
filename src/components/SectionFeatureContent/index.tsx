import React from 'react';
import ISectionFeature from 'interfaces/SectionFeatureContent.interface';
import Markdown from 'markdown-to-jsx';
import StrapiImage from 'components/StrapiImage';
import { slugify } from 'utils/Slugify/slugify';
import './index.scss';

interface ISectionFeatureProps {
  content?: ISectionFeature[];
}

const SectionFeatureContent: React.FC<ISectionFeatureProps> = (
  props: ISectionFeatureProps
) => {
  const sectionElements = props.content
    ? props.content.map((item) => (
      <section
        key={item.id}
        className={`feature-section ${ item.sectionBackground.themeColor ? `bg-${slugify(item.sectionBackground.themeColor)}` : '' }`}
      >
        <div className="container">
          <div className={`feature-section__columns-wrapper row ${item.sectionFeatureOrder} ${ item.innerSectionBackground.themeColor ? `bg-${slugify(item.innerSectionBackground.themeColor)}` : ''}`}>
            <div className="col-5 offset-1 feature-section__text-column">
              {item.sectionFeatureIcon ? (
                <div className="feature-section__icon-wrapper">
                  <StrapiImage className="feature-section__icon" imageAttr={item.sectionFeatureIcon} />
                </div>
              ) : null}
              <div className="feature-section__text-wrapper">
                <Markdown className="feature-section__text">{item.sectionFeatureTextBlock}</Markdown>
              </div>
            </div>
            {item.sectionFeatureImage ? (
              <div className="col-md-4 col-sm-12 offset-md-1 feature-section__image-column">
                <StrapiImage imageAttr={item.sectionFeatureImage} />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    ))
    : null;

  return <>{sectionElements}</>;
};

export default SectionFeatureContent;
