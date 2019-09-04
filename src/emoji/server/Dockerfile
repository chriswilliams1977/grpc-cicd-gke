FROM golang:1.12-alpine as builder
MAINTAINER Chris Williams <chriswilliams1977@gmail.com>

WORKDIR /root/go/src/github.com/chriswilliams1977/grpc-web-istio-demo/
COPY ./proto .
#use to output files copied over
#RUN ls -la ./*

#build app for linux and compile into bin/server
RUN apk add --no-cache git protobuf && \
    go get github.com/golang/protobuf/protoc-gen-go && \
    #go get github.com/grpc/grpc-web && \
    protoc src/emoji/pb/emoji.proto --go_out=plugins=grpc:. && \
    #protoc src/emoji/pb/emoji.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. && \
    CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -v -o bin/server src/emoji/server/main.go

#this container nothing but the binary and minimal files, no bash or sh
#to debug run the scratch-debugger
FROM scratch
WORKDIR /bin/
COPY --from=builder /root/go/src/github.com/chriswilliams1977/grpc-web-istio-demo/bin/server .
ENTRYPOINT [ "/bin/server" ]
EXPOSE 9000