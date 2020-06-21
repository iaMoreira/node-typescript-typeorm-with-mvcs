import * as express from 'express';
import * as bodyParser from 'body-parser';
import errorMiddleware from './middleware/error.middleware';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers) {
    this.app = express();
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);  
    this.initializeErrorHandling();

  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
}
 
export default App;