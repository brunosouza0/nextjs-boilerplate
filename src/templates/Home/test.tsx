import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Home />', () => {
  it('should render a ...', () => {
    renderWithTheme(<Home />)

    expect(
      screen.getByRole('heading', {
        name: /home/i
      })
    ).toBeInTheDocument()
  })
})
