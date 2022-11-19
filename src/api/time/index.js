import { Router } from 'express'
import { middleware as query } from 'querymen'
import { magicalTime } from './controller'

const router = new Router()

/**
 * @api {post} /time magicalTime time
 * @apiName magicalTime
 * @apiGroup Time
 * @apiSuccess {Object} time Time's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Time not found.
 */
router.post('/verify/magicalTime',
  magicalTime)

export default router
