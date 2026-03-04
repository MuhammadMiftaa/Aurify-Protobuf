// package: wallet
// file: wallet/wallet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as wallet_wallet_pb from "../wallet/wallet_pb";

interface IWalletServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getWallets: IWalletServiceService_IGetWallets;
    getUserWallets: IWalletServiceService_IGetUserWallets;
    getWalletByID: IWalletServiceService_IGetWalletByID;
    createWallet: IWalletServiceService_ICreateWallet;
    updateWallet: IWalletServiceService_IUpdateWallet;
    deleteWallet: IWalletServiceService_IDeleteWallet;
    getWalletTypes: IWalletServiceService_IGetWalletTypes;
    getWalletSummary: IWalletServiceService_IGetWalletSummary;
}

interface IWalletServiceService_IGetWallets extends grpc.MethodDefinition<wallet_wallet_pb.GetWalletOptions, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/GetWallets";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<wallet_wallet_pb.GetWalletOptions>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.GetWalletOptions>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_IGetUserWallets extends grpc.MethodDefinition<wallet_wallet_pb.UserID, wallet_wallet_pb.GetUserWalletsResponse> {
    path: "/wallet.WalletService/GetUserWallets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.UserID>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.UserID>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.GetUserWalletsResponse>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.GetUserWalletsResponse>;
}
interface IWalletServiceService_IGetWalletByID extends grpc.MethodDefinition<wallet_wallet_pb.WalletID, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/GetWalletByID";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.WalletID>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.WalletID>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_ICreateWallet extends grpc.MethodDefinition<wallet_wallet_pb.CreateWalletRequest, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/CreateWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.CreateWalletRequest>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.CreateWalletRequest>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_IUpdateWallet extends grpc.MethodDefinition<wallet_wallet_pb.UpdateWalletRequest, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/UpdateWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.UpdateWalletRequest>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.UpdateWalletRequest>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_IDeleteWallet extends grpc.MethodDefinition<wallet_wallet_pb.WalletID, wallet_wallet_pb.Wallet> {
    path: "/wallet.WalletService/DeleteWallet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.WalletID>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.WalletID>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.Wallet>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.Wallet>;
}
interface IWalletServiceService_IGetWalletTypes extends grpc.MethodDefinition<wallet_wallet_pb.Empty, wallet_wallet_pb.GetWalletTypesResponse> {
    path: "/wallet.WalletService/GetWalletTypes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.Empty>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.Empty>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.GetWalletTypesResponse>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.GetWalletTypesResponse>;
}
interface IWalletServiceService_IGetWalletSummary extends grpc.MethodDefinition<wallet_wallet_pb.UserID, wallet_wallet_pb.WalletSummary> {
    path: "/wallet.WalletService/GetWalletSummary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wallet_wallet_pb.UserID>;
    requestDeserialize: grpc.deserialize<wallet_wallet_pb.UserID>;
    responseSerialize: grpc.serialize<wallet_wallet_pb.WalletSummary>;
    responseDeserialize: grpc.deserialize<wallet_wallet_pb.WalletSummary>;
}

export const WalletServiceService: IWalletServiceService;

export interface IWalletServiceServer extends grpc.UntypedServiceImplementation {
    getWallets: grpc.handleServerStreamingCall<wallet_wallet_pb.GetWalletOptions, wallet_wallet_pb.Wallet>;
    getUserWallets: grpc.handleUnaryCall<wallet_wallet_pb.UserID, wallet_wallet_pb.GetUserWalletsResponse>;
    getWalletByID: grpc.handleUnaryCall<wallet_wallet_pb.WalletID, wallet_wallet_pb.Wallet>;
    createWallet: grpc.handleUnaryCall<wallet_wallet_pb.CreateWalletRequest, wallet_wallet_pb.Wallet>;
    updateWallet: grpc.handleUnaryCall<wallet_wallet_pb.UpdateWalletRequest, wallet_wallet_pb.Wallet>;
    deleteWallet: grpc.handleUnaryCall<wallet_wallet_pb.WalletID, wallet_wallet_pb.Wallet>;
    getWalletTypes: grpc.handleUnaryCall<wallet_wallet_pb.Empty, wallet_wallet_pb.GetWalletTypesResponse>;
    getWalletSummary: grpc.handleUnaryCall<wallet_wallet_pb.UserID, wallet_wallet_pb.WalletSummary>;
}

