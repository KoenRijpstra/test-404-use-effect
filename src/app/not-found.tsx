'use client'

import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

export default function NotFound() {

  const posthog = usePostHog();

  useEffect(() => {
    console.log('not_found');
    posthog.capture('not_found');
  }, []);

  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">This page could not be found.</p>
        <button onClick={() => posthog.capture('not_found')}>Capture</button>
      </div>
    </div>
  )
}
