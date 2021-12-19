import { AuthService } from './../../Services/auth.service';
import { ClientesService } from './../../Services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Cliente } from '../clientes/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../region';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  titulo:string ="Crear Cliente";
  regiones!: Region[];
  cliente: Cliente = new Cliente();
  beforeRoute!:string;

  constructor(
    private location:Location,private router: Router,
    private clienteService:ClientesService,
    private activatedRoute: ActivatedRoute,
    private authenticated:AuthService) {

   }

  //  back(): void {
  //    this.router.navigate('. .')
  //  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id')!;
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });

    this.clienteService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

  public create():void{

    console.log("Formulario Enviado");
    console.log(this.cliente);
    this.clienteService.create(this.cliente)
    .subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `El cliente ${this.cliente.nombre} ha sido creado con éxito`, 'success');
      },
      err => {
       // this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  update(): void {
    console.log(this.cliente);
    this.clienteService.update(this.cliente)
      .subscribe(
        json => {
          this.router.navigate(['/clientes']);
          swal('Cliente Actualizado', `${this.cliente.nombre}`, 'success');
        },
        err => {
          //this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }


  compararRegion(o1: Region, o2: Region): boolean {
    if (o1 === undefined && o2 === undefined) {
      return true;
    }

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }
  // goBack():void{
  //   this.location.back();
  //   console.log("goback");

  // }

}
