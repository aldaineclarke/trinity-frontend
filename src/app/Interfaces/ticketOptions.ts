import { Plumber } from "./plumber";
import { Service } from "./service";
import { Ticket } from "./ticket";

export interface TicketOptions{
    ticket:Ticket;
    plumber:Plumber;
    service:Service;
    blank:boolean;
    accessPoint: "USER" | "ADMIN";
}