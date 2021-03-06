import { CreateSignedURLRequest } from '../requests/createSignedUrl';
import * as AWS from 'aws-sdk';
import * as AWSXRay from 'aws-xray-sdk';

const XAWS = AWSXRay.captureAWS(AWS);

export default class TodosStorage {
    constructor(
        private readonly todosStorage = process.env.S3_BUCKET,
        private readonly s3 = new XAWS.S3({ signatureVersion: 'v4'})
    ) {}

    getBucketName() {
        return this.todosStorage;
    }

    async getPresignedUploadURL(createSignedUrlRequest: CreateSignedURLRequest) {
        return await this.s3.getSignedUrl('putObject', createSignedUrlRequest);
    }
}