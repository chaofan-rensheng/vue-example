import axios from '@/utils/request'

export const tableList = data => axios({
  url: '/table/list',
  method: 'post',
  data
})

export const tableDetails = data => axios({
  url: '/table/details',
  method: 'post',
  data
})