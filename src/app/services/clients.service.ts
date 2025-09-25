import { inject, Injectable, signal } from '@angular/core';
import { ClientDTO } from '../models/clients/client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  public clients = signal<ClientDTO[]>([]);
  
  private http = inject(HttpClient)
  private urlBase = `${environment.apiUrl}/client`

  public loadClients() {
    this.http.get<ClientDTO[]>(this.urlBase).subscribe(response => {
      console.log(response);
      this.clients.set(response)
    })
  }
}
