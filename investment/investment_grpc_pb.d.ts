// package: investment
// file: investment/investment.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as investment_investment_pb from "../investment/investment_pb";

interface IInvestmentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getInvestments: IInvestmentServiceService_IGetInvestments;
    getUserInvestments: IInvestmentServiceService_IGetUserInvestments;
    getUserInvestmentList: IInvestmentServiceService_IGetUserInvestmentList;
    getInvestmentDetail: IInvestmentServiceService_IGetInvestmentDetail;
    createInvestment: IInvestmentServiceService_ICreateInvestment;
    sellInvestment: IInvestmentServiceService_ISellInvestment;
    getInvestmentSummary: IInvestmentServiceService_IGetInvestmentSummary;
    getAssetCodes: IInvestmentServiceService_IGetAssetCodes;
    listAssetCodes: IInvestmentServiceService_IListAssetCodes;
    getAssetCodeDetail: IInvestmentServiceService_IGetAssetCodeDetail;
}

interface IInvestmentServiceService_IGetInvestments extends grpc.MethodDefinition<investment_investment_pb.GetInvestmentOptions, investment_investment_pb.Investment> {
    path: "/investment.InvestmentService/GetInvestments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<investment_investment_pb.GetInvestmentOptions>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.GetInvestmentOptions>;
    responseSerialize: grpc.serialize<investment_investment_pb.Investment>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.Investment>;
}
interface IInvestmentServiceService_IGetUserInvestments extends grpc.MethodDefinition<investment_investment_pb.UserID, investment_investment_pb.Investment> {
    path: "/investment.InvestmentService/GetUserInvestments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<investment_investment_pb.UserID>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.UserID>;
    responseSerialize: grpc.serialize<investment_investment_pb.Investment>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.Investment>;
}
interface IInvestmentServiceService_IGetUserInvestmentList extends grpc.MethodDefinition<investment_investment_pb.GetUserInvestmentListRequest, investment_investment_pb.GetUserInvestmentListResponse> {
    path: "/investment.InvestmentService/GetUserInvestmentList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.GetUserInvestmentListRequest>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.GetUserInvestmentListRequest>;
    responseSerialize: grpc.serialize<investment_investment_pb.GetUserInvestmentListResponse>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.GetUserInvestmentListResponse>;
}
interface IInvestmentServiceService_IGetInvestmentDetail extends grpc.MethodDefinition<investment_investment_pb.GetInvestmentDetailRequest, investment_investment_pb.Investment> {
    path: "/investment.InvestmentService/GetInvestmentDetail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.GetInvestmentDetailRequest>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.GetInvestmentDetailRequest>;
    responseSerialize: grpc.serialize<investment_investment_pb.Investment>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.Investment>;
}
interface IInvestmentServiceService_ICreateInvestment extends grpc.MethodDefinition<investment_investment_pb.CreateInvestmentRequest, investment_investment_pb.Investment> {
    path: "/investment.InvestmentService/CreateInvestment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.CreateInvestmentRequest>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.CreateInvestmentRequest>;
    responseSerialize: grpc.serialize<investment_investment_pb.Investment>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.Investment>;
}
interface IInvestmentServiceService_ISellInvestment extends grpc.MethodDefinition<investment_investment_pb.SellInvestmentRequest, investment_investment_pb.SellInvestmentResponse> {
    path: "/investment.InvestmentService/SellInvestment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.SellInvestmentRequest>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.SellInvestmentRequest>;
    responseSerialize: grpc.serialize<investment_investment_pb.SellInvestmentResponse>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.SellInvestmentResponse>;
}
interface IInvestmentServiceService_IGetInvestmentSummary extends grpc.MethodDefinition<investment_investment_pb.UserID, investment_investment_pb.InvestmentSummaryResponse> {
    path: "/investment.InvestmentService/GetInvestmentSummary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.UserID>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.UserID>;
    responseSerialize: grpc.serialize<investment_investment_pb.InvestmentSummaryResponse>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.InvestmentSummaryResponse>;
}
interface IInvestmentServiceService_IGetAssetCodes extends grpc.MethodDefinition<investment_investment_pb.Empty, investment_investment_pb.GetAssetCodesResponse> {
    path: "/investment.InvestmentService/GetAssetCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.Empty>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.Empty>;
    responseSerialize: grpc.serialize<investment_investment_pb.GetAssetCodesResponse>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.GetAssetCodesResponse>;
}
interface IInvestmentServiceService_IListAssetCodes extends grpc.MethodDefinition<investment_investment_pb.ListAssetCodesRequest, investment_investment_pb.ListAssetCodesResponse> {
    path: "/investment.InvestmentService/ListAssetCodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.ListAssetCodesRequest>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.ListAssetCodesRequest>;
    responseSerialize: grpc.serialize<investment_investment_pb.ListAssetCodesResponse>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.ListAssetCodesResponse>;
}
interface IInvestmentServiceService_IGetAssetCodeDetail extends grpc.MethodDefinition<investment_investment_pb.AssetCodeID, investment_investment_pb.AssetCode> {
    path: "/investment.InvestmentService/GetAssetCodeDetail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<investment_investment_pb.AssetCodeID>;
    requestDeserialize: grpc.deserialize<investment_investment_pb.AssetCodeID>;
    responseSerialize: grpc.serialize<investment_investment_pb.AssetCode>;
    responseDeserialize: grpc.deserialize<investment_investment_pb.AssetCode>;
}

