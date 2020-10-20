import './index.less';
import getAllImgList from "@/api/getList.ts";
import { reactive, defineComponent, onMounted } from "vue";
interface GalleryState {
    imgList: any;
    topfourImgs: any;
    restImgs: any;
}
export default defineComponent({
    name: "Gallery",
    setup() {
        const galleryState: GalleryState = reactive({
            imgList: [],
            topfourImgs: [],
            restImgs: []
        })

        onMounted(() => {
            getAllImgList().then(res => {
                if (res instanceof Array) {
                    galleryState.imgList = [...res]
                    galleryState.topfourImgs = [...res].slice(0, 4);
                    galleryState.restImgs = [...res].slice(4);
                }
            })
        })

        const renderImgList = (list: any) => {
            return (
                list instanceof Array && list.map((v, index) => {
                    return v && (
                        <div class="image_wrapper" key={index} >
                            <div class="image_placeholder"></div>
                            <img src={v} />
                        </div >
                    )
                }
                )
            )
        }
        const renderGallery = () => {
            return (
                <div class="gallery">
                    { renderImgList(galleryState.topfourImgs)}
                    { renderImgList(galleryState.restImgs)}
                </div>
            )
        }
        return () => (renderGallery())
    }
})