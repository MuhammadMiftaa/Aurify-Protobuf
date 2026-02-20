// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transaction_transaction_pb = require('../transaction/transaction_pb.js');

function serialize_transaction_GetTransactionOptions(arg) {
  if (!(arg instanceof transaction_transaction_pb.GetTransactionOptions)) {
    throw new Error('Expected argument of type transaction.GetTransactionOptions');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_GetTransactionOptions(buffer_arg) {
  return transaction_transaction_pb.GetTransactionOptions.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_NewTransaction(arg) {
  if (!(arg instanceof transaction_transaction_pb.NewTransaction)) {
    throw new Error('Expected argument of type transaction.NewTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_NewTransaction(buffer_arg) {
  return transaction_transaction_pb.NewTransaction.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_transaction_TransactionID(arg) {
  if (!(arg instanceof transaction_transaction_pb.TransactionID)) {
    throw new Error('Expected argument of type transaction.TransactionID');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_TransactionID(buffer_arg) {
  return transaction_transaction_pb.TransactionID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transaction_Wallets(arg) {
  if (!(arg instanceof transaction_transaction_pb.Wallets)) {
    throw new Error('Expected argument of type transaction.Wallets');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transaction_Wallets(buffer_arg) {
  return transaction_transaction_pb.Wallets.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionServiceService = exports.TransactionServiceService = {
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
    responseStream: true,
    requestType: transaction_transaction_pb.Wallets,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_Wallets,
    requestDeserialize: deserialize_transaction_Wallets,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  createTransaction: {
    path: '/transaction.TransactionService/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.NewTransaction,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_NewTransaction,
    requestDeserialize: deserialize_transaction_NewTransaction,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
  deleteTransaction: {
    path: '/transaction.TransactionService/DeleteTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transaction_transaction_pb.TransactionID,
    responseType: transaction_transaction_pb.Transaction,
    requestSerialize: serialize_transaction_TransactionID,
    requestDeserialize: deserialize_transaction_TransactionID,
    responseSerialize: serialize_transaction_Transaction,
    responseDeserialize: deserialize_transaction_Transaction,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService, 'TransactionService');
