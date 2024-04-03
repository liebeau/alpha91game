import Footer from "@/components/footer"
import Header from "@/components/header"
import Wechat from "@/components/wechat"
import Line from "@/components/line"
import Whatsapp from "@/components/whatsapp"


export default function Page() {
    return (
      <><Header />
      <Wechat />
      <br/>
      <Line />
      <br/>
      <Whatsapp/>
      <Footer /></>
    )
  }