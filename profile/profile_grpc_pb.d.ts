// package: profile
// file: profile/profile.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as profile_profile_pb from "../profile/profile_pb";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProfile: IProfileServiceService_IGetProfile;
    createProfile: IProfileServiceService_ICreateProfile;
    updateProfile: IProfileServiceService_IUpdateProfile;
    uploadProfilePhoto: IProfileServiceService_IUploadProfilePhoto;
    deleteProfilePhoto: IProfileServiceService_IDeleteProfilePhoto;
}

interface IProfileServiceService_IGetProfile extends grpc.MethodDefinition<profile_profile_pb.GetProfileRequest, profile_profile_pb.Profile> {
    path: "/profile.ProfileService/GetProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_profile_pb.GetProfileRequest>;
    requestDeserialize: grpc.deserialize<profile_profile_pb.GetProfileRequest>;
    responseSerialize: grpc.serialize<profile_profile_pb.Profile>;
    responseDeserialize: grpc.deserialize<profile_profile_pb.Profile>;
}
interface IProfileServiceService_ICreateProfile extends grpc.MethodDefinition<profile_profile_pb.CreateProfileRequest, profile_profile_pb.Profile> {
    path: "/profile.ProfileService/CreateProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_profile_pb.CreateProfileRequest>;
    requestDeserialize: grpc.deserialize<profile_profile_pb.CreateProfileRequest>;
    responseSerialize: grpc.serialize<profile_profile_pb.Profile>;
    responseDeserialize: grpc.deserialize<profile_profile_pb.Profile>;
}
interface IProfileServiceService_IUpdateProfile extends grpc.MethodDefinition<profile_profile_pb.UpdateProfileRequest, profile_profile_pb.Profile> {
    path: "/profile.ProfileService/UpdateProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_profile_pb.UpdateProfileRequest>;
    requestDeserialize: grpc.deserialize<profile_profile_pb.UpdateProfileRequest>;
    responseSerialize: grpc.serialize<profile_profile_pb.Profile>;
    responseDeserialize: grpc.deserialize<profile_profile_pb.Profile>;
}
interface IProfileServiceService_IUploadProfilePhoto extends grpc.MethodDefinition<profile_profile_pb.UploadProfilePhotoRequest, profile_profile_pb.UploadProfilePhotoResponse> {
    path: "/profile.ProfileService/UploadProfilePhoto";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_profile_pb.UploadProfilePhotoRequest>;
    requestDeserialize: grpc.deserialize<profile_profile_pb.UploadProfilePhotoRequest>;
    responseSerialize: grpc.serialize<profile_profile_pb.UploadProfilePhotoResponse>;
    responseDeserialize: grpc.deserialize<profile_profile_pb.UploadProfilePhotoResponse>;
}
interface IProfileServiceService_IDeleteProfilePhoto extends grpc.MethodDefinition<profile_profile_pb.DeleteProfilePhotoRequest, profile_profile_pb.DeleteProfilePhotoResponse> {
    path: "/profile.ProfileService/DeleteProfilePhoto";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<profile_profile_pb.DeleteProfilePhotoRequest>;
    requestDeserialize: grpc.deserialize<profile_profile_pb.DeleteProfilePhotoRequest>;
    responseSerialize: grpc.serialize<profile_profile_pb.DeleteProfilePhotoResponse>;
    responseDeserialize: grpc.deserialize<profile_profile_pb.DeleteProfilePhotoResponse>;
}

export const ProfileServiceService: IProfileServiceService;

export interface IProfileServiceServer extends grpc.UntypedServiceImplementation {
    getProfile: grpc.handleUnaryCall<profile_profile_pb.GetProfileRequest, profile_profile_pb.Profile>;
    createProfile: grpc.handleUnaryCall<profile_profile_pb.CreateProfileRequest, profile_profile_pb.Profile>;
    updateProfile: grpc.handleUnaryCall<profile_profile_pb.UpdateProfileRequest, profile_profile_pb.Profile>;
    uploadProfilePhoto: grpc.handleUnaryCall<profile_profile_pb.UploadProfilePhotoRequest, profile_profile_pb.UploadProfilePhotoResponse>;
    deleteProfilePhoto: grpc.handleUnaryCall<profile_profile_pb.DeleteProfilePhotoRequest, profile_profile_pb.DeleteProfilePhotoResponse>;
}

export interface IProfileServiceClient {
    getProfile(request: profile_profile_pb.GetProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    getProfile(request: profile_profile_pb.GetProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    getProfile(request: profile_profile_pb.GetProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    createProfile(request: profile_profile_pb.CreateProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    createProfile(request: profile_profile_pb.CreateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    createProfile(request: profile_profile_pb.CreateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    updateProfile(request: profile_profile_pb.UpdateProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    updateProfile(request: profile_profile_pb.UpdateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    updateProfile(request: profile_profile_pb.UpdateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    uploadProfilePhoto(request: profile_profile_pb.UploadProfilePhotoRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.UploadProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    uploadProfilePhoto(request: profile_profile_pb.UploadProfilePhotoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.UploadProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    uploadProfilePhoto(request: profile_profile_pb.UploadProfilePhotoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.UploadProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    deleteProfilePhoto(request: profile_profile_pb.DeleteProfilePhotoRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.DeleteProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    deleteProfilePhoto(request: profile_profile_pb.DeleteProfilePhotoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.DeleteProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    deleteProfilePhoto(request: profile_profile_pb.DeleteProfilePhotoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.DeleteProfilePhotoResponse) => void): grpc.ClientUnaryCall;
}

export class ProfileServiceClient extends grpc.Client implements IProfileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getProfile(request: profile_profile_pb.GetProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public getProfile(request: profile_profile_pb.GetProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public getProfile(request: profile_profile_pb.GetProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public createProfile(request: profile_profile_pb.CreateProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public createProfile(request: profile_profile_pb.CreateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public createProfile(request: profile_profile_pb.CreateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public updateProfile(request: profile_profile_pb.UpdateProfileRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public updateProfile(request: profile_profile_pb.UpdateProfileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public updateProfile(request: profile_profile_pb.UpdateProfileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.Profile) => void): grpc.ClientUnaryCall;
    public uploadProfilePhoto(request: profile_profile_pb.UploadProfilePhotoRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.UploadProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    public uploadProfilePhoto(request: profile_profile_pb.UploadProfilePhotoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.UploadProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    public uploadProfilePhoto(request: profile_profile_pb.UploadProfilePhotoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.UploadProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    public deleteProfilePhoto(request: profile_profile_pb.DeleteProfilePhotoRequest, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.DeleteProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    public deleteProfilePhoto(request: profile_profile_pb.DeleteProfilePhotoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.DeleteProfilePhotoResponse) => void): grpc.ClientUnaryCall;
    public deleteProfilePhoto(request: profile_profile_pb.DeleteProfilePhotoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: profile_profile_pb.DeleteProfilePhotoResponse) => void): grpc.ClientUnaryCall;
}
