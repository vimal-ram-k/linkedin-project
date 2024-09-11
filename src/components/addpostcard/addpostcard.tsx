import './style/addpostcard.css'
import imagelogo from '../../assets/icons8-image-48.png'
export const AddPostCard = () => {

    return(

        <div className=" py-2 border h-25 col-12 col-sm-6  col-lg-6 col-xl-4 rounded-2 mt-md-3">
        <section className=" d-flex align-items-center justify-content-center column-gap-2">
            <i className=" bi bi-person" style={{ fontSize : "2rem"}}></i>
            <div className=" border rounded-5 position-relative" style={{ width : "80dvw" , height : "50px"}}>
                <span className="post-placeholder position-absolute  ps-4 mt-2 text-nowrap ">Start a post, try writing with AI</span>
                <input type="text" className=" bg-transparent border-0  position-absolute start-0 ps-4 mt-2 text-nowrap " style={{ outline : "none"}} />
            </div>
        </section>

        <ul className=" d-flex justify-content-around mt-2">
            <li className=" px-2 py-1 rounded-2 d-flex align-items-center column-gap-2">
                <img src={imagelogo} width={30} alt="image-logo-file-upload" />
                <span className='' style={{ fontSize : "0.8rem"}}>Media</span>
            </li>
            <li className=" px-2 py-1 rounded-2  d-flex align-items-center column-gap-2">
                <i className=" bi bi-calendar" style={{ color : "orange" , fontSize : "1.5rem"}}></i>
                <span  style={{ fontSize : "0.8rem"}}>Event</span>
            </li>
            <li className="px-2 py-1 rounded-2  d-flex align-items-center column-gap-2">
                <i className=" bi bi-music-note" style={{ color : "red" , fontSize : "1.5rem"}}></i>
                <span  style={{ fontSize : "0.8rem"}}>Write article</span>
            </li>
        </ul>
    </div>
    )
}