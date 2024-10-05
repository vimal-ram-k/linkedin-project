import home_data from '../../../pages/home/home.json';

export const HomeMainFeatures = () => {
  return (
    <>
      {home_data.banners.map((item) => {
        return (
          <div
            className=" container-fluid py-5  d-lg-flex justify-content-lg-center align-items-lg-center home-sub-banner"
            id={item.id}
          >
            <div className=" container row ">
              <div className="col-lg-6">
                <h1 className=" fw-normal fs-5 hm-bn-header">{item.header}</h1>

                <p
                  className=" fw-light py-2 "
                  style={{ fontSize: '0.9rem' }}
                >
                  {item.description}
                </p>
              </div>

              <div className=" col-lg-6">
                <ul className=" d-flex flex-wrap gap-2 column-gap-2 p-0">
                  {item.links.map((items) => {
                    if (items !== 'Show all') {
                      return (
                        <li className="">
                          <button
                            className=" btn border border-black fw-normal rounded-5 px-2  py-2"
                            style={{ fontSize: '0.8rem' }}
                          >
                            {items}
                          </button>
                        </li>
                      );
                    } else if (items === 'Show all') {
                      return (
                        <li className="">
                          <button
                            className=" btn text-primary fw-normal rounded-5 px-3 py-2"
                            style={{
                              fontSize: '0.9rem',
                              color: '#0965c2',
                              border: '1px solid #0965c2',
                            }}
                          >
                            Show all
                          </button>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
