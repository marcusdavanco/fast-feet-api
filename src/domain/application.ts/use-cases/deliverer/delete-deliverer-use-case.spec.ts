import { InMemoryDeliverersRepository } from 'test/repositories/in-memory-deliverers-repository'
import { DeleteDelivererUseCase } from '../deliverer/delete-deliverer-use-case'
import { makeDeliverer } from 'test/factories/make-deliverer'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

let inMemoryDeliverersRepository: InMemoryDeliverersRepository
let sut: DeleteDelivererUseCase

describe('DeleteDelivererUseCase', async () => {
  beforeEach(() => {
    inMemoryDeliverersRepository = new InMemoryDeliverersRepository()
    sut = new DeleteDelivererUseCase(inMemoryDeliverersRepository)
  })

  it('should be able to delete a deliverer by its id.', async () => {
    const deliverer = makeDeliverer()

    inMemoryDeliverersRepository.create(deliverer)

    await sut.execute({ id: deliverer.id.toString() })

    expect(inMemoryDeliverersRepository.items).toHaveLength(0)
    expect(inMemoryDeliverersRepository.items).toHaveLength(0)
  })

  it('should raise an error when trying to delete a deliverer with a non existing id.', async () => {
    const deliverer = makeDeliverer()

    inMemoryDeliverersRepository.create(deliverer)

    const result = await sut.execute({ id: 'non-existing-id' })

    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
