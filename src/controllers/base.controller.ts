import * as express from 'express';
import HttpException from '../exceptions/http.exception';
import BaseService from '../services/base.service';
 
abstract class BaseController<E> {
  protected path = '/';
  public router = express.Router();
  public service: BaseService<E>;

  public intializeRoutes(path: string) {
    this.path = path;
    this.router.get(this.path, this.index);
    this.router.post(this.path, this.store);
    this.router.get(`${this.path}/:id`, this.show);
    this.router.put(`${this.path}/:id`, this.update);
    this.router.delete(`${this.path}/:id`, this.delete);
  }
 
  public index = async(request: express.Request, response: express.Response) => {
    var models = await this.service.findAll();
    response.send(models);
  }
  
  public store = async (request: express.Request, response: express.Response) => {
    const body = request.body;
    const model = await this.service.store(body);
    response.send(model);
  }

  public show = async(request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const model = await this.service.findOne(id);
    if (model) {
      response.send(model);
    } else {
      next(new HttpException(404, "not found"));
    }
  }

  public update = async(request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const body = request.body;
    const model = await this.service.update(id, body);
    if (model) {
      response.send(model);
    } else {
      next(new HttpException(404, "not found"));
    }
  }

  public delete = async(request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const deleteResponse = await this.service.delete(id);
    if (deleteResponse) {
      response.sendStatus(204);
     } else {
      next(new HttpException(404, "not found"));
    }
  }
}
 
export default BaseController;