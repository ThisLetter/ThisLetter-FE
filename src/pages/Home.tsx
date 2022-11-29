import React from 'react';
import NavigateButton from '../components/common/NavigateButton';
import FetchTest from '../components/Room/FetchTest';

const Home = () => {

  return (
    <div>
      <NavigateButton color={'bg-yellow-400'} page={'/login'} text={'로그인페이지로 가기'} />
      <NavigateButton color={'bg-red-400'} page={'/register'} text={'회원가입페이지로 가기'} />
      <FetchTest />
    </div>
  );
};

export default Home;