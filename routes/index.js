async function routes(fastify, options) {
  fastify.get("/hello", async (request, reply) => {
    return { hello: "world" }
  })
}

export default routes;
