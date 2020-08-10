import * as functions from 'firebase-functions'
import { Response } from 'firebase-functions'

export const BadRequest = (res: functions.Response, errors: string[]): Response =>
  res.status(400).json({
    statusCode: 400,
    description: 'Bad Request',
    errors
  })

export const OkRequest = (res: functions.Response, id: string, url: string): Response =>
  res.status(200).json({
    statusCode: 200,
    description: 'Successful Request',
    id,
    url
  })
