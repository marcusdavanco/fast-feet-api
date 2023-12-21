import { UseCaseError } from '../use-case-error'

export class EmptyUpdateError extends Error implements UseCaseError {
  constructor() {
    super('At least one property must be provided for update.')
  }
}
