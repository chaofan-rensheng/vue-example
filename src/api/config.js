import axios from '@/utils/request'

export const areaData = data => axios({
  url: '/official/areaData',
  method: 'post',
  data
})
