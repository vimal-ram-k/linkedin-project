import { useState } from 'react'
import banner from '../../assets/Landscape - LinkedIn Banner 2.png'
import companylogo from '../../assets/capgemini-logo-5.jpg'
import './style/profilecard.css'
import { SubcriptionCard } from '../subcriptioncard/subcriptioncard'
import { ProfileViwerCard } from '../subcriptioncard/profileviwercard'
import { ExtraOptionsCard } from '../subcriptioncard/extraoptionscard'
export const ProfileCard = () => {

    const [showMore , setShowMore] = useState<boolean>( false)

    const showMoreToggle = () =>{
        setShowMore((prev) => !prev)
    }
    
    return(
        <div className=' col-12 col-sm-9 col-lg-3 col-xl-2'>
        <div className=" card mt-3 rounded-top-4  ">
            <div className=" card-img  position-relative">
                <img src={banner} alt="" className=' rounded-top-4 w-100'  height={ 60}/>
            </div>
        <div className=' card-body p-0 mx-4'>
           <button className='card-profile bg-transparent rounded-circle border-0 position-absolute'>
          <i className=' bi bi-person-circle' style={{ fontSize : "4rem" , color : "#000"}}></i>
           </button>
           <div className=' mt-4'>
            <h1 className=' username ms-2 pt-3 m-0'>Vimal Ram K</h1>
            <p className=' about  ms-2 p-0 m-0'>Experienced React Developer | Full-Stack Expertise | CI/CD & DevOps Specialist</p>
            <p className=' location ms-2 p-0 m-0'>Bengaluru, Karnataka</p>
            <div className=' card-footer bg-transparent border-0'>
                <div className=' d-flex align-items-center column-gap-1'>
                    <img src={companylogo} className='company-logo' alt="" />
                    <h1 className=' about m-0'>Capgemini</h1>
                </div>
            </div>
           </div>

        </div>
        </div>

      
       {
    showMore && (
        <>
        <SubcriptionCard />
        <ProfileViwerCard />
        <ExtraOptionsCard />
        </>
    )
       }

<button className='border-0 w-100 m-auto my-3 btn d-md-none' onClick={showMoreToggle}>
                    <h1 className=' fs-6 fw-light'>Show less <i className=' bi bi-arrow-bar-up' style={{ fontSize : "0.8rem"}}></i></h1>
                </button>


                <div className=' d-none d-md-block'>
        <SubcriptionCard />
        <ProfileViwerCard />
        <ExtraOptionsCard />
        </div>

       
        </div>



    )
}