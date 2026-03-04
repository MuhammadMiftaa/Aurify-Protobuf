// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var wallet_wallet_pb = require('../wallet/wallet_pb.js');

function serialize_wallet_CreateWalletRequest(arg) {
  if (!(arg instanceof wallet_wallet_pb.CreateWalletRequest)) {
    throw new Error('Expected argument of type wallet.CreateWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_CreateWalletRequest(buffer_arg) {
  return wallet_wallet_pb.CreateWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_Empty(arg) {
  if (!(arg instanceof wallet_wallet_pb.Empty)) {
    throw new Error('Expected argument of type wallet.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_Empty(buffer_arg) {
  return wallet_wallet_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_GetUserWalletsResponse(arg) {
  if (!(arg instanceof wallet_wallet_pb.GetUserWalletsResponse)) {
    throw new Error('Expected argument of type wallet.GetUserWalletsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_GetUserWalletsResponse(buffer_arg) {
  return wallet_wallet_pb.GetUserWalletsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_GetWalletOptions(arg) {
  if (!(arg instanceof wallet_wallet_pb.GetWalletOptions)) {
    throw new Error('Expected argument of type wallet.GetWalletOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_GetWalletOptions(buffer_arg) {
  return wallet_wallet_pb.GetWalletOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_GetWalletTypesResponse(arg) {
  if (!(arg instanceof wallet_wallet_pb.GetWalletTypesResponse)) {
    throw new Error('Expected argument of type wallet.GetWalletTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_GetWalletTypesResponse(buffer_arg) {
  return wallet_wallet_pb.GetWalletTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_UpdateWalletRequest(arg) {
  if (!(arg instanceof wallet_wallet_pb.UpdateWalletRequest)) {
    throw new Error('Expected argument of type wallet.UpdateWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_UpdateWalletRequest(buffer_arg) {
  return wallet_wallet_pb.UpdateWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_UserID(arg) {
  if (!(arg instanceof wallet_wallet_pb.UserID)) {
    throw new Error('Expected argument of type wallet.UserID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_UserID(buffer_arg) {
  return wallet_wallet_pb.UserID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_Wallet(arg) {
  if (!(arg instanceof wallet_wallet_pb.Wallet)) {
    throw new Error('Expected argument of type wallet.Wallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_Wallet(buffer_arg) {
  return wallet_wallet_pb.Wallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_WalletID(arg) {
  if (!(arg instanceof wallet_wallet_pb.WalletID)) {
    throw new Error('Expected argument of type wallet.WalletID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_WalletID(buffer_arg) {
  return wallet_wallet_pb.WalletID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wallet_WalletSummary(arg) {
  if (!(arg instanceof wallet_wallet_pb.WalletSummary)) {
    throw new Error('Expected argument of type wallet.WalletSummary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wallet_WalletSummary(buffer_arg) {
  return wallet_wallet_pb.WalletSummary.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletServiceService = exports.WalletServiceService = {
  getWallets: {
    path: '/wallet.WalletService/GetWallets',
    requestStream: false,
    responseStream: true,
    requestType: wallet_wallet_pb.GetWalletOptions,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_GetWalletOptions,
    requestDeserialize: deserialize_wallet_GetWalletOptions,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  getUserWallets: {
    path: '/wallet.WalletService/GetUserWallets',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.UserID,
    responseType: wallet_wallet_pb.GetUserWalletsResponse,
    requestSerialize: serialize_wallet_UserID,
    requestDeserialize: deserialize_wallet_UserID,
    responseSerialize: serialize_wallet_GetUserWalletsResponse,
    responseDeserialize: deserialize_wallet_GetUserWalletsResponse,
  },
  getWalletByID: {
    path: '/wallet.WalletService/GetWalletByID',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.WalletID,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_WalletID,
    requestDeserialize: deserialize_wallet_WalletID,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  createWallet: {
    path: '/wallet.WalletService/CreateWallet',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.CreateWalletRequest,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_CreateWalletRequest,
    requestDeserialize: deserialize_wallet_CreateWalletRequest,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  updateWallet: {
    path: '/wallet.WalletService/UpdateWallet',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.UpdateWalletRequest,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_UpdateWalletRequest,
    requestDeserialize: deserialize_wallet_UpdateWalletRequest,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  deleteWallet: {
    path: '/wallet.WalletService/DeleteWallet',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.WalletID,
    responseType: wallet_wallet_pb.Wallet,
    requestSerialize: serialize_wallet_WalletID,
    requestDeserialize: deserialize_wallet_WalletID,
    responseSerialize: serialize_wallet_Wallet,
    responseDeserialize: deserialize_wallet_Wallet,
  },
  getWalletTypes: {
    path: '/wallet.WalletService/GetWalletTypes',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.Empty,
    responseType: wallet_wallet_pb.GetWalletTypesResponse,
    requestSerialize: serialize_wallet_Empty,
    requestDeserialize: deserialize_wallet_Empty,
    responseSerialize: serialize_wallet_GetWalletTypesResponse,
    responseDeserialize: deserialize_wallet_GetWalletTypesResponse,
  },
  getWalletSummary: {
    path: '/wallet.WalletService/GetWalletSummary',
    requestStream: false,
    responseStream: false,
    requestType: wallet_wallet_pb.UserID,
    responseType: wallet_wallet_pb.WalletSummary,
    requestSerialize: serialize_wallet_UserID,
    requestDeserialize: deserialize_wallet_UserID,
    responseSerialize: serialize_wallet_WalletSummary,
    responseDeserialize: deserialize_wallet_WalletSummary,
  },
};

exports.WalletServiceClient = grpc.makeGenericClientConstructor(WalletServiceService, 'WalletService');
