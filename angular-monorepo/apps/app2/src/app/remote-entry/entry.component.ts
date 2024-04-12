import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthService } from '@angular-monorepo/auth';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  providers: [AuthService],
  selector: 'app-app2-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
