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
            getAllImgList().then((res: any) => {
              if (res && res.data instanceof Array) {
                galleryState.imgList = [...res.data];
                galleryState.topfourImgs = [...res.data].slice(0, 4);
                galleryState.restImgs = [...res.data].slice(4);
              }
            });
        })

        const renderImgList = (list: any) => {
            return (
                list instanceof Array && list.map(v => {
                    return v && (
                        <div class="image_wrapper" key={v.id} >
                            <div class="image_placeholder"></div>
                            <img src={v.url} />
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