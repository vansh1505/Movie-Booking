import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto text-slate-800 max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-primary-600 ">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-800 md:text-4xl">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-700 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to="/" class="inline-flex text-xl px-5 py-2.5 text-center my-4   text-blue-700 hover:text-blue-800 duration-300">Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
}

export default Error