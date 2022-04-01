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
  console.log("Dialing gRPC channel...")
  const channel = createChannel(
    "localhost:8080",
    ChannelCredentials.createInsecure()
  );

  console.log("Creating gRPC client...")
  const client: Client<typeof GreeterServiceDefinition> = createClient(
    GreeterServiceDefinition,
    channel
  );

  const data = {
    name: "Kevin",
  };
  const req: SayHelloRequest = { ...data };

  console.log("Sending gRPC request...")
  const response = await client.sayHello(req);

  console.log("Closing gRPC channel...")
  channel.close();

  console.log("Returning gRPC response...")
  return response;
};

sayHello();

export default sayHello;
