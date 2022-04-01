# some-protos-ts-example

A small demo using **nice-grpc** and Typescript protos generated with 
[**ts-proto**](https://github.com/stephenh/ts-proto).

The ts-proto options we're using are specified in another repo, 
[some-protos-ts](https://github.com/kevinmichaelchen/some-protos-ts/blob/main/buf.gen.yaml).

The code where we're instantiating the gRPC channel and client, and performing 
the call, can be found in [sayHello.ts](./src/sayHello.ts).

## nice-grpc examples
Find them all over Github:
https://github.com/search?q=%22nice-grpc%22&type=code

### Bootstrapping
This app was bootstrapped with [Create-React-App](https://create-react-app.dev/docs/adding-typescript/).
```
yarn create react-app my-app --template typescript
```

It depends on [@kevinmichaelchen/some-protos-ts](https://github.com/kevinmichaelchen/some-protos-ts),
in addition to a few other gRPC related dependencies:
```
yarn add @kevinmichaelchen/some-protos-ts long protobufjs nice-grpc
```
