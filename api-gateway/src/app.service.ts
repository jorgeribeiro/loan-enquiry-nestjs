import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject("LOAN_SERVICE") private readonly loanService: ClientProxy
  ) {}

  getLoanById(id: number) {
    return this.loanService.send({ cmd: "getLoanById"}, id);
  }

  getDefaultedLoansByYear(year: number, currency?: string) {
    return this.loanService.send({ cmd: "getDefaultedLoansByYear"}, { year, currency });
  }

  getDefaultDistribution(startDate: string, endDate: string) {
    return this.loanService.send({ cmd: "getDefaultDistribution"}, { startDate, endDate } );
  }

  getLoansByYear(year: number, dft?: string, job?: string, marital?: string, education?: string) {
    return this.loanService.send({ cmd: "getLoansByYear"}, { year, dft, job, marital, education });
  }
}