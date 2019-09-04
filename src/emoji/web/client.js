//creates two constants and sets src/emoji/pb/emoji_pb.js messages 
const {EmojizeRequest, EmojizeReply} = require('../pb/emoji_pb.js');
const {EmojiServiceClient} = require('../pb/emoji_grpc_web_pb.js');

//Connects to grpc backend via istio thus does not use port 9000 the server listens on
//the IP address is the IP of istio deployment
//we use default istio ingress port 31380
var client = new EmojiServiceClient('http://192.168.99.100:31380');
var editor = document.getElementById('editor');

window.emojize = function() {
  //create request and set text to text in page
  var request = new EmojizeRequest();
  request.setText(editor.innerText);

  //create emoji client takes a request and returns a response
  client.emojize(request, {}, (err, response) => {
    editor.innerText = response.getEmojizedText();
  });
}