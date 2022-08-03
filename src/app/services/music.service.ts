import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Music } from '../Interfaces/musicas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
  
  obtenerMusicas(){
    return this.http.get<Music>("assets/music.json");
  }
  
}
