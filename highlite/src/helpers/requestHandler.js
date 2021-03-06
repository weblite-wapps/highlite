import request from 'superagent'
import config from '../config'

const logger = console.log

export const save = (wisId, userId) =>
  request
    .post(`${config.server}/saveNote`)
    .set('Access-Control-Allow-Origin', '*')
    .send({ wisId, userId })
    .catch(logger)

export const update = (wisId, title, content) =>
  request
    .post(`${config.server}/updateNote`)
    .set('Access-Control-Allow-Origin', '*')
    .send({ wisId, title, content })
    .catch(logger)

export const fetch = wisId =>
  request
    // .get(`${config.server}/fetchNote/:${wisId}`)
    .get(`${config.server}/fetchNote`)
    .query({ wisId })
    .then(res => res.body)
    .catch(logger)
