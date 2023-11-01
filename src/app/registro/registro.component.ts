import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  usuario: { tipoDocumento: string; numeroDocumento: string } = {
    tipoDocumento: '',
    numeroDocumento: '',
  };

  habilitarBoton = false;

  constructor(private router: Router) {}

  updateCadenaConSeparadores(): void {
    this.usuario.numeroDocumento = this.usuario.numeroDocumento.replace(
      /\D/g,
      ''
    );
    this.usuario.numeroDocumento = this.formatWithCommas(
      this.usuario.numeroDocumento
    );
    this.validateOnChange();
  }

  formatWithCommas(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  validateOnChange() {
    const numeroDocumentoSinComas = this.usuario.numeroDocumento.replace(
      /,/g,
      ''
    );
    const isNumber = /^\d+$/.test(numeroDocumentoSinComas);
    this.habilitarBoton =
      isNumber &&
      numeroDocumentoSinComas.length >= 8 &&
      numeroDocumentoSinComas.length <= 11 &&
      this.usuario.tipoDocumento !== '';
  }

  onKeyPress(event: KeyboardEvent): void {
    // Obtiene el código de la tecla presionada
    const keyCode = event.keyCode;

    // Permite solo números (códigos de tecla 48-57 son números 0-9)
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault(); // Evita que se ingrese otro carácter
    }
  }

  onSubmit() {
    this.router.navigate([
      `visualizar-datos/${
        this.usuario.tipoDocumento
      }/${this.usuario.numeroDocumento.replace(/,/g, '')}`,
    ]);
  }
}
