import Fastify from "fastify";
import routes from "./routes/index.js";

const server = Fastify({
  logger: true,
});

server.register(routes);

server.get("/ping", async (request, reply) => {
  console.log(request.body);
  reply.code(200).send({ success: true });
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
