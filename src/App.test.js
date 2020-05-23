import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { AuthConsumer, AuthProvider } from './Auth'

// let currentUser = { id: 1, name: 'caro' }
// test('Should call localStorage getItem on render App', () => {
//   const tree = render(
//     <AuthProvider>
//       <AuthConsumer>
//         <MemoryRouter>
//           <App />
//         </MemoryRouter>
//       </AuthConsumer>
//     </AuthProvider>
//   )
//   expect(tree).toMatchSnapshot()
// })

// test('renders content of App.js', () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   )
//   const linkElement = getByText(/recipe/i)
//   expect(linkElement).toBeInTheDocument()
// })

// test('should load from localStorage', () => {
//   const KEY = 'recipes'
//   expect(localStorage.getItem).toHaveBeenCalledTimes(2)
//   expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY)
// })