export const InvestmentServiceService: IInvestmentServiceService;

export interface IInvestmentServiceServer extends grpc.UntypedServiceImplementation {
    getInvestments: grpc.handleServerStreamingCall<investment_investment_pb.GetInvestmentOptions, investment_investment_pb.Investment>;
    getUserInvestments: grpc.handleServerStreamingCall<investment_investment_pb.UserID, investment_investment_pb.Investment>;
    getUserInvestmentList: grpc.handleUnaryCall<investment_investment_pb.GetUserInvestmentListRequest, investment_investment_pb.GetUserInvestmentListResponse>;
    getInvestmentDetail: grpc.handleUnaryCall<investment_investment_pb.GetInvestmentDetailRequest, investment_investment_pb.Investment>;
    createInvestment: grpc.handleUnaryCall<investment_investment_pb.CreateInvestmentRequest, investment_investment_pb.Investment>;
    sellInvestment: grpc.handleUnaryCall<investment_investment_pb.SellInvestmentRequest, investment_investment_pb.SellInvestmentResponse>;
    getInvestmentSummary: grpc.handleUnaryCall<investment_investment_pb.UserID, investment_investment_pb.InvestmentSummaryResponse>;
    getAssetCodes: grpc.handleUnaryCall<investment_investment_pb.Empty, investment_investment_pb.GetAssetCodesResponse>;
    listAssetCodes: grpc.handleUnaryCall<investment_investment_pb.ListAssetCodesRequest, investment_investment_pb.ListAssetCodesResponse>;
    getAssetCodeDetail: grpc.handleUnaryCall<investment_investment_pb.AssetCodeID, investment_investment_pb.AssetCode>;
}

export interface IInvestmentServiceClient {
    getInvestments(request: investment_investment_pb.GetInvestmentOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getInvestments(request: investment_investment_pb.GetInvestmentOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getUserInvestments(request: investment_investment_pb.UserID, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getUserInvestments(request: investment_investment_pb.UserID, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    getUserInvestmentList(request: investment_investment_pb.GetUserInvestmentListRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetUserInvestmentListResponse) => void): grpc.ClientUnaryCall;
    getUserInvestmentList(request: investment_investment_pb.GetUserInvestmentListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetUserInvestmentListResponse) => void): grpc.ClientUnaryCall;
    getUserInvestmentList(request: investment_investment_pb.GetUserInvestmentListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetUserInvestmentListResponse) => void): grpc.ClientUnaryCall;
    getInvestmentDetail(request: investment_investment_pb.GetInvestmentDetailRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    getInvestmentDetail(request: investment_investment_pb.GetInvestmentDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    getInvestmentDetail(request: investment_investment_pb.GetInvestmentDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    createInvestment(request: investment_investment_pb.CreateInvestmentRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    createInvestment(request: investment_investment_pb.CreateInvestmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    createInvestment(request: investment_investment_pb.CreateInvestmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    sellInvestment(request: investment_investment_pb.SellInvestmentRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.SellInvestmentResponse) => void): grpc.ClientUnaryCall;
    sellInvestment(request: investment_investment_pb.SellInvestmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.SellInvestmentResponse) => void): grpc.ClientUnaryCall;
    sellInvestment(request: investment_investment_pb.SellInvestmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.SellInvestmentResponse) => void): grpc.ClientUnaryCall;
    getInvestmentSummary(request: investment_investment_pb.UserID, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.InvestmentSummaryResponse) => void): grpc.ClientUnaryCall;
    getInvestmentSummary(request: investment_investment_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.InvestmentSummaryResponse) => void): grpc.ClientUnaryCall;
    getInvestmentSummary(request: investment_investment_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.InvestmentSummaryResponse) => void): grpc.ClientUnaryCall;
    getAssetCodes(request: investment_investment_pb.Empty, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetAssetCodesResponse) => void): grpc.ClientUnaryCall;
    getAssetCodes(request: investment_investment_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetAssetCodesResponse) => void): grpc.ClientUnaryCall;
    getAssetCodes(request: investment_investment_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetAssetCodesResponse) => void): grpc.ClientUnaryCall;
    listAssetCodes(request: investment_investment_pb.ListAssetCodesRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.ListAssetCodesResponse) => void): grpc.ClientUnaryCall;
    listAssetCodes(request: investment_investment_pb.ListAssetCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.ListAssetCodesResponse) => void): grpc.ClientUnaryCall;
    listAssetCodes(request: investment_investment_pb.ListAssetCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.ListAssetCodesResponse) => void): grpc.ClientUnaryCall;
    getAssetCodeDetail(request: investment_investment_pb.AssetCodeID, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.AssetCode) => void): grpc.ClientUnaryCall;
    getAssetCodeDetail(request: investment_investment_pb.AssetCodeID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.AssetCode) => void): grpc.ClientUnaryCall;
    getAssetCodeDetail(request: investment_investment_pb.AssetCodeID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.AssetCode) => void): grpc.ClientUnaryCall;
}

