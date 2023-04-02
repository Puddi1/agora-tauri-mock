import adapter from '@sveltejs/adapter-static' // This was changed from adapter-auto

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  }
}

export default config
