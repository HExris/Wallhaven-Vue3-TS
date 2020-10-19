import HttpRequests from '@/utils/fetch'

const getAllImgList = () => {
    return new HttpRequests().get('/imgList.json')
}

export default getAllImgList