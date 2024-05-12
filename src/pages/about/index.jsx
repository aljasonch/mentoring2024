import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import Accom from '../../assets/Accom_Icon.png'
import Admin from '../../assets/Admin_Icon.png'
import CC from '../../assets/CC_Icon.png'
import Dokum from '../../assets/Dokum_Icon.png'
import Exc from '../../assets/Exc_Icon.png'
import Insurer from '../../assets/Insurer_Icon.png'
import Mentor from '../../assets/Mentor_Icon.png'
import Medpar from '../../assets/Medpar_Icon.png'
import Research from '../../assets/Research_Icon.png'
import Visual from '../../assets/Visual_Icon.png'
import Website from '../../assets/Website_Icon.png'
import Asset from '../../assets/Asset8_1.png'
import Assets from '../../assets/Asset8_2.png'
import Daco from '../../assets/Daco_519625.png'
import data from './data.js'

function About() {
    const [showCard, setShowCard] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const cardRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                cardRef.current.classList.remove('slide-up');
                cardRef.current.classList.add('slide-down');
                setTimeout(() => {
                    setShowCard(false);
                }, 500);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='background-mentoring divisi' ref={cardRef}>
            <div>
                <h1 className='text-white text-7xl pt-[250px] font-spyagencybi'>ABOUT US</h1>
                <p className='font-monsserat text-white text-3xl'>CHARACTER BUILDING MENTORING 2024</p>
            </div>
            <div className='mt-[30px] mb-20'>
                <h2 className='font-spyagency text-start text-white text-6xl'>REVEAL YOUR <br />CAPABILITY WITHIN A <br />PURPOSEFUL <br />QUEST</h2>
            </div>
            <div className='flex justify-between background-atas '>
                <img src={Asset} className='h-[190px] pb-5' />
                <img src={Assets} className=' h-[190px] pb-5' />
            </div>
            <div className='mt-14 mb-15'>
                <h2 className='font-spyagencybi text-white text-6xl mb-[120px]'>Our Division</h2>
                <a href='#' className='underline text-white'>Click for more information</a>
            </div>
            <div className='flex items-center justify-center py-6 card-container'>
                <div className='bg-white p-6 rounded-full inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#9CF9FF] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[0].title, description: data[0].description, image: Accom }) }}>
                    <img src={Accom} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#E1ED7B] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[1].title, description: data[1].description, image: Admin }) }}>
                    <img src={Admin} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFFBB9] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[2].title, description: data[2].description, image: CC }) }}>
                    <img src={CC} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#DCB5FF] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[3].title, description: data[3].description, image: Dokum }) }}>
                    <img src={Dokum} className='h-[110px]' />
                </div>
            </div>
            <div className='flex items-center justify-center py-6 card-container'>
                <div className='bg-white p-6 rounded-full inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#94C3FF] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[4].title, description: data[4].description, image: Exc }) }}>
                    <img src={Exc} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#CCCCCC] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[5].title, description: data[5].description, image: Insurer }) }}>
                    <img src={Insurer} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFC0A5] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[6].title, description: data[6].description, image: Mentor }) }}>
                    <img src={Mentor} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFC0C0] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[7].title, description: data[7].description, image: Medpar }) }}>
                    <img src={Medpar} className='h-[110px]' />
                </div>
            </div>
            <div className='flex items-center justify-center py-6 card-container yes '>
                <div className='bg-white p-6 rounded-full inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFD4A9] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[8].title, description: data[8].description, image: Research }) }}>
                    <img src={Research} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#FFCEE5] hover:shadow-none DropSemua' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[9].title, description: data[9].description, image: Visual }) }}>
                    <img src={Visual} className='h-[110px]' />
                </div>
                <div className='bg-white rounded-full p-6 inner-shadow mx-[30px] transition-color duration-500 ease-in-out hover:bg-[#BBE0FF] hover:shadow-none DropSemua trigger' onClick={() => { setShowCard(!showCard); setSelectedData({ title: data[10].title, description: data[10].description, image: Website }) }}>
                    <img src={Website} className='h-[110px]' />
                </div>
            </div>
            <div className='Daco container1'>
                <img src={Daco} className='daco-image' />
            </div>
            {showCard && selectedData && (
                <div className='w-[790px] h-[480px] overflow-hidden container' ref={cardRef}>
                    <div className='bg-white flex justify-center w-[120px] container logo rounded-full DropSemua' >
                        <img src={selectedData.image} className='w-[100px] object-cover' />
                    </div>
                    <div className="mt-10 mb-3 px-[40px] pb-[20px] gradientcolor container w-[750px] h-[370px] rounded-[60px] low overflow-hidden inShadow" >
                        <h2 className='font-spyagencyOri text-white text-[30px] mt-10'>{selectedData.title}</h2>
                        <p className='text-monsserat text-white text-[25px] text-center tulis'>{selectedData.description}</p>
                        <div className='Daco-card'>
                            <img src={Daco} className='daco-image' />
                        </div>
                        <div className='Daco-card1'>
                            <img src={Daco} className='daco-image' />
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
export default About;