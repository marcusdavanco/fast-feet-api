import { InMemoryDeliverersRepository } from 'test/repositories/in-memory-deliverers-repository'
import { GetDelivererByIdUseCase } from '../deliverer/get-deliverer-by-id-use-case'
import { makeDeliverer } from 'test/factories/make-deliverer'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryDeliverersRepository: InMemoryDeliverersRepository
let sut: GetDelivererByIdUseCase

describe('Get Deliverer By Id', () => {
  beforeEach(() => {
    inMemoryDeliverersRepository = new InMemoryDeliverersRepository()
    sut = new GetDelivererByIdUseCase(inMemoryDeliverersRepository)
  })

  it('Should be able to get a deliverer by id', async () => {
    const newDeliverer = makeDeliverer(undefined, new UniqueEntityID())

    await inMemoryDeliverersRepository.create(newDeliverer)

    const result = await sut.execute({
      id: newDeliverer.id.toString(),
    })

    if (result.isRight()) {
      expect(result.value?.deliverer).toBeTruthy()
      expect(result.value?.deliverer.id).toEqual(newDeliverer.id)
    }
  })
})
