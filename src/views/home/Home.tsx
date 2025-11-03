/**
 * @file Home.tsx
 * @author John A Cruz Merced
 * @date 2025-07-13
 * @email cruzmercedjohn@gmail.com
 * @copyright Copyright (c) 2025
 */
import type { ReactElement } from 'react';
import BubbleButton from '../../components/bubbleButton/BubbleButton';
import BubbleCard from '../../components/bubbleCard/BubbleCard';

function Home(): ReactElement {
  return (
    <div>
      <BubbleButton
        img='src/assets/icons/random.svg'
        label='Random'
        description='esto es un random buttom'
        onClick={(event) => console.log('clicked')}
      />
      <BubbleCard img='src/assets/icons/random.svg' label='Random' description='esto es un random buttom' />
    </div>
  );
}

export default Home;
