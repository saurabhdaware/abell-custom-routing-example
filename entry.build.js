import index from './index.abell';

/**
 * @returns {import('abell').Route[]}
 */
export const makeRoutes =  () => {
  return [
    {
      path: '/',
      // abell components are functions that return HTML string
      render: () => index(),
    },
    {
      path: '/about',
      render: () => {
        // You can return any HTML here however you like :D
        return '<body>We can return <b>any HTML</b> string here</body>';
      }
    }
  ]
}