export class InvestmentServiceClient extends grpc.Client implements IInvestmentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getInvestments(request: investment_investment_pb.GetInvestmentOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getInvestments(request: investment_investment_pb.GetInvestmentOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getUserInvestments(request: investment_investment_pb.UserID, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getUserInvestments(request: investment_investment_pb.UserID, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<investment_investment_pb.Investment>;
    public getUserInvestmentList(request: investment_investment_pb.GetUserInvestmentListRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetUserInvestmentListResponse) => void): grpc.ClientUnaryCall;
    public getUserInvestmentList(request: investment_investment_pb.GetUserInvestmentListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetUserInvestmentListResponse) => void): grpc.ClientUnaryCall;
    public getUserInvestmentList(request: investment_investment_pb.GetUserInvestmentListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetUserInvestmentListResponse) => void): grpc.ClientUnaryCall;
    public getInvestmentDetail(request: investment_investment_pb.GetInvestmentDetailRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    public getInvestmentDetail(request: investment_investment_pb.GetInvestmentDetailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    public getInvestmentDetail(request: investment_investment_pb.GetInvestmentDetailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    public createInvestment(request: investment_investment_pb.CreateInvestmentRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    public createInvestment(request: investment_investment_pb.CreateInvestmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    public createInvestment(request: investment_investment_pb.CreateInvestmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.Investment) => void): grpc.ClientUnaryCall;
    public sellInvestment(request: investment_investment_pb.SellInvestmentRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.SellInvestmentResponse) => void): grpc.ClientUnaryCall;
    public sellInvestment(request: investment_investment_pb.SellInvestmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.SellInvestmentResponse) => void): grpc.ClientUnaryCall;
    public sellInvestment(request: investment_investment_pb.SellInvestmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.SellInvestmentResponse) => void): grpc.ClientUnaryCall;
    public getInvestmentSummary(request: investment_investment_pb.UserID, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.InvestmentSummaryResponse) => void): grpc.ClientUnaryCall;
    public getInvestmentSummary(request: investment_investment_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.InvestmentSummaryResponse) => void): grpc.ClientUnaryCall;
    public getInvestmentSummary(request: investment_investment_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.InvestmentSummaryResponse) => void): grpc.ClientUnaryCall;
    public getAssetCodes(request: investment_investment_pb.Empty, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetAssetCodesResponse) => void): grpc.ClientUnaryCall;
    public getAssetCodes(request: investment_investment_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetAssetCodesResponse) => void): grpc.ClientUnaryCall;
    public getAssetCodes(request: investment_investment_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.GetAssetCodesResponse) => void): grpc.ClientUnaryCall;
    public listAssetCodes(request: investment_investment_pb.ListAssetCodesRequest, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.ListAssetCodesResponse) => void): grpc.ClientUnaryCall;
    public listAssetCodes(request: investment_investment_pb.ListAssetCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.ListAssetCodesResponse) => void): grpc.ClientUnaryCall;
    public listAssetCodes(request: investment_investment_pb.ListAssetCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.ListAssetCodesResponse) => void): grpc.ClientUnaryCall;
    public getAssetCodeDetail(request: investment_investment_pb.AssetCodeID, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.AssetCode) => void): grpc.ClientUnaryCall;
    public getAssetCodeDetail(request: investment_investment_pb.AssetCodeID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.AssetCode) => void): grpc.ClientUnaryCall;
    public getAssetCodeDetail(request: investment_investment_pb.AssetCodeID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: investment_investment_pb.AssetCode) => void): grpc.ClientUnaryCall;
}
