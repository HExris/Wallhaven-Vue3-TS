import './index.less';
import getAllImgList from "@/api/getList.ts";
import { reactive, defineComponent, onMounted, computed } from "vue";
interface GalleryState {
    imgList: any;
}
export default defineComponent({
    name: "Gallery",
    setup() {
        const galleryState: GalleryState = reactive({
            imgList: []
        })
        const topfourImgs = computed(() => {
            galleryState.imgList.value.splice(0, 4);
        })
        const restImgs = computed(() => { galleryState.imgList.value.splice(4, -1); })
        onMounted(() => {
            getAllImgList().then(res => {
                galleryState.imgList = res
            })
        })
        const renderImgList = (list: any) => {
            return (
                list instanceof Array && list.map((v, index) => (
                    <div class="image_wrapper" key={index}>
                        <div class="image_placeholder"></div>
                        <img src={v} />
                    </div>)
                )
            )
        }
        const renderGallery = () => {
            return (
                <div class="gallery">
                    { renderImgList(galleryState.imgList)}
                    { renderImgList(restImgs)}
                </div>
            )
        }
        return () => (renderGallery())
    }
})