import { Either, right } from '@/core/either'
import { Recipient } from '@/domain/enterprise/entities/recipient'
import { RecipientsRepository } from '../../repositories/recipients-repository'

interface CreateRecipientUseCaseRequest {
  name: string
  email: string
  phoneNumber: string
  alternativePhoneNumber: string
  deliveryInstructions: string
}

type CreateRecipientUseCaseResponse = Either<
  null,
  {
    recipient: Recipient
  }
>

export class CreateRecipientUseCase {
  constructor(private recipientRepository: RecipientsRepository) {}

  async execute({
    name,
    email,
    phoneNumber,
    alternativePhoneNumber,
    deliveryInstructions,
  }: CreateRecipientUseCaseRequest): Promise<CreateRecipientUseCaseResponse> {
    const recipient = Recipient.create({
      name,
      email,
      phoneNumber,
      alternativePhoneNumber,
      deliveryInstructions,
    })

    await this.recipientRepository.create(recipient)

    return right({
      recipient,
    })
  }
}
