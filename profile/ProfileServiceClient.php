<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Profile;

/**
 * ═══════════════════════════════════════════════
 * Profile Service
 * ═══════════════════════════════════════════════
 *
 */
class ProfileServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Get user profile
     * @param \Profile\GetProfileRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetProfile(\Profile\GetProfileRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/profile.ProfileService/GetProfile',
        $argument,
        ['\Profile\Profile', 'decode'],
        $metadata, $options);
    }

    /**
     * Create user profile
     * @param \Profile\CreateProfileRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function CreateProfile(\Profile\CreateProfileRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/profile.ProfileService/CreateProfile',
        $argument,
        ['\Profile\Profile', 'decode'],
        $metadata, $options);
    }

    /**
     * Update user profile (fullname, etc)
     * @param \Profile\UpdateProfileRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UpdateProfile(\Profile\UpdateProfileRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/profile.ProfileService/UpdateProfile',
        $argument,
        ['\Profile\Profile', 'decode'],
        $metadata, $options);
    }

    /**
     * Upload profile photo
     * @param \Profile\UploadProfilePhotoRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function UploadProfilePhoto(\Profile\UploadProfilePhotoRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/profile.ProfileService/UploadProfilePhoto',
        $argument,
        ['\Profile\UploadProfilePhotoResponse', 'decode'],
        $metadata, $options);
    }

    /**
     * Delete profile photo
     * @param \Profile\DeleteProfilePhotoRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function DeleteProfilePhoto(\Profile\DeleteProfilePhotoRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/profile.ProfileService/DeleteProfilePhoto',
        $argument,
        ['\Profile\DeleteProfilePhotoResponse', 'decode'],
        $metadata, $options);
    }

}
