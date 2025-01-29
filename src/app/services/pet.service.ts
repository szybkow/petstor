import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPet } from '../interfaces/ipet';
import { Status } from '../enums/status';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private http = inject(HttpClient);

  getPets(status: Status[]): Observable<IPet[]> {
    return this.http.get<IPet[]>(
      'https://petstore.swagger.io/v2/pet/findByStatus',
      { params: { status: status.join(',') } }
    );
  }

  getPetById(id: number): Observable<IPet> {
    return this.http.get<IPet>('https://petstore.swagger.io/v2/pet/' + id);
  }

  addPet(pet: IPet): Observable<IPet> {
    return this.http.post<IPet>('https://petstore.swagger.io/v2/pet', pet);
  }

  updatePet(pet: IPet): Observable<IPet> {
    return this.http.put<IPet>('https://petstore.swagger.io/v2/pet', pet);
  }

  deletePet(id: number): Observable<void> {
    return this.http.delete<void>('https://petstore.swagger.io/v2/pet/' + id);
  }
}
