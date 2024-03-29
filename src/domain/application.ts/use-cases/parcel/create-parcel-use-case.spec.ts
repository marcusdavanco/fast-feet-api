import { InMemoryParcelsRepository } from 'test/repositories/in-memory-parcels-repository'
import { CreateParcelUseCase } from '../parcel/create-parcel-use-case'
import { Status } from '@/domain/enterprise/entities/status'

let inMemoryParcelsRepository: InMemoryParcelsRepository
let sut: CreateParcelUseCase

describe('CreateParcelUseCase', () => {
  beforeEach(() => {
    inMemoryParcelsRepository = new InMemoryParcelsRepository()
    sut = new CreateParcelUseCase(inMemoryParcelsRepository)
  })

  it('should be able to create a new parcel', async () => {
    const result = await sut.execute({
      delivererId: '1',
      deliveryAddress: {
        city: 'Cidade',
        neighborhood: 'Bairro',
        postalCode: '00000000',
        state: 'Estado',
        street: 'Rua',
      },
      isDelivered: false,
      recipientId: '1',
      status: Status.PENDING_PICKUP,
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryParcelsRepository.items[0]).toEqual(result.value?.parcel)
  })
})
