import { Entity } from '@/core/entities/entity'
import { Status } from './status'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface Address {
  street: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
}

export interface ParcelProps {
  delivererId: UniqueEntityID
  recipientId: UniqueEntityID
  status: Status
  deliveryAddress: Address
  isDelivered: boolean
  createdAt: Date
  updatedAt?: Date | null
}

export class Parcel extends Entity<ParcelProps> {
  static create(
    props: Optional<ParcelProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const parcel = new Parcel(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )

    return parcel
  }

  get delivererId() {
    return this.props.delivererId
  }

  get recipientId() {
    return this.props.recipientId
  }

  get status() {
    return this.props.status
  }

  get deliveryAddress() {
    return this.props.deliveryAddress
  }

  get isDelivered() {
    return this.props.isDelivered
  }

  set isDelivered(isDelivered: boolean) {
    this.props.isDelivered = isDelivered
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
