// UserRepository.ts
import { Container, Service } from 'typedi'
import {LoggerInterface} from './LoggerInterface'
import { Logger } from './Logger';

@Service()
export class UserRepository {
  constructor(@Logger() private logger: LoggerInterface) {}
  save(user: string) {
    this.logger.log(`user ${user} ${user} has been saved.`);
  }
}