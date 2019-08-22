import request from 'superagent'
import config from '../config'

const logger = console.log

export const saveNote = text =>
  request
    .post(`${config.server}/`)
    .set('Access-Control-Allow-Origin', '*')
    // .set('Content-Type', 'application/json')
    .send({ text })
    .then(logger)
    .catch(logger)
