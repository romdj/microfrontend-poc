import { Injectable } from '@angular/core';
import { Observable, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  name = 'Romain Lussier' + Math.floor(Math.random() * 101);
}
