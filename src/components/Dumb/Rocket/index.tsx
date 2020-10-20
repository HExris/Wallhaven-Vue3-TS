import { defineComponent, onMounted } from "vue";
import './index.less'

export default defineComponent({
  name: "Rocket",
  setup() {
    const mainWrapper: HTMLElement | null = document.querySelector(".main");

    const renderRocket = () => {
      const scorllTop: number = mainWrapper ? mainWrapper.scrollTop : 0;
      const clientHeight: number = document.body.clientHeight;
      //   if (scorllTop > clientHeight) {
      return <div class="rocket"></div>;
      //   }
    };

    onMounted(() => {
    //   alert(1);
    //   mainWrapper && mainWrapper.addEventListener("scroll", renderRocket);
    });

    return () => renderRocket();
  }
});
