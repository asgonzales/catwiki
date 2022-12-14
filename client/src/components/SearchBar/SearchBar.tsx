import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBreedNames } from '../../redux/breedSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { BreedNames } from '../../types/types';
import style from './SearchBar.module.css';
import iconSearch from '../../media/Icons/search.png'







export default function SearchBar () {
    const names = useAppSelector(state => state.breed.names)
    const dispatch = useAppDispatch()
    const namesDiv = useRef<HTMLDivElement>(null)
    const inputNames = useRef<HTMLInputElement>(null)
    const [filterResults, setFilterResults] = useState<BreedNames[]>([])


    useEffect(() => {
        if(names.length == 0) dispatch(getBreedNames())
        if(namesDiv.current) {
            if(filterResults.length == 0) {
                namesDiv.current.className = style.hiddenNamesDiv
            }
            else {
                namesDiv.current.className = style.namesDiv
            }
        }
    }, [names, filterResults])

    const handleResults = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilterResults(
            names.filter(el => {
                const regex = new RegExp(`${e.target.value}`, 'gi')
                return el.name.match(regex)
            })
        )
        if(e.target.value == '') setFilterResults([])
    }



    return (
        <div className={style.ContSearchBar}>
            <div className={style.headerDiv}>
                <div>
                    <Link to='/' className={style.link}>
                        <h1><span className={style.Cat}>Cat</span> <span className={style.Wiki}>Wiki</span></h1>
                    </Link>
                </div>
                {/* <div>
                    <span>Menu</span>
                </div> */}
            </div>
            <div className={style.searchDiv}>
                <div>
                    <div  className={style.searchInputDiv}>
                        <div>
                            <img src={iconSearch} alt="search" />
                        </div>
                        <input ref={inputNames} onChange={e => handleResults(e)} className={style.searchInput} type="text" placeholder='Search breeds...' />
                    </div>
                    <div className={style.namesDiv} ref={namesDiv} hidden>
                        {
                            filterResults.map((el, index) => {
                                return (
                                    <Link to={`/breed/${el.id}`} key={index} className={style.nameLink} >{el.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <button className={style.searchButton}>Buscar</button> */}
            </div>
        </div>
    )
}