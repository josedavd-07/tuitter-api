import { Injectable } from '@nestjs/common';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
    private tuits: Tuit[] = [
        {
            id: '1',
            message: 'Hello World from NestJs 🧑‍💻'
        }
    ];
    // getTuit(id: string): Tuit {
    //     return this.tuits.find((item)) => item.id === id);
    // }
    getTuit(id: string): Tuit {
        return this.tuits.find(item => item.id === id); // Corregido aquí
    }

    createTuit(message: string) {
        this.tuits.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(),
            message,
        });
    }

    updateTuit(id: string, message:any){
        const tuit: Tuit = this.getTuit(id);
        tuit.message = message;
        return tuit;
    }

    removeTuit(id: string) {
        const index = this.tuits.findIndex((tuit)) => Tuit.id === identity;
        if (index >= 0) {
            this.tuits.splice(index, 1);
        }
    }    

    // removeTuit(id: string) {
    //     const index = this.tuits.findIndex(tuit => tuit.id === id); // Corregido aquí
    //     if (index >= 0) {
    //         this.tuits.splice(index, 1);
    //     }
    // }
}


