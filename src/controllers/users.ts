import { Users } from '../../data';
import { Request, Response } from 'express';

const getUsers = (req: Request, res: Response) => {
    res.status(200).send(Users);
}

const getUserById = (req: Request, res: Response) => {
    const id: any = req.params.id;
    try {
        const user = Users.find(u => u.id == id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const createUser = (req: Request, res: Response) => {
    try {
        const { username, city } = req.body;

        const id = Users.length + 1;
        const newUser = {
            id: id,
            username: username,
            city: city
        }
        Users.push(newUser);

        res.status(201).json(newUser); // Status code 201 indicates 'Created'
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateUser = (req: Request, res: Response) => {
    const id: any = req.params.id;
    const { username, city } = req.body;

    try {
        const user = Users.find(u => u.id == id);

        if (user) {
            user.username = username;
            user.city = city;
            res.status(200).json({ message: 'User updated successfully', user });
        } else {
            res.status(404).json({ message: 'No user found with the provided ID' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteUser = (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    try {
        const userIndex = Users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            Users.splice(userIndex, 1);
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'No user found with the provided ID' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}






export default { getUsers, getUserById, createUser, updateUser, deleteUser }