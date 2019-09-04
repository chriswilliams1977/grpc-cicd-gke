#grpc-web set up instructions

#make sure protoc and grpc-web are installed
#grpc-web
#download zip
#move dir to bin 
sudo mv ~/Downloads/protoc-gen-grpc-web-1.0.6-darwin-x86_64 \
/usr/local/bin/protoc-gen-grpc-web
#make discoverable in your path
chmod +x /usr/local/bin/protoc-gen-grpc-web
#add to path
PATH=~/usr/local/bin:$PATH


#Create go and js protopb
protoc src/emoji/pb/emoji.proto --go_out=plugins=grpc:.
protoc src/emoji/pb/emoji.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

#create main.go and implement server interface
#run server
#note if you get error undefined: proto.ProtoPackageIsVersion3 update go mod probuf version
go get github.com/golang/protobuf@master

#Create web interface
#create index.html and put web frontend code in client.js file
#page displays a text editor to the user and calls a emojize function (which we’ll define later) 
#to send the user-input to the backend emoji service. 
#The emojize function will also consume the gRPC response from the backend service and update the user input field 
#with the data given out by the server.

#create package.json for library import required by main.js
#install libraries
npm install
#generate dist/main.js
#npx makes it easy to use CLI tools and other executables hosted on the registry
npx webpack client.js

#deploy backend server
#create Dockerfile
