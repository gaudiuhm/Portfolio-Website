import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/9sf3r1f4zGt3Evlu/scene.splinecode" />
      </Suspense>
    </div>
  );
}