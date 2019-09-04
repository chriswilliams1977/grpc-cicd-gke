/**
 * @fileoverview gRPC-Web generated client stub for emoji
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.emoji = require('./emoji_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.emoji.EmojiServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.emoji.EmojiServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.emoji.EmojizeRequest,
 *   !proto.emoji.EmojizeReply>}
 */
const methodDescriptor_EmojiService_Emojize = new grpc.web.MethodDescriptor(
  '/emoji.EmojiService/Emojize',
  grpc.web.MethodType.UNARY,
  proto.emoji.EmojizeRequest,
  proto.emoji.EmojizeReply,
  /** @param {!proto.emoji.EmojizeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.emoji.EmojizeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.emoji.EmojizeRequest,
 *   !proto.emoji.EmojizeReply>}
 */
const methodInfo_EmojiService_Emojize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.emoji.EmojizeReply,
  /** @param {!proto.emoji.EmojizeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.emoji.EmojizeReply.deserializeBinary
);


/**
 * @param {!proto.emoji.EmojizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.emoji.EmojizeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.emoji.EmojizeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.emoji.EmojiServiceClient.prototype.emojize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/emoji.EmojiService/Emojize',
      request,
      metadata || {},
      methodDescriptor_EmojiService_Emojize,
      callback);
};


/**
 * @param {!proto.emoji.EmojizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.emoji.EmojizeReply>}
 *     A native promise that resolves to the response
 */
proto.emoji.EmojiServicePromiseClient.prototype.emojize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/emoji.EmojiService/Emojize',
      request,
      metadata || {},
      methodDescriptor_EmojiService_Emojize);
};


module.exports = proto.emoji;

