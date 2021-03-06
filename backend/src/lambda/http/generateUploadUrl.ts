import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

import { generateUploadUrl } from '../../businesslogic/logic';
import { createLogger } from '../../utils/logger'
const logger = createLogger('http')
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const signedUrl = await generateUploadUrl(event);

  logger.info(`generated url ${signedUrl}`)

  return {
    statusCode: 202,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      uploadUrl: signedUrl
    })
  };
}