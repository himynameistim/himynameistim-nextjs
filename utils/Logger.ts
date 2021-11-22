// Logger.ts
import { Container, Service } from 'typedi'
import { ConsoleLogger } from "./ConsoleLogger";

export function Logger() {
  return function (object: any, propertyName: string, index?: number) {
    const logger = new ConsoleLogger();
    Container.registerHandler({ object, propertyName, index, value: containerInstance => logger });
  };
}