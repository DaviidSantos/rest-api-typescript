import express from 'express'

import { getAllUsers } from '../controllers/user'
import { isAuthenticated } from '../middlewares/index'

export default (router: express.Router) => {
    router.get('/user', isAuthenticated, getAllUsers)
}