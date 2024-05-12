import './style.css'
import Transition1 from '../../assets/Transition_1.png'
import Transition2 from '../../assets/Transition_2.png'
import Line from '../../assets/Asset 15 1.png'
import Logo from '../../assets/Logo.png'
import Foto_1 from '../../assets/Foto_1.png'
import Logo_5C from '../../assets/Logo_5C.png'
import Logo_Caring from '../../assets/Logo_Caring.png'
import Logo_Credible from '../../assets/Logo_Credible.png'
import Logo_Competent from '../../assets/Logo_Competent.png'
import Logo_Competitive from '../../assets/Logo_Competitive.png'
import Logo_Customer_Delight from '../../assets/Logo_Customer_Delight.png'
import { Carousel } from '../../components/carousel/Carousel'
import { slides } from '../../components/carousel/carouselData.json'

function Home(){
    const logos = [Logo_Caring, Logo_Credible, Logo_Competent, Logo_Competitive, Logo_Customer_Delight]

    return(
        <div className="background-mentoring py-44">
           
            <div className='pb-44'>
                <div className="relative">
                    <img src={Transition1} className='w-full absolute top-0' />
                    
                </div>
               
                <div className="text-white my-10 mx-auto">
                    <img src={Logo} className='w-[81px] mx-auto' alt="Logo Mentoring" />
                    <p className='font-spyagencycond text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Apa itu</p>
                    <p className='font-spyagencybolditalic text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Mentoring?</p>
                    <div className="mx-auto my-14 border-8 rounded-3xl sm:rounded-2xl lg:rounded-[40px] inline-block" 
                        style={{ boxShadow: "0px 10px 60px 0px #F5FDFF4D" }}>
                        <img src={Foto_1} className='mx-auto rounded-2xl lg:rounded-[32px]' />
                    </div>
                    <p className='text-xs sm:text-base md:text-lg lg:text-xl font-semibold w-8/12 mx-auto mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className="py-56">
                <div className="relative">
                    {/* <img src={Line} className="left-2/4 top-0 absolute" />
                    <img src={Transition2} className="w-full top-10 absolute" /> */}
                    <img src={Transition2} className="w-full top-10 absolute" />
                    <img src={Line} className="right-2/4 top-0 absolute" />
                </div>
                <img src={Logo_5C} className='w-[76px] h-[81px] mx-auto' alt="Logo 5C" />
                <div className="text-white my-10">
                    <p className="font-spyagencycond text-4xl lg:text-5xl text-center">NILAI-NILAI</p>
                    <p className="font-spyagencybolditalic text-[80px] lg:text-9xl text-center">5C</p>
                    <p className='text-xs sm:text-base md:text-lg lg:text-xl font-semibold w-8/12 mx-auto mt-16 mb-32'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <Carousel data={slides} logos={logos} />
            </div>
        </div>
    )   
}

export default Home;