import { useCallback, useState } from 'react';
import './Search.css'

function Search() {
    const [ activeSearchResult, setActiveSearchResult ] = useState('')
    const handleHiddenAndDisplaySearchResult = useCallback((e) => {
        setActiveSearchResult('active')
    }, [activeSearchResult])

    return <div className="search">
        <div className="search-input">
            <input  onFocus={handleHiddenAndDisplaySearchResult} type="text" placeholder='Tìm kiếm ...' />
            <div className={`search-result ${activeSearchResult}`}>
                <div className="search-item">quan aos</div>
                <div className="search-item">quan aos</div>
                <div className="search-item">quan aos</div>
                <div className="search-item">quan aos</div>
                <div className="search-item">quan aos</div>
            </div>
        </div>
    </div>
}

export default Search;