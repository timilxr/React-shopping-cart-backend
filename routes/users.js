import express from "express";
// import User from "../models/user.model.js";

import { getUsers, getUserById, updateUser, createUser, deleteUser } from '../controllers/users.js';

const route = express.Router();

route.get('/', getUsers);

route.post('/', createUser);

route.get('/:id', getUserById);

route.post('/:id', updateUser);

route.put('/:id', deleteUser);

export default route;