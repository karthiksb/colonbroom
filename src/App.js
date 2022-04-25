import logo from "./logo.svg";
import "./App.css";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon5 from "./icon5.svg";

import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import slider5 from "./slider5.jpg";

import countdown from "./coundown.svg";

import tab from "./tab.png";
import tic from "./tic.svg";

import Slider from "react-slick";
function App() {
  const images = [{ icon1 }, { icon1 }, { icon1 }, { icon1 }];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <section className="max-w-[1005px] mx-auto sm:mx-3">
        <nav className="h-14 flex items-center justify-center">
          <h1 className="text-2xl font-bold">ColonBroom</h1>
        </nav>

        <main className="flex h-auto mt-12 sm:flex-col">
          <div className="w-1/2  text-4xl pr-[10px] sm:w-full">
            <h1 className="font-bold -tracking-wide">
              Soulagez la constipation, perdez du poids et réduisez les
              ballonnements !
            </h1>
            <div className="icon-grid grid grid-cols-3 gap-5 mt-12">
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon1} alt=""></img>
                <p className="text-[20px] text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon2} alt=""></img>
                <p className="text-[20px] text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon3} alt=""></img>
                <p className="text-[20px] text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon1} alt=""></img>
                <p className="text-[20px] text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <img className="w-[70px]" src={icon5} alt=""></img>
                <p className="text-[20px] text-center">
                  Réduisez vos ballonnements
                </p>
              </div>
            </div>
            <button className="w-full h-12 text-[12px] rounded-3xl font-bold text-gray-700 bg-green-500 mt-16">
              ACHETER MAINTENANT
            </button>
          </div>
          <div className="w-1/2 mt-0  flex flex-col items-center justify-between sm:w-full ">
            <Slider {...settings} className="w-10/12 h-2/3">
              <div className="sm:mt-20">
                <img className="w-full" src={slider1} alt=""></img>
              </div>
              <div className="sm:mt-20">
                <img className="w-full" src={slider2} alt=""></img>
              </div>
              <div className="sm:mt-20">
                <img className="w-full" src={slider3} alt=""></img>
              </div>
              <div className="sm:mt-20">
                <img className="w-full" src={slider4} alt=""></img>
              </div>
              <div className="sm:mt-20">
                <img className="w-full" src={slider5} alt=""></img>
              </div>
            </Slider>
            <p className=" text-sm mb-[140px]">
              {" "}
              Faites glisser vers la gauche pour en savoir plus !0
            </p>
          </div>
        </main>

        <section className="w-full mt-[40px] h-20 bg-gray-200 flex flex-row justify-evenly  items-center">
          <img src={countdown} className="w-[40px]"></img>
          <p className="text-xl">
            Commandez maintenant et faites-vous livrer gratuitement aux
            États-Unis !
          </p>

          <h1>0:1:24</h1>
        </section>

        <section className="cards mt-[30px] w-full h-auto  ">
          <h1 className="text-4xl text-center">Choisissez votre offre</h1>
          <div className="flex justify-between mt-[40px] gap-[20px] sm:flex-col">
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-xl w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 px-14 h-[70px] rounded-[40px] mt-4 bg-green-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-xl w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 px-14 h-[70px] rounded-[40px] mt-4 bg-green-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-8  w-1/3 bg-gray-100 h-auto sm:w-full">
              <div className="flex flex-col">
                <p className="text-center  text-xl">1 boîte /</p>
                <p className="text-center  text-xl w-full ">
                  1 mois d'approvisionnement
                </p>
              </div>
              <img src={tab} alt="" />

              <div className="price flex flex-row gap-2 justify-center">
                <h1 className="text-5xl">54.99</h1>
                <div className="flex flex-col ">
                  <p className="text-xl font-bold">USD</p>
                  <p>par boîte</p>
                </div>
              </div>

              <div className="mt-[10px] flex flex-col gap-2 justify-center w-full ">
                <div className="w-full justify-center flex flex-row gap-2 ">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>60 prises</p>
                </div>
                <div className="flex  justify-center flex-row gap-2">
                  <img className="pl-2 " src={tic} alt="" />
                  <p>1 boîte par mois</p>
                </div>

                <div className="w-full flex justify-center mb-6">
                  <button className="w-3/4 px-14 h-[70px] rounded-[40px] mt-4 bg-green-400">
                    {" "}
                    ABONNEZ-VOUS MAINTENANT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
