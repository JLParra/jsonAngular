// To parse this data:
//
//   import { Convert, Music } from "./file";
//
//   const music = Convert.toMusic(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Music {
    id:     number;
    artist: string;
    album:  Album;
}

export interface Album {
    name:        string;
    releaseDate: string;
    coverImage:  string;
    tracks:      Track[];
}

export interface Track {
    trackNumber: number;
    trackName:   string;
    trackLength: string;
    trackPrice:  number;
}
