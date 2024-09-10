import {checkContainerType, getTypeName} from '../helpers'
import {GetErrorFunction, Matcher} from '../../types'
import {buildQueries} from './all-utils'

const queryAllByCSS = (container: HTMLElement, selector: Matcher) => {
  checkContainerType(container)
  if (typeof selector !== 'string') {
    throw new TypeError(
      `Expected selector to be a string but got ${getTypeName(selector)}.`,
    )
  }
  return Array.from(container.querySelectorAll<HTMLElement>(selector))
}

const getMultipleError: GetErrorFunction<[unknown]> = (c, id) =>
  `Found multiple elements by selector: ${id}`
const getMissingError: GetErrorFunction<[unknown]> = (c, id) =>
  `Unable to find an element by selector: ${id}`

const [queryByCSS, getAllByCSS, getByCSS, findAllByCSS, findByCSS] =
  buildQueries(queryAllByCSS, getMultipleError, getMissingError)

export {
  queryByCSS,
  queryAllByCSS,
  getByCSS,
  getAllByCSS,
  findAllByCSS,
  findByCSS,
}
