// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var profile_profile_pb = require('../profile/profile_pb.js');

function serialize_profile_CreateProfileRequest(arg) {
  if (!(arg instanceof profile_profile_pb.CreateProfileRequest)) {
    throw new Error('Expected argument of type profile.CreateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_CreateProfileRequest(buffer_arg) {
  return profile_profile_pb.CreateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_DeleteProfilePhotoRequest(arg) {
  if (!(arg instanceof profile_profile_pb.DeleteProfilePhotoRequest)) {
    throw new Error('Expected argument of type profile.DeleteProfilePhotoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_DeleteProfilePhotoRequest(buffer_arg) {
  return profile_profile_pb.DeleteProfilePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_DeleteProfilePhotoResponse(arg) {
  if (!(arg instanceof profile_profile_pb.DeleteProfilePhotoResponse)) {
    throw new Error('Expected argument of type profile.DeleteProfilePhotoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_DeleteProfilePhotoResponse(buffer_arg) {
  return profile_profile_pb.DeleteProfilePhotoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_GetProfileRequest(arg) {
  if (!(arg instanceof profile_profile_pb.GetProfileRequest)) {
    throw new Error('Expected argument of type profile.GetProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_GetProfileRequest(buffer_arg) {
  return profile_profile_pb.GetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_Profile(arg) {
  if (!(arg instanceof profile_profile_pb.Profile)) {
    throw new Error('Expected argument of type profile.Profile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_Profile(buffer_arg) {
  return profile_profile_pb.Profile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_UpdateProfileRequest(arg) {
  if (!(arg instanceof profile_profile_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type profile.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_UpdateProfileRequest(buffer_arg) {
  return profile_profile_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_UploadProfilePhotoRequest(arg) {
  if (!(arg instanceof profile_profile_pb.UploadProfilePhotoRequest)) {
    throw new Error('Expected argument of type profile.UploadProfilePhotoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_UploadProfilePhotoRequest(buffer_arg) {
  return profile_profile_pb.UploadProfilePhotoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_profile_UploadProfilePhotoResponse(arg) {
  if (!(arg instanceof profile_profile_pb.UploadProfilePhotoResponse)) {
    throw new Error('Expected argument of type profile.UploadProfilePhotoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_profile_UploadProfilePhotoResponse(buffer_arg) {
  return profile_profile_pb.UploadProfilePhotoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ═══════════════════════════════════════════════
// Profile Service
// ═══════════════════════════════════════════════
//
var ProfileServiceService = exports.ProfileServiceService = {
  // Get user profile
getProfile: {
    path: '/profile.ProfileService/GetProfile',
    requestStream: false,
    responseStream: false,
    requestType: profile_profile_pb.GetProfileRequest,
    responseType: profile_profile_pb.Profile,
    requestSerialize: serialize_profile_GetProfileRequest,
    requestDeserialize: deserialize_profile_GetProfileRequest,
    responseSerialize: serialize_profile_Profile,
    responseDeserialize: deserialize_profile_Profile,
  },
  // Create user profile
createProfile: {
    path: '/profile.ProfileService/CreateProfile',
    requestStream: false,
    responseStream: false,
    requestType: profile_profile_pb.CreateProfileRequest,
    responseType: profile_profile_pb.Profile,
    requestSerialize: serialize_profile_CreateProfileRequest,
    requestDeserialize: deserialize_profile_CreateProfileRequest,
    responseSerialize: serialize_profile_Profile,
    responseDeserialize: deserialize_profile_Profile,
  },
  // Update user profile (fullname, etc)
updateProfile: {
    path: '/profile.ProfileService/UpdateProfile',
    requestStream: false,
    responseStream: false,
    requestType: profile_profile_pb.UpdateProfileRequest,
    responseType: profile_profile_pb.Profile,
    requestSerialize: serialize_profile_UpdateProfileRequest,
    requestDeserialize: deserialize_profile_UpdateProfileRequest,
    responseSerialize: serialize_profile_Profile,
    responseDeserialize: deserialize_profile_Profile,
  },
  // Upload profile photo
uploadProfilePhoto: {
    path: '/profile.ProfileService/UploadProfilePhoto',
    requestStream: false,
    responseStream: false,
    requestType: profile_profile_pb.UploadProfilePhotoRequest,
    responseType: profile_profile_pb.UploadProfilePhotoResponse,
    requestSerialize: serialize_profile_UploadProfilePhotoRequest,
    requestDeserialize: deserialize_profile_UploadProfilePhotoRequest,
    responseSerialize: serialize_profile_UploadProfilePhotoResponse,
    responseDeserialize: deserialize_profile_UploadProfilePhotoResponse,
  },
  // Delete profile photo
deleteProfilePhoto: {
    path: '/profile.ProfileService/DeleteProfilePhoto',
    requestStream: false,
    responseStream: false,
    requestType: profile_profile_pb.DeleteProfilePhotoRequest,
    responseType: profile_profile_pb.DeleteProfilePhotoResponse,
    requestSerialize: serialize_profile_DeleteProfilePhotoRequest,
    requestDeserialize: deserialize_profile_DeleteProfilePhotoRequest,
    responseSerialize: serialize_profile_DeleteProfilePhotoResponse,
    responseDeserialize: deserialize_profile_DeleteProfilePhotoResponse,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService, 'ProfileService');
