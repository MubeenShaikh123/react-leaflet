// src/app/page.js
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('@/components/MyMap'), {
  ssr: false, // This makes sure the component is only rendered on the client side
});

export default function HomePage() {
  return (
    <div>
      <h1>My Map Application</h1>
      <MyMap />
    </div>
  );
}
