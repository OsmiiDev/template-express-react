import {expressServer} from '../index.js';

export type ApiRouteMethod = 'get' | 'post' | 'put' | 'delete';
// function decorator for registring API route
export const ApiRoute = (path: string, method: ApiRouteMethod) => {
  console.log('Registered API route', path, method);
  return (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => {
    expressServer[method](`/api${path}`, (req, res) => {
      descriptor.value(req, res);
    });
  };
};
/**
 * a
 */
export class a {
/**
 * @param {object} _req
 * @param {object} _res
 */
  @ApiRoute('/meeting/create', 'post')
  createMeeting(_req: unknown, _res: unknown) {
    console.log('received create meeting request');
  }
}
