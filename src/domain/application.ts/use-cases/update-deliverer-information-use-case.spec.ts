import { InMemoryDeliverersRepository } from 'test/repositories/in-memory-deliverers-repository'
import { UpdateDelivererInformationUseCase } from './update-deliverer-information-use-case'
import { makeDeliverer } from 'test/factories/make-deliverer'

let inMemoryDeliverersRepository: InMemoryDeliverersRepository
let sut: UpdateDelivererInformationUseCase

describe('Update deliverer information', async () => {
  beforeEach(() => {
    inMemoryDeliverersRepository = new InMemoryDeliverersRepository()
    sut = new UpdateDelivererInformationUseCase(inMemoryDeliverersRepository)
  })

  it('should update a deliverer information', async () => {
    const newDeliverer = makeDeliverer()

    await inMemoryDeliverersRepository.create(newDeliverer)

    const result = await sut.execute({
      id: newDeliverer.id.toString(),
      name: 'John Doe',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryDeliverersRepository.items[0].name).equal('John Doe')
  })
})
