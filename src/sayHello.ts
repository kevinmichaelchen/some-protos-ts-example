import {
  GreeterServiceDefinition,
  SayHelloRequest,
  SayHelloResponse,
  // eslint-disable-next-line max-len
} from "@kevinmichaelchen/some-protos-ts/gen/ts/some-protos/idl/some/protos/greeter/v1beta1/greeter";
import {
  createChannel,
  createClient,
  Client,
  ChannelCredentials,
} from "nice-grpc";

const sayHello = async (): Promise<SayHelloResponse> => {
  const channel = createChannel(
    "localhost:8080",
    ChannelCredentials.createInsecure()
  );

  const client: Client<typeof GreeterServiceDefinition> = createClient(
    GreeterServiceDefinition,
    channel
  );

  const data = {
    name: "Kevin",
  };
  const req: SayHelloRequest = { ...data };

  const response = await client.sayHello(req);

  channel.close();

  return response;
};

sayHello();

export default sayHello;
