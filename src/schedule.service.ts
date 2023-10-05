import { Injectable, Logger } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
  number: number;
  private readonly logger = new Logger(ScheduleService.name);

  constructor(){
    this.number = 0;
  }

  @Timeout(1000)
  increaseNumber(){
    this.number;
    this.number += 1;

    this.logger.error(`Current num: ${this.number}`);
  }
}