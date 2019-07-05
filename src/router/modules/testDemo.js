export default {
  path: '/test',
  name: 'test',
  component: () => import('@/components/TestDemo'),
  children: [
    {
      path: 'demo1',
      name: 'demo1',
      component: () => import('@/components/TestDemo/demo1')
    }
  ]
}
