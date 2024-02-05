import { InMemoryDeliverersRepository } from 'test/repositories/in-memory-deliverers-repository'
import { DeleteDelivererUseCase } from '../deliverer/delete-deliverer-use-case'
import { makeDeliverer } from 'test/factories/make-deliverer'

let inMemoryDeliverersRepository: InMemoryDeliverersRepository
let sut: DeleteDelivererUseCase

describe('Delete Deliverer Use Case', async () => {
  beforeEach(() => {
    inMemoryDeliverersRepository = new InMemoryDeliverersRepository()
    sut = new DeleteDelivererUseCase(inMemoryDeliverersRepository)
  })

  it('Removes a deliverer', () => {
    const deliverer = makeDeliverer()

    sut.execute({ id: deliverer.id.toString() })

    expect(inMemoryDeliverersRepository.items).toHaveLength(0)
    expect(inMemoryDeliverersRepository.items).toHaveLength(0)
  })
})
