import { InMemoryDeliverersRepository } from 'test/repositories/in-memory-deliverers-repository'
import { UpdateDelivererInformationUseCase } from '../deliverer/update-deliverer-information-use-case'
import { makeDeliverer } from 'test/factories/make-deliverer'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

let inMemoryDeliverersRepository: InMemoryDeliverersRepository
let sut: UpdateDelivererInformationUseCase

describe('Update deliverer information', async () => {
  beforeEach(() => {
    inMemoryDeliverersRepository = new InMemoryDeliverersRepository()
    sut = new UpdateDelivererInformationUseCase(inMemoryDeliverersRepository)
  })

  it('should update a deliverer information', async () => {
    const newDeliverer = makeDeliverer({ name: 'John Doe' })

    await inMemoryDeliverersRepository.create(newDeliverer)

    const result = await sut.execute({
      id: newDeliverer.id.toString(),
      name: 'Jane Doe',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryDeliverersRepository.items[0].name).equal('Jane Doe')
  })

  it('should throw an error when trying to update a deliver with non-existing-id.', async () => {
    const newDeliverer = makeDeliverer()

    await inMemoryDeliverersRepository.create(newDeliverer)

    const result = await sut.execute({
      id: 'non-existing-id',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(ResourceNotFoundError)
  })
})
