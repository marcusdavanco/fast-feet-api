import { InMemoryDeliverersRepository } from 'test/repositories/in-memory-deliverers-repository'
import { CreateDelivererUseCase } from '../deliverer/create-deliverer-use-case'
import { makeDeliverer } from 'test/factories/make-deliverer'

let inMemoryDeliverersRepository: InMemoryDeliverersRepository
let sut: CreateDelivererUseCase

describe('Create Deliverer', () => {
  beforeEach(() => {
    inMemoryDeliverersRepository = new InMemoryDeliverersRepository()
    sut = new CreateDelivererUseCase(inMemoryDeliverersRepository)
  })

  it('should be able to create a deliverer', async () => {
    const newDeliverer = makeDeliverer({
      name: 'John Doe',
    })

    const result = await sut.execute(newDeliverer)

    expect(result.isRight()).toBe(true)
    expect(inMemoryDeliverersRepository.items[0]).toEqual(
      result.value?.deliverer,
    )
  })
})
