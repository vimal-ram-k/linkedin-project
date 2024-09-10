

export const AddPostCard = () => {

    return(

        <div className=" py-3 border h-25 col-12 col-sm-9  col-lg-6 col-xl-4  mt-3 rounded-2">
        <section className=" d-flex align-items-center justify-content-center">
            <i className=" bi bi-person" style={{ fontSize : "2rem"}}></i>
            <div className=" border rounded-5 position-relative" style={{ width : "80dvw" , height : "50px"}}>
                <span className="post-placeholder position-absolute start-0 ps-4 mt-2 text-nowrap ">Start a post, try writing with AI</span>
                <input type="text" className=" bg-transparent border-0  position-absolute start-0 ps-4 mt-2 text-nowrap " style={{ outline : "none"}} />
            </div>
        </section>

        <ul className=" d-flex justify-content-around">
            <li className=" d-flex align-items-center column-gap-2">
                <i className=" bi bi-medium" style={{ color : "blue" , fontSize : "2rem"}}></i>
                <span>Media</span>
            </li>
            <li className=" d-flex align-items-center column-gap-2">
                <i className=" bi bi-calendar" style={{ color : "orange" , fontSize : "1.5rem"}}></i>
                <span>Event</span>
            </li>
            <li className=" d-flex align-items-center column-gap-2">
                <i className=" bi bi-music-note" style={{ color : "red" , fontSize : "1.5rem"}}></i>
                <span>Write article</span>
            </li>
        </ul>
    </div>
    )
}