import HttpRequests from '@/utils/fetch'

const getAllImgList = () => {
    return new HttpRequests().get('/getList')
}

export default getAllImgList