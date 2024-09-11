import { useEffect, useState } from 'react'
import './style/style.css'
export const NewsCard = () => {

    const [showMore , setShowMore] = useState(false);

    const toogleShowMore = () =>{
        setShowMore( prev => !prev)
    }
 
    return(
        <div className=" col-lg-2 col-xl-2 mt-lg-3 py-2 px-2 d-none d-xxl-block card">
            <section className=' d-flex align-items-center justify-content-between'>
            <h1 className=' m-0 py-2 fs-4 fw-bold'>LinkedIn News</h1>
            <i className=' bi bi-info btn'></i>
            </section>
            <h1 className=" fs-6">Top stories</h1>
            <ul>
                <li>
                    <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                    <section className=' d-flex align-items-center'>
                        <span>2d ago</span>
                        <i className=" bi bi-dot"></i>
                        <span>1,780 readers</span>
                    </section>
                </li>
                <li>
                    <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                    <section className=' d-flex align-items-center'>
                        <span>2d ago</span>
                        <i className=" bi bi-dot"></i>
                        <span>1,780 readers</span>
                    </section>
                </li>

                <li>
                    <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                    <section className=' d-flex align-items-center'>
                        <span>2d ago</span>
                        <i className=" bi bi-dot"></i>
                        <span>1,780 readers</span>
                    </section>
                </li>
                <li>
                    <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                    <section className=' d-flex align-items-center'>
                        <span>2d ago</span>
                        <i className=" bi bi-dot"></i>
                        <span>1,780 readers</span>
                    </section>
                </li>
                <li>
                    <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                    <section className=' d-flex align-items-center'>
                        <span>2d ago</span>
                        <i className=" bi bi-dot"></i>
                        <span>1,780 readers</span>
                    </section>
                </li>
                <li>
                    <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                    <section className=' d-flex align-items-center'>
                        <span>2d ago</span>
                        <i className=" bi bi-dot"></i>
                        <span>1,780 readers</span>
                    </section>
                </li>

                {
                    showMore && (
                        <>
                        <li>
                        <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                        <section className=' d-flex align-items-center'>
                            <span>2d ago</span>
                            <i className=" bi bi-dot"></i>
                            <span>1,780 readers</span>
                        </section>
                    </li>
                    <li>
                        <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                        <section className=' d-flex align-items-center'>
                            <span>2d ago</span>
                            <i className=" bi bi-dot"></i>
                            <span>1,780 readers</span>
                        </section>
                    </li>
    
                    <li>
                        <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                        <section className=' d-flex align-items-center'>
                            <span>2d ago</span>
                            <i className=" bi bi-dot"></i>
                            <span>1,780 readers</span>
                        </section>
                    </li>
                    <li>
                        <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                        <section className=' d-flex align-items-center'>
                            <span>2d ago</span>
                            <i className=" bi bi-dot"></i>
                            <span>1,780 readers</span>
                        </section>
                    </li>
                    <li>
                        <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                        <section className=' d-flex align-items-center'>
                            <span>2d ago</span>
                            <i className=" bi bi-dot"></i>
                            <span>1,780 readers</span>
                        </section>
                    </li>
                    <li>
                        <h1 className=" m-0 fs-6">What's next for Applied AI?</h1>
                        <section className=' d-flex align-items-center'>
                            <span>2d ago</span>
                            <i className=" bi bi-dot"></i>
                            <span>1,780 readers</span>
                        </section>
                    </li>
                        </>
                    )
                }
                <button className=' py-3 d-flex align-content-center justify-content-center border-0 w-100 btn' onClick={toogleShowMore}>
                    <h1 className='fw-normal m-0' style={{ fontSize : "0.9rem"}}>Show less <i className=' bi bi-caret-down-fill' style={{ fontSize : "0.8rem"}}></i></h1>
                </button>

            </ul>
        </div>
    )
}