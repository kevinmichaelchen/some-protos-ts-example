# some-protos-ts-example

<div align="center">
  <img src="https://user-images.githubusercontent.com/5129994/161299626-db1b2b18-f489-4686-9851-0e30875aa1f0.png" width=600 />
</div>

A small demo using [**nice-grpc**](https://github.com/deeplay-io/nice-grpc) and 
Typescript protos generated with [**ts-proto**](https://github.com/stephenh/ts-proto).

The ts-proto options we're using are specified in another repo, 
[some-protos-ts](https://github.com/kevinmichaelchen/some-protos-ts/blob/main/buf.gen.yaml).

The code where we're instantiating the gRPC channel and client, and performing 
the call, can be found in [sayHello.ts](src/sayHello.ts).

### Running
```
yarn && yarn start
```

It depends on [@kevinmichaelchen/some-protos-ts](https://github.com/kevinmichaelchen/some-protos-ts)
```
yarn add @kevinmichaelchen/some-protos-ts
```
