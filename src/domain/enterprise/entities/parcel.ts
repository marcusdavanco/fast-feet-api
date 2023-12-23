import { Entity } from '@/core/entities/entity'
import { Status } from './status'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface Address {
  street: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
}

export interface ParcelProps {
  delivererId?: UniqueEntityID
  recipientId: UniqueEntityID
  status: Status
  deliveryAddress: Address
  isDelivered: boolean
}

export class Parcel extends Entity<ParcelProps> {
  static create(props: ParcelProps, id?: UniqueEntityID) {
    const parcel = new Parcel(props, id)

    return parcel
  }
}
