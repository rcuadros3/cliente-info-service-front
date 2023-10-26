import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-visualizar-datos',
  templateUrl: './visualizar-datos.component.html',
  styleUrls: ['./visualizar-datos.component.css'],
})
export class VisualizarDatosComponent {
  datosConsulta: any = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: '',
    direccion: '',
    ciudadResidencia: '',
  };
  tipoDocumento = '';
  numeroDocumento = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.tipoDocumento = params['tipo'];
      this.numeroDocumento = params['numero'];
      console.log(this.tipoDocumento);
      axios
        .get(
          `http://localhost:8090/cliente/informacion?tipoDocumento=${this.tipoDocumento}&numeroDocumento=${this.numeroDocumento}`
        )
        .then((response) => {
          // La solicitud se completó exitosamente y los datos se encuentran en response.data
          this.datosConsulta = response.data;
          console.log(this.datosConsulta);
        }).catch ((error) => alert(error));
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
