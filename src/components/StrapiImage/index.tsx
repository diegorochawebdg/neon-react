import React from 'react';
import { IStrapiImage } from 'interfaces/StrapiImage.interface';

interface IStrapiImageProps {
  imageAttr: IStrapiImage | undefined;
  className?: string;
}

const StrapiImage: React.FC<IStrapiImageProps> = (props) => {
  if (!props.imageAttr) {
    return null;
  }

  return (
    <img
      className={props.className}
      src={`${process.env.REACT_APP_API_URL}${props.imageAttr.url}`}
      alt={props.imageAttr.alternativeText}
      title={props.imageAttr.caption}
      width={props.imageAttr.width / 2}
      height={props.imageAttr.height / 2}
    />
  );
};

export default StrapiImage;
