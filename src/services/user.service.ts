import BaseService from "./base.service";
import { User } from "../entity/User";
import { getRepository } from "typeorm";

class UserService extends BaseService<User> {
  constructor() {
    super();
    this.repository = getRepository(User);
  }

  public async store(body: any) {
    // body.password = bcrypt(body.password);
    return super.store(body);
  }  
}

export default UserService;