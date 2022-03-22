import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAEbO_qtE0Ur9AYolHcMffo-7UsqN3l_VdQlN3eRq53Dv-4W2q5H1w1niz27-zARFDfy4e2JxvcY4UWKVKzYmlG6FmQRXzr09Yyq7flo0QODsHTEvWDlAuVAOy7KbiH7dKBpEYRfCqJxVQ7j4MCHsmNg8drrvU'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}