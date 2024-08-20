import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; 


export const signup = async (req, res, next) => {
const { username, email, password } = req.body;
const hashedpassword = bcryptjs.hashSync(password, 10);
const newUser = new User ({ username, email, password: hashedpassword });
try {
    await newUser.save()
    res.status(201).json ('user created successfully!');

    }catch (error){
    next(error);
}
};
