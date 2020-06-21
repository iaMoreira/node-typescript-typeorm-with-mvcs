import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import BaseController from './base.controller';
import UserService from '../services/user.service';
 
class UserController extends BaseController<User> {
  
  constructor() {
    super();
    this.intializeRoutes("/users");
    this.service = new UserService();
  }
 
}
 
export default UserController;