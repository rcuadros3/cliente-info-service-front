import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: { tipoDocumento: string, numeroDocumento: string } = {
    tipoDocumento: '',
    numeroDocumento: '',
  };

  habilitarBoton = false;

  constructor (private router: Router) {
  }

  updateCadenaConSeparadores(): void {
    this.usuario.numeroDocumento = this.usuario.numeroDocumento.replace(/\D/g, '');
    this.usuario.numeroDocumento = this.formatWithCommas(this.usuario.numeroDocumento);
  }

  formatWithCommas(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  validateOnChange() {
    const numeroDocumentoSinComas = this.usuario.numeroDocumento.replace(/,/g, '');
    this.habilitarBoton = numeroDocumentoSinComas.length >= 8 && numeroDocumentoSinComas.length <= 11 && this.usuario.tipoDocumento !== '';
  }

  onSubmit() {
    this.router.navigate([`visualizar-datos/${this.usuario.tipoDocumento}/${this.usuario.numeroDocumento.replace(/,/g, '')}`]);
  }
}
