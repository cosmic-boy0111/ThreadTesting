'use client'

import Link from "next/link";

export default function Home() {


  return (
    <div >
      <button
        
      >
        <Link href={'/test'}>
          Go to Test
        </Link>
      </button>
    </div>
  )
}
