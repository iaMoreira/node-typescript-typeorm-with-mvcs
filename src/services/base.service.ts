import { Repository } from "typeorm";

abstract class BaseService<Entity> {
  protected repository = new Repository<Entity>() ;

  public async findAll() : Promise<Entity[]>{
    return await this.repository.find()
  }

  public async store(body: any) : Promise<Entity> {
    const model = await this.repository.save(body);
    console.log(model.id);  // regra de negócio
    return model;
  }

  public async findOne(id: number|string ) : Promise<Entity> {
    return await this.repository.findOne(id);
  }

  public async update(id: number| string, body: any) {
    await this.repository.update(id, body);
    return await this.repository.findOne(id);
  }

  public async delete(id: number| string) {
    return await this.repository.delete(id);
  }
}

export default BaseService;