import { Injectable } from '@angular/core';
import { Observable, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  name = 'Oleksii Filippov' + Math.floor(Math.random() * 101);
}
