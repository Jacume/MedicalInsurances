/**
 * @file BubbleCard.tsx
 * @author John A Cruz Merced
 * @date 2025-07-15
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */
import type { ReactElement } from 'react';
import './bubbleCard.css';
import { getImageType } from '../../utilities/helpers/utils.ts';

function BubbleCard({
  size = 'medium',
  img,
  color,
  label,
  description
}: {
  size?: string;
  img: string;
  color?: string;
  label?: string;
  description?: string;
}): ReactElement {
  const imageType = getImageType(img);
  const renderImage = (imageType: ImageType) => {
    switch (imageType) {
      case 'svg':
        return (
          <svg className={`bubbleCard-svg_${size} bubbleCard-svg_${color}`}>
            <use xlinkHref={`${img}#layer`} />
          </svg>
        );
      default:
        return <img src={img}></img>;
    }
  };
  return (
    <div className={'bubbleCard-view'}>
      <div className={`bubbleCard-bubble bubbleCard-bubble_${size}`}>{renderImage(imageType)}</div>
      {label ? <span className='bubbleCard-label'>{label}</span> : undefined}
      {description ? <p className='bubbleCard-description'>{description}</p> : undefined}
    </div>
  );
}

export default BubbleCard;
