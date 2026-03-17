// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var investment_investment_pb = require('../investment/investment_pb.js');

function serialize_investment_AssetCode(arg) {
  if (!(arg instanceof investment_investment_pb.AssetCode)) {
    throw new Error('Expected argument of type investment.AssetCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_AssetCode(buffer_arg) {
  return investment_investment_pb.AssetCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_AssetCodeID(arg) {
  if (!(arg instanceof investment_investment_pb.AssetCodeID)) {
    throw new Error('Expected argument of type investment.AssetCodeID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_AssetCodeID(buffer_arg) {
  return investment_investment_pb.AssetCodeID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_CreateInvestmentRequest(arg) {
  if (!(arg instanceof investment_investment_pb.CreateInvestmentRequest)) {
    throw new Error('Expected argument of type investment.CreateInvestmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_CreateInvestmentRequest(buffer_arg) {
  return investment_investment_pb.CreateInvestmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_Empty(arg) {
  if (!(arg instanceof investment_investment_pb.Empty)) {
    throw new Error('Expected argument of type investment.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_Empty(buffer_arg) {
  return investment_investment_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_GetAssetCodesResponse(arg) {
  if (!(arg instanceof investment_investment_pb.GetAssetCodesResponse)) {
    throw new Error('Expected argument of type investment.GetAssetCodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_GetAssetCodesResponse(buffer_arg) {
  return investment_investment_pb.GetAssetCodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_GetInvestmentDetailRequest(arg) {
  if (!(arg instanceof investment_investment_pb.GetInvestmentDetailRequest)) {
    throw new Error('Expected argument of type investment.GetInvestmentDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_GetInvestmentDetailRequest(buffer_arg) {
  return investment_investment_pb.GetInvestmentDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_GetInvestmentOptions(arg) {
  if (!(arg instanceof investment_investment_pb.GetInvestmentOptions)) {
    throw new Error('Expected argument of type investment.GetInvestmentOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_GetInvestmentOptions(buffer_arg) {
  return investment_investment_pb.GetInvestmentOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_GetUserInvestmentListRequest(arg) {
  if (!(arg instanceof investment_investment_pb.GetUserInvestmentListRequest)) {
    throw new Error('Expected argument of type investment.GetUserInvestmentListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_GetUserInvestmentListRequest(buffer_arg) {
  return investment_investment_pb.GetUserInvestmentListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_GetUserInvestmentListResponse(arg) {
  if (!(arg instanceof investment_investment_pb.GetUserInvestmentListResponse)) {
    throw new Error('Expected argument of type investment.GetUserInvestmentListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_GetUserInvestmentListResponse(buffer_arg) {
  return investment_investment_pb.GetUserInvestmentListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_Investment(arg) {
  if (!(arg instanceof investment_investment_pb.Investment)) {
    throw new Error('Expected argument of type investment.Investment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_Investment(buffer_arg) {
  return investment_investment_pb.Investment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_InvestmentSummaryResponse(arg) {
  if (!(arg instanceof investment_investment_pb.InvestmentSummaryResponse)) {
    throw new Error('Expected argument of type investment.InvestmentSummaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_InvestmentSummaryResponse(buffer_arg) {
  return investment_investment_pb.InvestmentSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_ListAssetCodesRequest(arg) {
  if (!(arg instanceof investment_investment_pb.ListAssetCodesRequest)) {
    throw new Error('Expected argument of type investment.ListAssetCodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_ListAssetCodesRequest(buffer_arg) {
  return investment_investment_pb.ListAssetCodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_ListAssetCodesResponse(arg) {
  if (!(arg instanceof investment_investment_pb.ListAssetCodesResponse)) {
    throw new Error('Expected argument of type investment.ListAssetCodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_ListAssetCodesResponse(buffer_arg) {
  return investment_investment_pb.ListAssetCodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_SellInvestmentRequest(arg) {
  if (!(arg instanceof investment_investment_pb.SellInvestmentRequest)) {
    throw new Error('Expected argument of type investment.SellInvestmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_SellInvestmentRequest(buffer_arg) {
  return investment_investment_pb.SellInvestmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_SellInvestmentResponse(arg) {
  if (!(arg instanceof investment_investment_pb.SellInvestmentResponse)) {
    throw new Error('Expected argument of type investment.SellInvestmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_SellInvestmentResponse(buffer_arg) {
  return investment_investment_pb.SellInvestmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_investment_UserID(arg) {
  if (!(arg instanceof investment_investment_pb.UserID)) {
    throw new Error('Expected argument of type investment.UserID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_investment_UserID(buffer_arg) {
  return investment_investment_pb.UserID.deserializeBinary(new Uint8Array(buffer_arg));
}


var InvestmentServiceService = exports.InvestmentServiceService = {
  getInvestments: {
    path: '/investment.InvestmentService/GetInvestments',
    requestStream: false,
    responseStream: true,
    requestType: investment_investment_pb.GetInvestmentOptions,
    responseType: investment_investment_pb.Investment,
    requestSerialize: serialize_investment_GetInvestmentOptions,
    requestDeserialize: deserialize_investment_GetInvestmentOptions,
    responseSerialize: serialize_investment_Investment,
    responseDeserialize: deserialize_investment_Investment,
  },
  getUserInvestments: {
    path: '/investment.InvestmentService/GetUserInvestments',
    requestStream: false,
    responseStream: true,
    requestType: investment_investment_pb.UserID,
    responseType: investment_investment_pb.Investment,
    requestSerialize: serialize_investment_UserID,
    requestDeserialize: deserialize_investment_UserID,
    responseSerialize: serialize_investment_Investment,
    responseDeserialize: deserialize_investment_Investment,
  },
  getUserInvestmentList: {
    path: '/investment.InvestmentService/GetUserInvestmentList',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.GetUserInvestmentListRequest,
    responseType: investment_investment_pb.GetUserInvestmentListResponse,
    requestSerialize: serialize_investment_GetUserInvestmentListRequest,
    requestDeserialize: deserialize_investment_GetUserInvestmentListRequest,
    responseSerialize: serialize_investment_GetUserInvestmentListResponse,
    responseDeserialize: deserialize_investment_GetUserInvestmentListResponse,
  },
  getInvestmentDetail: {
    path: '/investment.InvestmentService/GetInvestmentDetail',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.GetInvestmentDetailRequest,
    responseType: investment_investment_pb.Investment,
    requestSerialize: serialize_investment_GetInvestmentDetailRequest,
    requestDeserialize: deserialize_investment_GetInvestmentDetailRequest,
    responseSerialize: serialize_investment_Investment,
    responseDeserialize: deserialize_investment_Investment,
  },
  createInvestment: {
    path: '/investment.InvestmentService/CreateInvestment',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.CreateInvestmentRequest,
    responseType: investment_investment_pb.Investment,
    requestSerialize: serialize_investment_CreateInvestmentRequest,
    requestDeserialize: deserialize_investment_CreateInvestmentRequest,
    responseSerialize: serialize_investment_Investment,
    responseDeserialize: deserialize_investment_Investment,
  },
  sellInvestment: {
    path: '/investment.InvestmentService/SellInvestment',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.SellInvestmentRequest,
    responseType: investment_investment_pb.SellInvestmentResponse,
    requestSerialize: serialize_investment_SellInvestmentRequest,
    requestDeserialize: deserialize_investment_SellInvestmentRequest,
    responseSerialize: serialize_investment_SellInvestmentResponse,
    responseDeserialize: deserialize_investment_SellInvestmentResponse,
  },
  getInvestmentSummary: {
    path: '/investment.InvestmentService/GetInvestmentSummary',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.UserID,
    responseType: investment_investment_pb.InvestmentSummaryResponse,
    requestSerialize: serialize_investment_UserID,
    requestDeserialize: deserialize_investment_UserID,
    responseSerialize: serialize_investment_InvestmentSummaryResponse,
    responseDeserialize: deserialize_investment_InvestmentSummaryResponse,
  },
  getAssetCodes: {
    path: '/investment.InvestmentService/GetAssetCodes',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.Empty,
    responseType: investment_investment_pb.GetAssetCodesResponse,
    requestSerialize: serialize_investment_Empty,
    requestDeserialize: deserialize_investment_Empty,
    responseSerialize: serialize_investment_GetAssetCodesResponse,
    responseDeserialize: deserialize_investment_GetAssetCodesResponse,
  },
  // ── Admin Master Data RPCs ──
listAssetCodes: {
    path: '/investment.InvestmentService/ListAssetCodes',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.ListAssetCodesRequest,
    responseType: investment_investment_pb.ListAssetCodesResponse,
    requestSerialize: serialize_investment_ListAssetCodesRequest,
    requestDeserialize: deserialize_investment_ListAssetCodesRequest,
    responseSerialize: serialize_investment_ListAssetCodesResponse,
    responseDeserialize: deserialize_investment_ListAssetCodesResponse,
  },
  getAssetCodeDetail: {
    path: '/investment.InvestmentService/GetAssetCodeDetail',
    requestStream: false,
    responseStream: false,
    requestType: investment_investment_pb.AssetCodeID,
    responseType: investment_investment_pb.AssetCode,
    requestSerialize: serialize_investment_AssetCodeID,
    requestDeserialize: deserialize_investment_AssetCodeID,
    responseSerialize: serialize_investment_AssetCode,
    responseDeserialize: deserialize_investment_AssetCode,
  },
};

exports.InvestmentServiceClient = grpc.makeGenericClientConstructor(InvestmentServiceService, 'InvestmentService');
