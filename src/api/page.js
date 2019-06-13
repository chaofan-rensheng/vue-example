import axios from '@/utils/request'


export const pageList = data => axios({
  url: '/page/list',
  method: 'post',
  data
})

export const pageDetails = data => axios({
  url: '/page/details',
  method: 'post',
  data
})