'use client'

import { useEffect } from 'react';

export default function NotFound() {

  useEffect(() => {
    console.log('not_found')
  }, []);

  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">This page could not be found.</p>
      </div>
    </div>
  )
}
