export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaserUrl}/movie/${id}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${config.apiKey}`
    }
  })
})