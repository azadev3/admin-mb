import React from 'react';
import { BiSearchAlt2, BiSearch } from 'react-icons/bi';
import SearchModal from './SearchModal';
import { useLocation } from 'react-router-dom';

const SearchContainer: React.FC = () => {
  const [searchModal, setSearchModal] = React.useState<boolean>(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className={`search-container ${isHome ? "is-home" : ""}`}>
      <div className="top-head">
        <h2>Sürətli Axtarış</h2>
        <BiSearchAlt2 className="search-icon" />
      </div>
      <div className="search-button" role="button" onClick={() => setSearchModal(true)}>
        <BiSearch className="search" />
        <input type="search" placeholder="İstədiyiniz bir şeyi axtarış üçün yazın..." />
      </div>
      <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
    </div>
  );
};

export default SearchContainer;
