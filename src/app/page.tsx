 
 import AboutUs from "./component/about-us";
import Branches from "./component/branches";
import ClientsOpenions from "./component/clients-openions";
import Header from "./component/header";
import OurServices from "./component/our-services";
import Partners from "./component/partners";
import MainLayout from "./layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>

        <div className="">
           <Header />
           <Partners />
           <AboutUs />
        <OurServices />
           <Branches />
           <ClientsOpenions />  
       </div>
    </MainLayout>
  );
}
