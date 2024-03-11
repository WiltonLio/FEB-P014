import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AtendimentoInterface } from '../atendimento-interface';


@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<{ [key: string]: AtendimentoInterface }>('https://feb-p013-61772-default-rtdb.firebaseio.com/febp013.json').pipe(map(responseData => {
      const postArray: AtendimentoInterface[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...(responseData as any)[key], id: key });
        }
      }
      return postArray;
    }
    ));
  }
  postData(data: any) {
    return this.http.post('https://feb-p013-61772-default-rtdb.firebaseio.com/febp013.json', data);
  }
  editarAtendimento(id: string, atendimentoData: {
    dateAtendimento: string,
    tutorName: string,
    petName: string,
    especie: string,
    race: string,
    obs: string
  }
  ) {
    return this.http.put(`https://feb-p013-61772-default-rtdb.firebaseio.com/febp013/${id}.json`, atendimentoData, { observe: 'response' });
  }
  getAtendimentoByID(id: string) {
    return this.http.get<AtendimentoInterface>(`https://feb-p013-61772-default-rtdb.firebaseio.com/febp013/${id}.json`);
  }

  apagarTodosAtendimentos() {
    return this.http.delete('https://feb-p013-61772-default-rtdb.firebaseio.com/febp013.json');
  }
}
