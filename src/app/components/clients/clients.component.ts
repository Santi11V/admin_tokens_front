import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from '../../shared/table/table.component';
import { ClientsService } from '../../services/clients.service';
import { ClientDTO } from '../../models/clients/client';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [MatCardModule, TableComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  private clientService = inject(ClientsService)

  public clients = this.clientService.clients

  ngOnInit(): void {
    this.clientService.loadClients()
  }
}
