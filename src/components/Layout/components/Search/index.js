import { useEffect, useRef, useState } from 'react'
import { useDebounce } from '~/hooks'
import * as searchService from '~/apiService/searchService'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react/headless'
import TippyTitle from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import images from '~/assets/images'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [showClear, setShowClear] = useState(false)
    const [txtSearch, setTxtSearch] = useState('')
    const [state, setState] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(txtSearch, 700)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            setLoading(true)
            const rs = await searchService.search(debounced)
            setSearchResult(rs)
            setLoading(false)
        }

        fetchApi()
    }, [debounced])

    const onShowClear = (val) => {
        if (val == ' ') {
            val = val.trim()
        }
        setShowClear(true)
        setTxtSearch(val)
    }

    const inputRef = useRef()

    const handleClearInputSearch = () => {
        setTxtSearch('')
        setSearchResult([])
        inputRef.current.focus()
    }

    return (
        <Tippy
            interactive
            visible={txtSearch.length > 0 && state}
            onClickOutside={() => setState(false)}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                        {/* <div className={cx('search-box-header')}>You may like</div>
                        <ul className={cx('list-key-search')}>
                            <li>
                                <img src={images.trending} alt="trending" />
                                <h4>HERO TEAM</h4>
                            </li>
                            <li>
                                <img src={images.hot} alt="hot" />
                                <h4>HERO TEAM</h4>
                            </li>
                            <li>
                                <div className={cx('wrapper-normal-info')}>
                                    <div className={cx('normal-info')}></div>
                                </div>
                                <h4>HERO TEAM</h4>
                            </li>
                        </ul> */}
                        <div className={cx('search-box-header')}>Accounts</div>
                        <ul className={cx('list-account-search')}>
                            {searchResult.map((rs) => (
                                <AccountItem key={rs.id} data={rs} />
                            ))}
                        </ul>
                    </div>
                </PopperWrapper>
            )}
        >
            <div className={cx('search-form')}>
                <input
                    ref={inputRef}
                    onFocus={() => setState(true)}
                    className={cx('search')}
                    placeholder="Search"
                    spellCheck="false"
                    value={txtSearch}
                    onChange={(e) => onShowClear(e.target.value)}
                />
                {showClear && !loading && !!txtSearch && (
                    <>
                        <button className={cx('search-clear')} onClick={handleClearInputSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <TippyTitle content="Tìm kiếm">
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </TippyTitle>
            </div>
        </Tippy>
    )
}

export default Search
