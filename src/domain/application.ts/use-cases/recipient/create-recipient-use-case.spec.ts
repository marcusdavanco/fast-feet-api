import { InMemoryRecipientsRepository } from 'test/repositories/in-memory-recipients-repository'
import { CreateRecipientUseCase } from './create-recipient-use-case'

let inMemoryRecipientsRepository: InMemoryRecipientsRepository
let sut: CreateRecipientUseCase

describe('CreateRecipientUseCase', () => {
  beforeEach(() => {
    inMemoryRecipientsRepository = new InMemoryRecipientsRepository()
    sut = new CreateRecipientUseCase(inMemoryRecipientsRepository)
  })

  it('should be able to create a new recipient', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      phoneNumber: '+5511999999999',
      alternativePhoneNumber: '+5511912341234',
      deliveryInstructions: '',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryRecipientsRepository.items[0]).toEqual(
      result.value?.recipient,
    )
  })
})
