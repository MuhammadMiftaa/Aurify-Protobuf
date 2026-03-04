// package: transaction
// file: transaction/transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as transaction_transaction_pb from "../transaction/transaction_pb";

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTransactions: ITransactionServiceService_IGetTransactions;
    getUserTransactions: ITransactionServiceService_IGetUserTransactions;
    getTransactionByID: ITransactionServiceService_IGetTransactionByID;
    createTransaction: ITransactionServiceService_ICreateTransaction;
    createFundTransfer: ITransactionServiceService_ICreateFundTransfer;
    updateTransaction: ITransactionServiceService_IUpdateTransaction;
    deleteTransaction: ITransactionServiceService_IDeleteTransaction;
    getCategories: ITransactionServiceService_IGetCategories;
    getAttachmentsByTransactionID: ITransactionServiceService_IGetAttachmentsByTransactionID;
    createAttachment: ITransactionServiceService_ICreateAttachment;
    deleteAttachment: ITransactionServiceService_IDeleteAttachment;
}

interface ITransactionServiceService_IGetTransactions extends grpc.MethodDefinition<transaction_transaction_pb.GetTransactionOptions, transaction_transaction_pb.Transaction> {
    path: "/transaction.TransactionService/GetTransactions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<transaction_transaction_pb.GetTransactionOptions>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.GetTransactionOptions>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.Transaction>;
}
interface ITransactionServiceService_IGetUserTransactions extends grpc.MethodDefinition<transaction_transaction_pb.GetUserTransactionsRequest, transaction_transaction_pb.GetUserTransactionsResponse> {
    path: "/transaction.TransactionService/GetUserTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.GetUserTransactionsRequest>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.GetUserTransactionsRequest>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.GetUserTransactionsResponse>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.GetUserTransactionsResponse>;
}
interface ITransactionServiceService_IGetTransactionByID extends grpc.MethodDefinition<transaction_transaction_pb.TransactionID, transaction_transaction_pb.TransactionDetail> {
    path: "/transaction.TransactionService/GetTransactionByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.TransactionID>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionID>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.TransactionDetail>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionDetail>;
}
interface ITransactionServiceService_ICreateTransaction extends grpc.MethodDefinition<transaction_transaction_pb.CreateTransactionRequest, transaction_transaction_pb.TransactionDetail> {
    path: "/transaction.TransactionService/CreateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.CreateTransactionRequest>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.CreateTransactionRequest>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.TransactionDetail>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionDetail>;
}
interface ITransactionServiceService_ICreateFundTransfer extends grpc.MethodDefinition<transaction_transaction_pb.CreateFundTransferRequest, transaction_transaction_pb.FundTransferResponse> {
    path: "/transaction.TransactionService/CreateFundTransfer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.CreateFundTransferRequest>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.CreateFundTransferRequest>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.FundTransferResponse>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.FundTransferResponse>;
}
interface ITransactionServiceService_IUpdateTransaction extends grpc.MethodDefinition<transaction_transaction_pb.UpdateTransactionRequest, transaction_transaction_pb.TransactionDetail> {
    path: "/transaction.TransactionService/UpdateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.UpdateTransactionRequest>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.UpdateTransactionRequest>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.TransactionDetail>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionDetail>;
}
interface ITransactionServiceService_IDeleteTransaction extends grpc.MethodDefinition<transaction_transaction_pb.TransactionID, transaction_transaction_pb.TransactionDetail> {
    path: "/transaction.TransactionService/DeleteTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.TransactionID>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionID>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.TransactionDetail>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionDetail>;
}
interface ITransactionServiceService_IGetCategories extends grpc.MethodDefinition<transaction_transaction_pb.GetCategoriesRequest, transaction_transaction_pb.GetCategoriesResponse> {
    path: "/transaction.TransactionService/GetCategories";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.GetCategoriesRequest>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.GetCategoriesRequest>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.GetCategoriesResponse>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.GetCategoriesResponse>;
}
interface ITransactionServiceService_IGetAttachmentsByTransactionID extends grpc.MethodDefinition<transaction_transaction_pb.TransactionID, transaction_transaction_pb.GetAttachmentsResponse> {
    path: "/transaction.TransactionService/GetAttachmentsByTransactionID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.TransactionID>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.TransactionID>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.GetAttachmentsResponse>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.GetAttachmentsResponse>;
}
interface ITransactionServiceService_ICreateAttachment extends grpc.MethodDefinition<transaction_transaction_pb.CreateAttachmentRequest, transaction_transaction_pb.Attachment> {
    path: "/transaction.TransactionService/CreateAttachment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.CreateAttachmentRequest>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.CreateAttachmentRequest>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.Attachment>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.Attachment>;
}
interface ITransactionServiceService_IDeleteAttachment extends grpc.MethodDefinition<transaction_transaction_pb.AttachmentID, transaction_transaction_pb.Attachment> {
    path: "/transaction.TransactionService/DeleteAttachment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<transaction_transaction_pb.AttachmentID>;
    requestDeserialize: grpc.deserialize<transaction_transaction_pb.AttachmentID>;
    responseSerialize: grpc.serialize<transaction_transaction_pb.Attachment>;
    responseDeserialize: grpc.deserialize<transaction_transaction_pb.Attachment>;
}

