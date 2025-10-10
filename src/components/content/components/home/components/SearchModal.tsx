import React, { type ChangeEvent, type SetStateAction } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { NoResult, NoSearchResult } from './ui/NoResult';
import { SIDEBAR_ROUTES } from '../../../../../hooks/sidebarHooks/SidebarRoutes';
import type { RoutesInterface } from '../../../../types/sidebar/routeType';
import { SearchHighlighter } from './utils/SearchHighlighter';
import { IoMdArrowDropdown } from 'react-icons/io';
import type { DropdownItems } from '../../../../sidebar/uitils/SidebarLink';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  searchModal: boolean;
  setSearchModal: React.Dispatch<SetStateAction<boolean>>;
}

const SearchModal: React.FC<SearchModalProps> = ({ searchModal, setSearchModal }) => {
  const divRef = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const closeModal = () => setSearchModal(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  React.useEffect(() => {
    if (searchModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchModal]);

  const [results, setResults] = React.useState<RoutesInterface[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isSearching, setIsSearching] = React.useState<boolean>(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);

    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === '') {
      setResults([]);
      setIsSearching(false);
    } else {
      const filteredItems = SIDEBAR_ROUTES.filter((item: RoutesInterface) => {
        const lower = value.toLocaleLowerCase('az');

        const check = (field?: string) =>
          field ? field.toLocaleLowerCase('az').includes(lower) : false;

        return (
          check(item.title) ||
          check(item.route) ||
          item.dropdowns?.some(d => check(d.title))
        );
      });

      setResults(filteredItems);
    }
  };

  return (
    <div className={`search-modal-overlay ${searchModal ? 'active' : ''}`}>
      <div ref={divRef} className={`search-modal ${searchModal ? 'active' : ''}`}>
        <div className="top-head">
          <h2>Sürətli Axtarış</h2>
          <IoCloseCircleOutline className="close-icon" onClick={closeModal} />
        </div>
        <div className="search-input">
          <BiSearch className="search" />
          <input
            onChange={handleSearch}
            value={inputValue}
            ref={inputRef}
            type="search"
            placeholder="İstədiyiniz bir şeyi axtarış üçün yazın..."
          />
        </div>
        {/* results */}
        {results?.length > 0 ? (
          <div className="results-container">
            {results.map((item: RoutesInterface) => (
              <div className="result-item" key={item.id}>
                <div className="main-dropdown">
                  <div className="item-dropdown">
                    {item?.route ? (
                      <Link onClick={closeModal} to={item.route}>
                        <h2>
                          <SearchHighlighter text={item.title} highlight={inputValue} />
                        </h2>
                      </Link>
                    ) : (
                      <h2>
                        <SearchHighlighter text={item.title} highlight={inputValue} />
                      </h2>
                    )}
                    <IoMdArrowDropdown className="dropdown-icon" />
                  </div>

                  <div className="inner-dropdown">
                    {item?.dropdowns?.map((dropdown: DropdownItems) => (
                      <div key={dropdown.id} className="inner-dropdown">
                        <div className="top">
                          {dropdown?.to ? (
                            <Link onClick={closeModal} to={dropdown.to}>
                              <h2>
                                <SearchHighlighter
                                  text={dropdown.title}
                                  highlight={inputValue}
                                />
                              </h2>
                            </Link>
                          ) : (
                            <h2>
                              <SearchHighlighter
                                text={dropdown.title}
                                highlight={inputValue}
                              />
                            </h2>
                          )}
                          {dropdown.dropdownItems &&
                            dropdown.dropdownItems.length > 0 && (
                              <IoMdArrowDropdown className="dropdown-icon" />
                            )}
                        </div>

                        {dropdown.dropdownItems && dropdown.dropdownItems.length > 0 && (
                          <div className="child-items">
                            {dropdown.dropdownItems.map((child: DropdownItems) =>
                              child?.to ? (
                                <Link onClick={closeModal} key={child.id} to={child.to}>
                                  <h2>
                                    <SearchHighlighter
                                      text={child.title}
                                      highlight={inputValue}
                                    />
                                  </h2>
                                </Link>
                              ) : (
                                <h2 key={child.id}>
                                  <SearchHighlighter
                                    text={child.title}
                                    highlight={inputValue}
                                  />
                                </h2>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isSearching && results?.length === 0 ? (
          <NoSearchResult />
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
};

export default SearchModal;