export interface IWalletServiceClient {
    getWallets(request: wallet_wallet_pb.GetWalletOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    getWallets(request: wallet_wallet_pb.GetWalletOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    getUserWallets(request: wallet_wallet_pb.UserID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    getUserWallets(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    getUserWallets(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    getWalletByID(request: wallet_wallet_pb.WalletID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    createWallet(request: wallet_wallet_pb.CreateWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    createWallet(request: wallet_wallet_pb.CreateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    createWallet(request: wallet_wallet_pb.CreateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    updateWallet(request: wallet_wallet_pb.UpdateWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    updateWallet(request: wallet_wallet_pb.UpdateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    updateWallet(request: wallet_wallet_pb.UpdateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    deleteWallet(request: wallet_wallet_pb.WalletID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    deleteWallet(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    deleteWallet(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    getWalletTypes(request: wallet_wallet_pb.Empty, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetWalletTypesResponse) => void): grpc.ClientUnaryCall;
    getWalletTypes(request: wallet_wallet_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetWalletTypesResponse) => void): grpc.ClientUnaryCall;
    getWalletTypes(request: wallet_wallet_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetWalletTypesResponse) => void): grpc.ClientUnaryCall;
    getWalletSummary(request: wallet_wallet_pb.UserID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.WalletSummary) => void): grpc.ClientUnaryCall;
    getWalletSummary(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.WalletSummary) => void): grpc.ClientUnaryCall;
    getWalletSummary(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.WalletSummary) => void): grpc.ClientUnaryCall;
}

export class WalletServiceClient extends grpc.Client implements IWalletServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getWallets(request: wallet_wallet_pb.GetWalletOptions, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    public getWallets(request: wallet_wallet_pb.GetWalletOptions, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wallet_wallet_pb.Wallet>;
    public getUserWallets(request: wallet_wallet_pb.UserID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    public getUserWallets(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    public getUserWallets(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetUserWalletsResponse) => void): grpc.ClientUnaryCall;
    public getWalletByID(request: wallet_wallet_pb.WalletID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWalletByID(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public createWallet(request: wallet_wallet_pb.CreateWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public createWallet(request: wallet_wallet_pb.CreateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public createWallet(request: wallet_wallet_pb.CreateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public updateWallet(request: wallet_wallet_pb.UpdateWalletRequest, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public updateWallet(request: wallet_wallet_pb.UpdateWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public updateWallet(request: wallet_wallet_pb.UpdateWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public deleteWallet(request: wallet_wallet_pb.WalletID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public deleteWallet(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public deleteWallet(request: wallet_wallet_pb.WalletID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.Wallet) => void): grpc.ClientUnaryCall;
    public getWalletTypes(request: wallet_wallet_pb.Empty, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetWalletTypesResponse) => void): grpc.ClientUnaryCall;
    public getWalletTypes(request: wallet_wallet_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetWalletTypesResponse) => void): grpc.ClientUnaryCall;
    public getWalletTypes(request: wallet_wallet_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.GetWalletTypesResponse) => void): grpc.ClientUnaryCall;
    public getWalletSummary(request: wallet_wallet_pb.UserID, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.WalletSummary) => void): grpc.ClientUnaryCall;
    public getWalletSummary(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.WalletSummary) => void): grpc.ClientUnaryCall;
    public getWalletSummary(request: wallet_wallet_pb.UserID, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wallet_wallet_pb.WalletSummary) => void): grpc.ClientUnaryCall;
}
