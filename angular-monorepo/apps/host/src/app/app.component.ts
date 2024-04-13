import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthService } from '@angular-monorepo/auth';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogOverviewExampleDialogComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    CommonModule,
    MatSlideToggleModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';
  name = this.authService.name;

  openDialog(): void {
    this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: { name: this.name },
    });
  }

  constructor(private authService: AuthService, public dialog: MatDialog) {}
}