export const TransactionServiceService: ITransactionServiceService;

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
    getTransactions: grpc.handleServerStreamingCall<transaction_transaction_pb.GetTransactionOptions, transaction_transaction_pb.Transaction>;
    getUserTransactions: grpc.handleUnaryCall<transaction_transaction_pb.GetUserTransactionsRequest, transaction_transaction_pb.GetUserTransactionsResponse>;
    getTransactionByID: grpc.handleUnaryCall<transaction_transaction_pb.TransactionID, transaction_transaction_pb.TransactionDetail>;
    createTransaction: grpc.handleUnaryCall<transaction_transaction_pb.CreateTransactionRequest, transaction_transaction_pb.TransactionDetail>;
    createFundTransfer: grpc.handleUnaryCall<transaction_transaction_pb.CreateFundTransferRequest, transaction_transaction_pb.FundTransferResponse>;
    updateTransaction: grpc.handleUnaryCall<transaction_transaction_pb.UpdateTransactionRequest, transaction_transaction_pb.TransactionDetail>;
    deleteTransaction: grpc.handleUnaryCall<transaction_transaction_pb.TransactionID, transaction_transaction_pb.TransactionDetail>;
    getCategories: grpc.handleUnaryCall<transaction_transaction_pb.GetCategoriesRequest, transaction_transaction_pb.GetCategoriesResponse>;
    getAttachmentsByTransactionID: grpc.handleUnaryCall<transaction_transaction_pb.TransactionID, transaction_transaction_pb.GetAttachmentsResponse>;
    createAttachment: grpc.handleUnaryCall<transaction_transaction_pb.CreateAttachmentRequest, transaction_transaction_pb.Attachment>;
    deleteAttachment: grpc.handleUnaryCall<transaction_transaction_pb.AttachmentID, transaction_transaction_pb.Attachment>;
}

