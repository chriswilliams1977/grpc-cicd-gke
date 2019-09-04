protoc src/emoji/pb/emoji.proto --go_out=plugins=grpc:.
protoc src/emoji/pb/emoji.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.