
import { Injectable, OnInit } from "@angular/core";
import { Message } from 'primeng/primeng';

export class MessageImpl implements Message {

}

@Injectable()
export class Mensaje implements OnInit {
    ngOnInit(): void {

    }

    showInfo(msgs: Message[], msg: string): void {
        //msgs = [];
        let mensaje: Message = new MessageImpl();
        mensaje.summary = "INFORMACIÓN";
        mensaje.detail = msg;
        mensaje.severity = "info";
        msgs.push(mensaje);
    }

    showError(msgs: Message[], msg: Error): void {
        //msgs = [];
        let mensaje: Message = new MessageImpl();
        mensaje.summary = "ERROR";
        mensaje.detail = JSON.stringify(msg);
        mensaje.severity = "error";
        msgs.push(mensaje);
    }
}