export interface ITransactionServiceClient {
    getTransactions(request: transaction_transaction_pb.GetTransactionOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
    getTransactions(request: transaction_transaction_pb.GetTransactionOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
    getUserTransactions(request: transaction_transaction_pb.GetUserTransactionsRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    getUserTransactions(request: transaction_transaction_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    getUserTransactions(request: transaction_transaction_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    getTransactionByID(request: transaction_transaction_pb.TransactionID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    getTransactionByID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    getTransactionByID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    createTransaction(request: transaction_transaction_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    createTransaction(request: transaction_transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    createTransaction(request: transaction_transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    createFundTransfer(request: transaction_transaction_pb.CreateFundTransferRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.FundTransferResponse) => void): grpc.ClientUnaryCall;
    createFundTransfer(request: transaction_transaction_pb.CreateFundTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.FundTransferResponse) => void): grpc.ClientUnaryCall;
    createFundTransfer(request: transaction_transaction_pb.CreateFundTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.FundTransferResponse) => void): grpc.ClientUnaryCall;
    updateTransaction(request: transaction_transaction_pb.UpdateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    updateTransaction(request: transaction_transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    updateTransaction(request: transaction_transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: transaction_transaction_pb.TransactionID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    getCategories(request: transaction_transaction_pb.GetCategoriesRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getCategories(request: transaction_transaction_pb.GetCategoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getCategories(request: transaction_transaction_pb.GetCategoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    getAttachmentsByTransactionID(request: transaction_transaction_pb.TransactionID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetAttachmentsResponse) => void): grpc.ClientUnaryCall;
    getAttachmentsByTransactionID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetAttachmentsResponse) => void): grpc.ClientUnaryCall;
    getAttachmentsByTransactionID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetAttachmentsResponse) => void): grpc.ClientUnaryCall;
    createAttachment(request: transaction_transaction_pb.CreateAttachmentRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    createAttachment(request: transaction_transaction_pb.CreateAttachmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    createAttachment(request: transaction_transaction_pb.CreateAttachmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    deleteAttachment(request: transaction_transaction_pb.AttachmentID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    deleteAttachment(request: transaction_transaction_pb.AttachmentID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    deleteAttachment(request: transaction_transaction_pb.AttachmentID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
}

export class TransactionServiceClient extends grpc.Client implements ITransactionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTransactions(request: transaction_transaction_pb.GetTransactionOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
    public getTransactions(request: transaction_transaction_pb.GetTransactionOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<transaction_transaction_pb.Transaction>;
    public getUserTransactions(request: transaction_transaction_pb.GetUserTransactionsRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getUserTransactions(request: transaction_transaction_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getUserTransactions(request: transaction_transaction_pb.GetUserTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetUserTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getTransactionByID(request: transaction_transaction_pb.TransactionID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public getTransactionByID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public getTransactionByID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public createTransaction(request: transaction_transaction_pb.CreateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public createTransaction(request: transaction_transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public createTransaction(request: transaction_transaction_pb.CreateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public createFundTransfer(request: transaction_transaction_pb.CreateFundTransferRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.FundTransferResponse) => void): grpc.ClientUnaryCall;
    public createFundTransfer(request: transaction_transaction_pb.CreateFundTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.FundTransferResponse) => void): grpc.ClientUnaryCall;
    public createFundTransfer(request: transaction_transaction_pb.CreateFundTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.FundTransferResponse) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: transaction_transaction_pb.UpdateTransactionRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: transaction_transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: transaction_transaction_pb.UpdateTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: transaction_transaction_pb.TransactionID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.TransactionDetail) => void): grpc.ClientUnaryCall;
    public getCategories(request: transaction_transaction_pb.GetCategoriesRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getCategories(request: transaction_transaction_pb.GetCategoriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getCategories(request: transaction_transaction_pb.GetCategoriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetCategoriesResponse) => void): grpc.ClientUnaryCall;
    public getAttachmentsByTransactionID(request: transaction_transaction_pb.TransactionID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetAttachmentsResponse) => void): grpc.ClientUnaryCall;
    public getAttachmentsByTransactionID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetAttachmentsResponse) => void): grpc.ClientUnaryCall;
    public getAttachmentsByTransactionID(request: transaction_transaction_pb.TransactionID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.GetAttachmentsResponse) => void): grpc.ClientUnaryCall;
    public createAttachment(request: transaction_transaction_pb.CreateAttachmentRequest, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    public createAttachment(request: transaction_transaction_pb.CreateAttachmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    public createAttachment(request: transaction_transaction_pb.CreateAttachmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    public deleteAttachment(request: transaction_transaction_pb.AttachmentID, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    public deleteAttachment(request: transaction_transaction_pb.AttachmentID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
    public deleteAttachment(request: transaction_transaction_pb.AttachmentID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: transaction_transaction_pb.Attachment) => void): grpc.ClientUnaryCall;
}
