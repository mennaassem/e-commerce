import homeSlider from "../../assets/images/homeSlider.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination, Autoplay, Navigation} from "swiper/modules"
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomeSlider() {
  return (
    <>
    <Swiper spaceBetween={2} slidesPerView={1} loop={true} modules={[Pagination,Autoplay,Navigation]} pagination={{clickable:true}} autoplay={{delay:5000}} navigation={true}>
         <SwiperSlide>
            <div style={{backgroundImage:`url(${homeSlider})` ,  backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px", }}>
                <div className="overLay flex items-center bg-linear-to-r from-primary-600/90 to-primary-600/30 h-full w-full">
                    <div className="container space-y-4">
                      <h1 className="text-3xl  text-white">
                        Fresh organic Proudect <br/> Delivered to your Door
                      </h1>
                      <p className="text-white">Get 20% off for your first order</p>
                      <div className="flex gap-2">
                        <button className="btn text-primary-600 bg-white border-2 border-primary-600 hover:bg-transparent hover:border-white hover:text-white">Show now</button>
                        <button className="btn text-white bg-transparent border-2 border-white hover:bg-primary-600 hover:border-primary-600">View Deals</button>
                      </div>


                    </div>
                </div>


            </div>
         </SwiperSlide>
        <SwiperSlide>
            <div style={{backgroundImage:`url(${homeSlider})` ,  backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px", }}>
                <div className="overLay flex items-center bg-linear-to-r from-primary-600/90 to-primary-600/30 h-full w-full">
                    <div className="container space-y-4">
                      <h1 className="text-3xl  text-white">
                        Fresh organic Proudect <br/> Delivered to your Door
                      </h1>
                      <p className="text-white">Get 20% off for your first order</p>
                      <div className="flex gap-2">
                        <button className="btn text-primary-600 bg-white border-2 border-primary-600 hover:bg-transparent hover:border-white hover:text-white">Show now</button>
                        <button className="btn text-white bg-transparent border-2 border-white hover:bg-primary-600 hover:border-primary-600">View Deals</button>
                      </div>


                    </div>
                </div>


            </div>
         </SwiperSlide>
        <SwiperSlide>
            <div style={{backgroundImage:`url(${homeSlider})` ,  backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px", }}>
                <div className="overLay flex items-center bg-linear-to-r from-primary-600/90 to-primary-600/30 h-full w-full">
                    <div className="container space-y-4">
                      <h1 className="text-3xl  text-white">
                        Fresh organic Proudect <br/> Delivered to your Door
                      </h1>
                      <p className="text-white">Get 20% off for your first order</p>
                      <div className="flex gap-2">
                        <button className="btn text-primary-600 bg-white border-2 border-primary-600 hover:bg-transparent hover:border-white hover:text-white">Show now</button>
                        <button className="btn text-white bg-transparent border-2 border-white hover:bg-primary-600 hover:border-primary-600">View Deals</button>
                      </div>


                    </div>
                </div>


            </div>
         </SwiperSlide>
       <SwiperSlide>
            <div style={{backgroundImage:`url(${homeSlider})` ,  backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px", }}>
                <div className="overLay flex items-center bg-linear-to-r from-primary-600/90 to-primary-600/30 h-full w-full">
                    <div className="container space-y-4">
                      <h1 className="text-3xl  text-white">
                        Fresh organic Proudect <br/> Delivered to your Door
                      </h1>
                      <p className="text-white">Get 20% off for your first order</p>
                      <div className="flex gap-2">
                        <button className="btn text-primary-600 bg-white border-2 border-primary-600 hover:bg-transparent hover:border-white hover:text-white">Show now</button>
                        <button className="btn text-white bg-transparent border-2 border-white hover:bg-primary-600 hover:border-primary-600">View Deals</button>
                      </div>


                    </div>
                </div>


            </div>
         </SwiperSlide>
       

    </Swiper>
    
    
    
    </>
  )
}
 
