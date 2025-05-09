import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/uZywJwzEIkeIkCJ1/scene.splinecode" />
      </Suspense>
    </div>
  );
}