
import { UserState } from '../context/UserContext'
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import useVideo from '../hook/useVideo';
import useFav from '../hook/useFav';
import InfoModal from '../components/InfoModal';
import { useState } from 'react';

const Home = () => {

  const [visible,setVisible] = useState(false);
    const url = '/videos'
    const favurl = '/favourites'
    const {userDetails,favData} = UserState();
    const {data} = useVideo(url);
    useFav(favurl,userDetails._id)   
  return (
    <>
    {visible && <InfoModal setVisible={setVisible} visible={visible}/>}
    <Navbar/>
    <Billboard setVisible={setVisible} visible={visible}/>
    <div>
      <MovieList 
        setVisible={setVisible} 
        visible={visible}
        title="Trending Now"
        movieList={data}
        />
        <MovieList 
        title="MyList"
        movieList={favData} 
        setVisible={setVisible} 
        visible={visible}
        />
    </div>
    </>
  )
}

export default Home