import '../../../assets/styles/components/searchbar/searchbar.css';
export const SearchBar = () => {
  return (
    <div>
      <i className=" bi bi-search d-lg-none"></i>
      <p className=" nav-item-name m-0 p-0 d-none d-md-flex d-lg-none ">
        {' '}
        Search
      </p>
      <div className=" d-flex column-gap-2 bg-body-secondary ps-3 py-2 rounded-2 align-items-center searchbar-outer d-none d-lg-flex">
        <i
          className=" bi bi-search search-icon"
          style={{ fontSize: '0.9rem' }}
        ></i>
        <input
          type="text"
          placeholder="Search"
          className=" border-0 bg-transparent"
        />
      </div>
    </div>
  );
};
