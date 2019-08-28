import request from 'superagent'
import config from '../config'

const logger = console.log

export const save = (wisId, userId, text, content) =>
  request
    .post(`${config.server}/saveNote`)
    .set('Access-Control-Allow-Origin', '*')
    // .set('Content-Type', 'application/json')
    .send({ wisId, userId, text, content })
    .then(logger)
    .catch(logger)

export const fetch = wisId =>
  request
    // .get(`${config.server}/fetchNote/:${wisId}`)
    .get(`${config.server}/fetchNote`)
    .query({ wisId })
    .then(res => res.body)
    .catch(logger)
