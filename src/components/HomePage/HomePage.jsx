import MyHeader from "@components/Header/Header";
import Banner from "@components/Banner/Banner";

function HomePage() {
  return (
    <div>
      <div className="font-robotoMono relative">
        <MyHeader />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
