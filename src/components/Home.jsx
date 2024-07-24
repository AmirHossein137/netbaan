import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Detail from './Detail';


const Home = () => {
  const [info, setInfo] = useState([])
  const [selected, setSelected] = useState('')

  const fetchData = async () => {
    const res = await fetch('https://run.mocky.io/v3/72e7e252-2f2b-462c-8e60-30a8a0cac801')
    const data = await res.json()
    setInfo(data)
  }

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const dom = info.domain;
  const ipInfo = info.ip;
  const cloudInfo = info.cloud;
  const assetsInfo = info.assets;

  function filtered(assetsInfo, selected) {
    let filter = assetsInfo;
    if (selected) {
      filter = filter.filter(({ type }) => selected === type)
    }
    return filter
  }

  const filterItems = filtered(assetsInfo, selected)

  return (
    <div className='flex flex-col gap-16'>
      <Cards dom={dom} ipInfo={ipInfo} cloudInfo={cloudInfo} handleChange={handleChange}/>
      <Detail filterItems={filterItems} />
    </div>
  )
}

export default Home