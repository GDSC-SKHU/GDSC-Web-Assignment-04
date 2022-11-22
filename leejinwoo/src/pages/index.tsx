import Comment from "../components/Comment"
import Pic from "../components/Pic"

export default function Home() {
  return (
    <>
    <main>
      <section className="contents">
        <Pic 
        imgSrc="/but.jpg"
        title="벛꽃과 함께"
        text="동생 알바 끝나고 같이 산책하다가 동생이 찍어줫어요!"
        />
        <Comment />
      </section>
      <section className="contents">
        <Pic 
        imgSrc="/art.jpg"
        title="오일 파스텔 초상화"
        text="학교에서 행사할때 받았는데 나름 맘에 들어용 "
        />
        <Comment />
      </section>
      <section className="contents">
        <Pic 
        imgSrc="/earRing.jpg"
        title="선물"
        text="지인 생일 선물로 만들어줬는데 지금까지 만든 것 중에서 제일 잘 만들었다는 생각이 들어요"
        />
        <Comment />
      </section>
    </main>
    </>

  )
}
