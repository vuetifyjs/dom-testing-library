import * as queries from './queries'

export type BoundFunction<T> = T extends (
  container: Element,
  ...args: infer P
) => infer R
  ? (...args: P) => R
  : never

export type BoundFunctions<Q> = Q extends typeof queries
  ? {
      getByLabelText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByText<T>>>
      ): ReturnType<queries.GetByText<T>>
      getAllByLabelText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      queryByLabelText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByText<T>>>
      ): ReturnType<queries.QueryByText<T>>
      queryAllByLabelText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      findByLabelText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByText<T>>>
      ): ReturnType<queries.FindByText<T>>
      findAllByLabelText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByText<T>>>
      ): ReturnType<queries.FindAllByText<T>>
      getByPlaceholderText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByPlaceholderText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByPlaceholderText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByPlaceholderText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByPlaceholderText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByPlaceholderText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByText<T>>>
      ): ReturnType<queries.GetByText<T>>
      getAllByText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      queryByText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByText<T>>>
      ): ReturnType<queries.QueryByText<T>>
      queryAllByText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByText<T>>>
      ): ReturnType<queries.AllByText<T>>
      findByText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByText<T>>>
      ): ReturnType<queries.FindByText<T>>
      findAllByText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByText<T>>>
      ): ReturnType<queries.FindAllByText<T>>
      getByAltText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByAltText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByAltText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByAltText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByAltText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByAltText<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByTitle<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByTitle<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByTitle<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByTitle<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByTitle<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByTitle<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByDisplayValue<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByDisplayValue<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByDisplayValue<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByDisplayValue<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByDisplayValue<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByDisplayValue<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
      getByRole<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByRole<T>>>
      ): ReturnType<queries.GetByRole<T>>
      getAllByRole<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByRole<T>>>
      ): ReturnType<queries.AllByRole<T>>
      queryByRole<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByRole<T>>>
      ): ReturnType<queries.QueryByRole<T>>
      queryAllByRole<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByRole<T>>>
      ): ReturnType<queries.AllByRole<T>>
      findByRole<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByRole<T>>>
      ): ReturnType<queries.FindByRole<T>>
      findAllByRole<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByRole<T>>>
      ): ReturnType<queries.FindAllByRole<T>>
      getByTestId<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.GetByBoundAttribute<T>>>
      ): ReturnType<queries.GetByBoundAttribute<T>>
      getAllByTestId<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      queryByTestId<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.QueryByBoundAttribute<T>>>
      ): ReturnType<queries.QueryByBoundAttribute<T>>
      queryAllByTestId<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.AllByBoundAttribute<T>>>
      ): ReturnType<queries.AllByBoundAttribute<T>>
      findByTestId<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindByBoundAttribute<T>>>
      ): ReturnType<queries.FindByBoundAttribute<T>>
      findAllByTestId<T extends Element = Element>(
        ...args: Parameters<BoundFunction<queries.FindAllByBoundAttribute<T>>>
      ): ReturnType<queries.FindAllByBoundAttribute<T>>
    } & {
      [P in keyof Q]: BoundFunction<Q[P]>
    }
  : {
      [P in keyof Q]: BoundFunction<Q[P]>
    }

export type Query = (
  container: Element,
  ...args: any[]
) =>
  | Error
  | HTMLElement
  | HTMLElement[]
  | Promise<HTMLElement[]>
  | Promise<HTMLElement>
  | null

export interface Queries {
  [T: string]: Query
}

export function getQueriesForElement<
  QueriesToBind extends Queries = typeof queries,
  // Extra type parameter required for reassignment.
  T extends QueriesToBind = QueriesToBind,
>(element: Element, queriesToBind?: T): BoundFunctions<T>
