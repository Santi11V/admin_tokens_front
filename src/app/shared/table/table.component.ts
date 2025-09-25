import { Component, inject, Input, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2'
import { ClientDTO } from '../../models/clients/client';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input({ required: true })
  public data: ClientDTO[] = []

  displayedColumns: string[] = [
    'identificacion'
  ];

  readonly dialog = inject(MatDialog)

  openDialog(mode: string) {
    const config: MatDialogConfig = {
      width: '900px',
      disableClose: true,
      maxWidth: '1000px',
      data: { mode }
    }

    this.dialog.open(DialogComponent, config)
  }

  async onDeleteItem() {
    const response = await Swal.fire({
      title: '¿Está seguro de eliminar este cliente?',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: '#E30613',
      cancelButtonText: 'No, cancelar'
    })

    if (response.isConfirmed) {
      Swal.fire({
        toast: true,
        width: 300,
        timer: 2000,
        position: 'top-end',
        icon: 'success',
        title: 'Cliente eliminado',
        showConfirmButton: false,
      })
    }
  }
}