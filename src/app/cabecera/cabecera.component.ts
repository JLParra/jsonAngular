import { Component, OnInit } from '@angular/core';
import { Music, Track } from '../Interfaces/musicas.interfaces';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  musicas!: Music;
 
  constructor(private _musicService: MusicService) { }

  ngOnInit(): void {
    this.obtenerRegistros();
  }
  obtenerRegistros() {
    this._musicService.obtenerMusicas().subscribe(data => {
      this.musicas = data;
     
    });

  }

}
