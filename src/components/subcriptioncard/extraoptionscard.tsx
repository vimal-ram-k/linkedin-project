
export const ExtraOptionsCard = () => {
    return(
        <div className=" card px-2 p-2 mt-2">
            <ul>
                <li className=" btn d-flex align-items-center column-gap-2">
                    <i className=" bi bi-save-fill" style={{ fontSize : "0.8rem"}}></i>
                    <h1 className="m-0 p-0" style={{ fontSize : "0.8rem"}}>Saved items</h1>
                </li>
                <li className=" btn d-flex align-items-center column-gap-2">
                    <i className=" bi bi-people" style={{ fontSize : "0.8rem"}}></i>
                    <h1 className="m-0 p-0" style={{ fontSize : "0.8rem"}}>Group</h1>
                </li>
                <li className=" btn d-flex align-items-center column-gap-2">
                    <i className=" bi bi-calendar-event" style={{ fontSize : "0.8rem"}}></i>
                    <h1 className="m-0 p-0" style={{ fontSize : "0.8rem"}}>Events</h1>
                </li>
            </ul>
        </div>
    )
}