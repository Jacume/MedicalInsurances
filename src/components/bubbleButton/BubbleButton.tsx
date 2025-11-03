/**
 * @file BubbleButton.tsx
 * @author John A Cruz Merced
 * @date 2025-07-13
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */
import type { MouseEventHandler, ReactElement } from 'react';
import { classMap, getImageType, uuidv4 } from '../../utilities/helpers/utils.ts';
import './bubbleButton.css';

function BubbleButton({
  img,
  label,
  title = label,
  description,
  backgroundColor = 'theme',
  color = 'white',
  onClick
}: {
  img: string;
  label?: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
  color?: string;
  onClick: MouseEventHandler;
}): ReactElement {
  const imageType = getImageType(img);
  const buttonId = uuidv4();
  const renderImage = (imageType: ImageType) => {
    switch (imageType) {
      case 'svg':
        return (
          <svg className={`bubbleButton-svg_${color}`}>
            <use xlinkHref={`${img}#layer`} />
          </svg>
        );
      default:
        return <img src={img}></img>;
    }
  };

  return (
    <span
      className={classMap('bubbleButton-view', {
        'bubbleButton-view_twoCols': !!label || !!description,
        'bubbleButton-view_twoRows': !!label && !!description
      })}
    >
      <button
        id={buttonId}
        className={classMap('bubbleButton-button', `bubbleButton-button_background_${backgroundColor}`)}
        title={title}
        onClick={onClick}
      >
        {renderImage(imageType)}
      </button>
      {label ? (
        <label htmlFor={buttonId} className='bubbleButton-label'>
          {label}
        </label>
      ) : undefined}
      {description ? <p className='bubbleButton-description'>{description}</p> : undefined}
    </span>
  );
}

export default BubbleButton;
