import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { VehicleInformation } from './vehicleInformation'
import { Optional } from '@/core/types/optional'

export interface DelivererProps {
  name: string
  email: string
  phoneNumber: string
  vehicleInformation: VehicleInformation
  createdAt: Date
  updatedAt?: Date | null
}

export class Deliverer extends Entity<DelivererProps> {
  static create(
    props: Optional<DelivererProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const deliverer = new Deliverer(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return deliverer
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  get email() {
    return this.props.email
  }

  set email(email: string) {
    this.props.email = email
    this.touch()
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  set phoneNumber(phoneNumber: string) {
    this.props.phoneNumber = phoneNumber
    this.touch()
  }

  get vehicleInformation() {
    return this.props.vehicleInformation
  }

  set vehicleInformation(vehicleInformation: VehicleInformation) {
    this.props.vehicleInformation = vehicleInformation
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
