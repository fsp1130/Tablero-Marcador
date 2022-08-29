import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {

    nombre: 'lakers',
    logo: '/assets/img/LAL.svg',
    jugadores: [

      { nombre: 'Isaiah Thomas', puntos: 0, imagen: '/assets/img/thomas.png' },
      { nombre: 'Kyle Kuzma', puntos: 0, imagen: '/assets/img/kuzma.png' },
      { nombre: 'Julius Randle', puntos: 0, imagen: '/assets/img/randle.png' },
      { nombre: 'Brook Lopez', puntos: 0, imagen: '/assets/img/lopez.png' },
      { nombre: 'Brandom Ingram', puntos: 0, imagen: '/assets/img/ingram.png' },
    ]
  }
  equipoVisitantes: any = {

    nombre: 'celtics',
    logo: '/assets/img/BOS.svg',
    jugadores: [

      { nombre: 'Kaaden Allen', puntos: 0, imagen: '/assets/img/allen.png' },
      { nombre: 'aaron Bynes', puntos: 0, imagen: '/assets/img/bynes.png' },
      { nombre: 'Jabari Bird', puntos: 0, imagen: '/assets/img/bird.png' },
      { nombre: 'Jaylen Brown', puntos: 0, imagen: '/assets/img/brown.png' },
      { nombre: 'Jhonatan Gibson', puntos: 0, imagen: '/assets/img/gibson.png' },
    ]
  }



  constructor() { }

  ngOnInit(): void {
  }

  getcanastalocal($event: any): void {

    this.puntosLocales += $event.puntos;
    this.equipoLocal.jugadores.forEach((elem: any) => {

      if (elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos

      }

    });
  }
  getcanastaVisitante($event: any): void {

    this.puntosVisitantes += $event.puntos;
    this.equipoVisitantes.jugadores.forEach((elem: any) => {

      if (elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos

      }

    });
  }

}
