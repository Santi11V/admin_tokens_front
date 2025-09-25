import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>)
  protected title: string = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) {
    this.title = data.mode === 'create'
      ? 'Nuevo'
      : 'Editar'
  }

  onCancel(): void {
    this.dialogRef.close()
  }

  async onGeneratePin() {
    const response = await Swal.fire({
      icon: 'question',
      title: '¿Está seguro de generar un nuevo pin?',
      showCancelButton: true,
      confirmButtonText: 'Si, generar',
      confirmButtonColor: '#E30613',
      cancelButtonText: 'No, cancelar'
    })

    if (response.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: '123456',
        text: 'PIN Generado correctamente',
        showConfirmButton: false,
      })
    }    
  }
}
