// package: profile
// file: profile/profile.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetProfileRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
    static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
    export type AsObject = {
        userId: string,
    }
}

export class Profile extends jspb.Message { 
    getId(): string;
    setId(value: string): Profile;
    getUserId(): string;
    setUserId(value: string): Profile;
    getFullname(): string;
    setFullname(value: string): Profile;
    getPhotoUrl(): string;
    setPhotoUrl(value: string): Profile;
    getCreatedAt(): string;
    setCreatedAt(value: string): Profile;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Profile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Profile.AsObject;
    static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
    export type AsObject = {
        id: string,
        userId: string,
        fullname: string,
        photoUrl: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class CreateProfileRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateProfileRequest;
    getFullname(): string;
    setFullname(value: string): CreateProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProfileRequest): CreateProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProfileRequest;
    static deserializeBinaryFromReader(message: CreateProfileRequest, reader: jspb.BinaryReader): CreateProfileRequest;
}

export namespace CreateProfileRequest {
    export type AsObject = {
        userId: string,
        fullname: string,
    }
}

export class UpdateProfileRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdateProfileRequest;
    getFullname(): string;
    setFullname(value: string): UpdateProfileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
    static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
    export type AsObject = {
        userId: string,
        fullname: string,
    }
}

export class UploadProfilePhotoRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UploadProfilePhotoRequest;
    getBase64Image(): string;
    setBase64Image(value: string): UploadProfilePhotoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadProfilePhotoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadProfilePhotoRequest): UploadProfilePhotoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadProfilePhotoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadProfilePhotoRequest;
    static deserializeBinaryFromReader(message: UploadProfilePhotoRequest, reader: jspb.BinaryReader): UploadProfilePhotoRequest;
}

export namespace UploadProfilePhotoRequest {
    export type AsObject = {
        userId: string,
        base64Image: string,
    }
}

export class UploadProfilePhotoResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): UploadProfilePhotoResponse;
    getPhotoUrl(): string;
    setPhotoUrl(value: string): UploadProfilePhotoResponse;
    getMessage(): string;
    setMessage(value: string): UploadProfilePhotoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadProfilePhotoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadProfilePhotoResponse): UploadProfilePhotoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadProfilePhotoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadProfilePhotoResponse;
    static deserializeBinaryFromReader(message: UploadProfilePhotoResponse, reader: jspb.BinaryReader): UploadProfilePhotoResponse;
}

export namespace UploadProfilePhotoResponse {
    export type AsObject = {
        success: boolean,
        photoUrl: string,
        message: string,
    }
}

export class DeleteProfilePhotoRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): DeleteProfilePhotoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProfilePhotoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProfilePhotoRequest): DeleteProfilePhotoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProfilePhotoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProfilePhotoRequest;
    static deserializeBinaryFromReader(message: DeleteProfilePhotoRequest, reader: jspb.BinaryReader): DeleteProfilePhotoRequest;
}

export namespace DeleteProfilePhotoRequest {
    export type AsObject = {
        userId: string,
    }
}

export class DeleteProfilePhotoResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteProfilePhotoResponse;
    getMessage(): string;
    setMessage(value: string): DeleteProfilePhotoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProfilePhotoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProfilePhotoResponse): DeleteProfilePhotoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProfilePhotoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProfilePhotoResponse;
    static deserializeBinaryFromReader(message: DeleteProfilePhotoResponse, reader: jspb.BinaryReader): DeleteProfilePhotoResponse;
}

export namespace DeleteProfilePhotoResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}
