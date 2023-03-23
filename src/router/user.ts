import express from 'express'

import { getAllUsers } from '../controllers/user'

export default (router: express.Router) => {
    router.get('/user', getAllUsers)
}