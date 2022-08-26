import { useState, Fragment } from 'react';
import HeroSection from '../src/components/HeroSection';
import style from '../styles/searchSec.module.scss';
import {GrSearch, GrClose} from 'react-icons/gr';
import {stripDiacritics} from '../src/hooks/stripDiacritics';
import InfiniteScroll from 'react-infinite-scroll-component';
import Head from 'next/head';


export default function Home({quran}){
  quran = quran.split('\n');
  const [searchAayat, setSearchAayat] = useState([...quran]);
  const [search, setSeacrch] = useState('');
  const [count,setCount] = useState(5);

  const searchHandle = (e) => {
    setSeacrch(e.target.value);
    // check in spaces only 
    if(e.target.value === ' ' || e.target.value === '  ' || e.target.value === '   '){
      setSearchAayat([]);
      return
    }

    let text = stripDiacritics(e.target.value);
    let filterAayat = quran.filter(Aayat => {
      let AayatText = Aayat.split("|")[2];
      AayatText = stripDiacritics(AayatText);
      if(AayatText.includes(text)){
        return Aayat;
      }
    });
    setSearchAayat(filterAayat);
  }
  
  const fetchData = () => {
    setTimeout(() => {
        setCount(count + 5);
      }, 1500);
  }

  return (
    <>
      <Head>
        <title>Ayyat Finder Home</title>
      </Head>
      <HeroSection/>
        <section className={style.search_section}>
          <h1 className={style.common_heading}>Search Aayat</h1>
          <div className={style.search}>
            <GrSearch/>
            <input type="text" className={style.search_input} value={search} onChange={searchHandle} placeholder='Search aayat'/>
            {search && <span className={style.reset_btn}><GrClose onClick={() => setSeacrch('')}/></span>}
          </div>
          {/*<div className={style.Resultcontainer}>
            {search && searchAayat.length !== 0 ? searchAayat.map((aayatData,index) => {
              let [Surah, ayatNumber,ayatText] = aayatData.split('|');
              let Marksearch = stripDiacritics(search);
              ayatText = stripDiacritics(ayatText);
              ayatText = ayatText.replace(Marksearch,`<span class='selected'>${Marksearch}</span>`);
              return(
                <Fragment  key={aayatData}>
                  <div className={style.resultBox}>
                    <p className={style.aayat_details}>{Surah} Aayat No. {ayatNumber}</p>
                    <p className={style.aayat_text} dangerouslySetInnerHTML={{ __html: ayatText }}></p>
                  </div>
                </Fragment>
              );
            }) : ''}
            {searchAayat.length === 0 && <p className={style.not_found}>No Aayat Found</p>}
          </div>*/}


          <div>{/*className={style.Resultcontainer}>*/}
            <InfiniteScroll
                className={style.Resultcontainer}
                dataLength={count} //This is important field to render the next data
                next={fetchData}
                hasMore={count <= searchAayat.length}
                loader={
                  <Fragment>
                    {
                      search &&
                      <div className={style.loader_container}>
                        <div className={style.loader}></div>
                      </div>
                    }
                  </Fragment>
                }
                scrollableTarget="scrollableDiv"
                endMessage={
                  <Fragment>
                    {search && searchAayat.length > 3 ?
                      <p className={style.see_all}>
                        You see all results
                      </p> : ''
                    }
                  </Fragment>
                }
            >
            {search && searchAayat.length !== 0 ? searchAayat.slice(0,count).map((aayatData,index) => {
                let [Surah, ayatNumber,ayatText] = aayatData.split('|');
                let Marksearch = stripDiacritics(search);
                ayatText = stripDiacritics(ayatText);
                ayatText = ayatText.replace(Marksearch,`<span class='selected'>${Marksearch}</span>`);
                return(
                  <Fragment  key={aayatData}>
                    <div className={style.resultBox}>
                      <p className={style.aayat_details}>{Surah} Aayat No. {ayatNumber}</p>
                      <p className={style.aayat_text} dangerouslySetInnerHTML={{ __html: ayatText }}></p>
                    </div>
                  </Fragment>
                );
              }) : ''}
            </InfiniteScroll>


            {searchAayat.length === 0 && search ? <p className={style.not_found}>No Aayat Found</p> : ''}
          </div>
        </section>
    </>
  )
}


// server side 
import { readFileSync } from 'fs';
import { join } from 'path';

export async function getServerSideProps(context){
  const quran = readFileSync(join(__dirname,'../../../public/Quran.txt'),{encoding: "utf-8"})
  return {
    props: {quran : quran},
  }
}