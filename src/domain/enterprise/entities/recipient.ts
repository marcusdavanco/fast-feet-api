import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface RecipientProps {
  name: string
  email: string
  phoneNumber: string
  alternativePhoneNumber: string
  deliveryInstructions: string
  createdAt: Date
  updatedAt?: Date | null
}

export class Recipient extends Entity<RecipientProps> {
  static create(
    props: Optional<RecipientProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const recipient = new Recipient(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    )

    return recipient
  }

  get name() {
    return this.props.name
  }

  set name(newName) {
    this.props.name = newName
    this.touch()
  }

  get email() {
    return this.props.email
  }

  set email(newEmail) {
    this.props.email = newEmail
    this.touch()
  }

  get phoneNumber() {
    return this.props.phoneNumber
  }

  set phoneNumber(newPhoneNumber) {
    this.props.phoneNumber = newPhoneNumber
    this.touch()
  }

  get alternativePhoneNumber() {
    return this.props.alternativePhoneNumber
  }

  set alternativePhoneNumber(newAlternativePhoneNumber) {
    this.props.alternativePhoneNumber = newAlternativePhoneNumber
    this.touch()
  }

  get deliveryInstructions() {
    return this.props.deliveryInstructions
  }

  set deliveryInstructions(newDeliveryInstructions) {
    this.props.deliveryInstructions = newDeliveryInstructions
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
