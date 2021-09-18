export default function({ $axios }) {
  $axios.onRequest((config) => {
      if (process.env.YOUTUBE_API_TOKEN) {
          config.headers.common['Authorization'] = process.env.YOUTUBE_API_TOKEN
      }
      return config
  })
}