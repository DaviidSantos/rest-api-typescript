import express from 'express'

import { deleteUser, getAllUsers } from '../controllers/user'
import { isAuthenticated, isOwner } from '../middlewares/index'

export default (router: express.Router) => {
    router.get('/user', isAuthenticated, getAllUsers)
    router.delete('/user/delete/:id', isAuthenticated, isOwner, deleteUser)
}