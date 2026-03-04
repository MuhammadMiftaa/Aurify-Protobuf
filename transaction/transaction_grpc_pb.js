// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transaction_transaction_pb = require('../transaction/transaction_pb.js');

function serialize_transaction_Attachment(arg) {
  if (!(arg instanceof transaction_transaction_pb.Attachment)) {
    throw new Error('Expected argument of type transaction.Attachment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Attachment(buffer_arg) {
  return transaction_transaction_pb.Attachment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_AttachmentID(arg) {
  if (!(arg instanceof transaction_transaction_pb.AttachmentID)) {
    throw new Error('Expected argument of type transaction.AttachmentID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_AttachmentID(buffer_arg) {
  return transaction_transaction_pb.AttachmentID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_CreateAttachmentRequest(arg) {
  if (!(arg instanceof transaction_transaction_pb.CreateAttachmentRequest)) {
    throw new Error('Expected argument of type transaction.CreateAttachmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_CreateAttachmentRequest(buffer_arg) {
  return transaction_transaction_pb.CreateAttachmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_CreateFundTransferRequest(arg) {
  if (!(arg instanceof transaction_transaction_pb.CreateFundTransferRequest)) {
    throw new Error('Expected argument of type transaction.CreateFundTransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_CreateFundTransferRequest(buffer_arg) {
  return transaction_transaction_pb.CreateFundTransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_CreateTransactionRequest(arg) {
  if (!(arg instanceof transaction_transaction_pb.CreateTransactionRequest)) {
    throw new Error('Expected argument of type transaction.CreateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_CreateTransactionRequest(buffer_arg) {
  return transaction_transaction_pb.CreateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_FundTransferResponse(arg) {
  if (!(arg instanceof transaction_transaction_pb.FundTransferResponse)) {
    throw new Error('Expected argument of type transaction.FundTransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_FundTransferResponse(buffer_arg) {
  return transaction_transaction_pb.FundTransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetAttachmentsResponse(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetAttachmentsResponse)) {
    throw new Error('Expected argument of type transaction.GetAttachmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetAttachmentsResponse(buffer_arg) {
  return transaction_transaction_pb.GetAttachmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetCategoriesRequest(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetCategoriesRequest)) {
    throw new Error('Expected argument of type transaction.GetCategoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetCategoriesRequest(buffer_arg) {
  return transaction_transaction_pb.GetCategoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetCategoriesResponse(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetCategoriesResponse)) {
    throw new Error('Expected argument of type transaction.GetCategoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetCategoriesResponse(buffer_arg) {
  return transaction_transaction_pb.GetCategoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetTransactionOptions(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetTransactionOptions)) {
    throw new Error('Expected argument of type transaction.GetTransactionOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetTransactionOptions(buffer_arg) {
  return transaction_transaction_pb.GetTransactionOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetUserTransactionsRequest(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetUserTransactionsRequest)) {
    throw new Error('Expected argument of type transaction.GetUserTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetUserTransactionsRequest(buffer_arg) {
  return transaction_transaction_pb.GetUserTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_GetUserTransactionsResponse(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetUserTransactionsResponse)) {
    throw new Error('Expected argument of type transaction.GetUserTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetUserTransactionsResponse(buffer_arg) {
  return transaction_transaction_pb.GetUserTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_Transaction(arg) {
  if (!(arg instanceof transaction_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type transaction.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Transaction(buffer_arg) {
  return transaction_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_TransactionDetail(arg) {
  if (!(arg instanceof transaction_transaction_pb.TransactionDetail)) {
    throw new Error('Expected argument of type transaction.TransactionDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_TransactionDetail(buffer_arg) {
  return transaction_transaction_pb.TransactionDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_TransactionID(arg) {
  if (!(arg instanceof transaction_transaction_pb.TransactionID)) {
    throw new Error('Expected argument of type transaction.TransactionID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_TransactionID(buffer_arg) {
  return transaction_transaction_pb.TransactionID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_UpdateTransactionRequest(arg) {
  if (!(arg instanceof transaction_transaction_pb.UpdateTransactionRequest)) {
    throw new Error('Expected argument of type transaction.UpdateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_UpdateTransactionRequest(buffer_arg) {
  return transaction_transaction_pb.UpdateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
  // ── Transaction RPCs ──
getTransactions: {
    path: '/transaction.TransactionService/GetTransactions',
    requestStream: false,
    responseStream: true,
    requestType: transaction_transaction_pb.GetTransactionOptions,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_GetTransactionOptions,
    requestDeserialize: deserialize_transaction_GetTransactionOptions,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  getUserTransactions: {
    path: '/transaction.TransactionService/GetUserTransactions',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.GetUserTransactionsRequest,
    responseType: transaction_transaction_pb.GetUserTransactionsResponse,
    requestSerialize: serialize_transaction_GetUserTransactionsRequest,
    requestDeserialize: deserialize_transaction_GetUserTransactionsRequest,
    responseSerialize: serialize_transaction_GetUserTransactionsResponse,
    responseDeserialize: deserialize_transaction_GetUserTransactionsResponse,
  },
  getTransactionByID: {
    path: '/transaction.TransactionService/GetTransactionByID',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.TransactionID,
    responseType: transaction_transaction_pb.TransactionDetail,
    requestSerialize: serialize_transaction_TransactionID,
    requestDeserialize: deserialize_transaction_TransactionID,
    responseSerialize: serialize_transaction_TransactionDetail,
    responseDeserialize: deserialize_transaction_TransactionDetail,
  },
  createTransaction: {
    path: '/transaction.TransactionService/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.CreateTransactionRequest,
    responseType: transaction_transaction_pb.TransactionDetail,
    requestSerialize: serialize_transaction_CreateTransactionRequest,
    requestDeserialize: deserialize_transaction_CreateTransactionRequest,
    responseSerialize: serialize_transaction_TransactionDetail,
    responseDeserialize: deserialize_transaction_TransactionDetail,
  },
  createFundTransfer: {
    path: '/transaction.TransactionService/CreateFundTransfer',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.CreateFundTransferRequest,
    responseType: transaction_transaction_pb.FundTransferResponse,
    requestSerialize: serialize_transaction_CreateFundTransferRequest,
    requestDeserialize: deserialize_transaction_CreateFundTransferRequest,
    responseSerialize: serialize_transaction_FundTransferResponse,
    responseDeserialize: deserialize_transaction_FundTransferResponse,
  },
  updateTransaction: {
    path: '/transaction.TransactionService/UpdateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.UpdateTransactionRequest,
    responseType: transaction_transaction_pb.TransactionDetail,
    requestSerialize: serialize_transaction_UpdateTransactionRequest,
    requestDeserialize: deserialize_transaction_UpdateTransactionRequest,
    responseSerialize: serialize_transaction_TransactionDetail,
    responseDeserialize: deserialize_transaction_TransactionDetail,
  },
  deleteTransaction: {
    path: '/transaction.TransactionService/DeleteTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.TransactionID,
    responseType: transaction_transaction_pb.TransactionDetail,
    requestSerialize: serialize_transaction_TransactionID,
    requestDeserialize: deserialize_transaction_TransactionID,
    responseSerialize: serialize_transaction_TransactionDetail,
    responseDeserialize: deserialize_transaction_TransactionDetail,
  },
  // ── Category RPCs ──
getCategories: {
    path: '/transaction.TransactionService/GetCategories',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.GetCategoriesRequest,
    responseType: transaction_transaction_pb.GetCategoriesResponse,
    requestSerialize: serialize_transaction_GetCategoriesRequest,
    requestDeserialize: deserialize_transaction_GetCategoriesRequest,
    responseSerialize: serialize_transaction_GetCategoriesResponse,
    responseDeserialize: deserialize_transaction_GetCategoriesResponse,
  },
  // ── Attachment RPCs ──
getAttachmentsByTransactionID: {
    path: '/transaction.TransactionService/GetAttachmentsByTransactionID',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.TransactionID,
    responseType: transaction_transaction_pb.GetAttachmentsResponse,
    requestSerialize: serialize_transaction_TransactionID,
    requestDeserialize: deserialize_transaction_TransactionID,
    responseSerialize: serialize_transaction_GetAttachmentsResponse,
    responseDeserialize: deserialize_transaction_GetAttachmentsResponse,
  },
  createAttachment: {
    path: '/transaction.TransactionService/CreateAttachment',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.CreateAttachmentRequest,
    responseType: transaction_transaction_pb.Attachment,
    requestSerialize: serialize_transaction_CreateAttachmentRequest,
    requestDeserialize: deserialize_transaction_CreateAttachmentRequest,
    responseSerialize: serialize_transaction_Attachment,
    responseDeserialize: deserialize_transaction_Attachment,
  },
  deleteAttachment: {
    path: '/transaction.TransactionService/DeleteAttachment',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.AttachmentID,
    responseType: transaction_transaction_pb.Attachment,
    requestSerialize: serialize_transaction_AttachmentID,
    requestDeserialize: deserialize_transaction_AttachmentID,
    responseSerialize: serialize_transaction_Attachment,
    responseDeserialize: deserialize_transaction_Attachment,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService, 'TransactionService');
