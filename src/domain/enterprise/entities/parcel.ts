import { Entity } from "@/core/entities/entity";
import { Status } from "./Status";
import { Deliverer } from "./deliverer";
import { Recipient } from "./recipient";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface ParcelProps {
  deliverer?: Deliverer
  recipient?: Recipient
  status: Status
  deliveryAddress: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }  
}

export class Parcel extends Entity<ParcelProps> {
  static create(props: ParcelProps, id?: UniqueEntityID) {
    const parcel = new Parcel(props, id)

    return parcel
  }
}