import anuragPage from './anurag-page';

/**
 * @returns {import('abell').Route[]}
 */
export const makeRoutes =  () => {
  return [
    {
      path: '/',
      // abell components are functions that return HTML string
      render: () => anuragPage({ name: 'Saurabh', activeURL: '/' })
    },
    {
      path: '/anu',
      render: () => anuragPage({ name: 'Anurag', activeURL: '/anu' })
    }
  ]
}