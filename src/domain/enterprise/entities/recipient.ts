import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface RecipientProps {
  name: string,
  email: string,
  phoneNumber: string,
  alternativePhoneNumber: string,
  deliveryInstructions: string,
}

export class Recipient extends Entity<RecipientProps>{
  static create(props: RecipientProps, id?: UniqueEntityID) {
    const recipient = new Recipient(props, id)

    return recipient
  }

}