import Layout from '../../components/layout/layout';
import PopularCategories from '../../components/popularCategories/popularCategories';
import OurMission from '../../components/ourMission/ourMission';
import PeopleWithUs from '../../components/peopleWithUs/peopleWithUs';
import HotProposals from '../../components/hotProposals/hotProposals';
import YourFeedbacksSection from '../../components/YourFeedbacksSection/yourFeedbacksSection';
import TopMastersSection from '../../components/TopMastersSection/TopMastersSection';
import HeroSection from '../../components/HeroSection/HeroSection';


import {
  useSignupMutation,
  useLoginMutation,
// useRefreshTokenQuery,
} from '../../redux/authSlice/authSlice';

import { useCurrentUserQuery } from '../../redux/usersSliice/usersSlice';

import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/userSlice/userSlice';

const HomePage = () => {
  const [ sinup, result ] = useSignupMutation();
  const [ login ] = useLoginMutation();
  const { data } = useCurrentUserQuery();
  const dispatch = useDispatch();

  // ===================   SINGUP   ✅ ============

  const newUser = {
    'username': 'U1s2d XX2',
    'phone': '031d22234567',
    'role': 'client',
    'password': 'ss1dwwFf32f12FF',
    'email': 'us22dr@eampl22e.com',
  };

  const handleSubmitRegister = ( { username, email, password, phone, role } ) => {
    sinup( { username, email, password, phone, role } )
        .unwrap()
        .then( () => {
          console.log( '✅ Register success' );
        } )
        .catch( ( e ) => console.log( '❌ Register error: ', e.data.detail ) );
  };

  // ===================   LOGIN + CurrentUser ✅  ===============

  const handleLogin = () => {
    login( { username: 'donkanelion@gmail.com', password: 'FEwf32F78' } )
        .unwrap()
        .then( () => {
          console.log( '✅ Register success', data );
        } )
        .catch( ( e ) => console.log( '❌ Login error: ', e.data.detail ) );
  };

  // ===========   LOGOUT 🟠  ==============

  const handleLogout = () => {
    dispatch( resetUser() );
    localStorage.removeItem( 'persist:user' );
    console.log( '✅ logout!' );
  };

  // ==========   RefreshTokenQuery ❌  =========

  // useEffect( () => {
  //   // useRefreshTokenQuery();
  //   // console.log( 'useRefreshTokenQuery: ', refresh );
  // }, [] );


  return (
    <Layout>
  

      <HeroSection />
      <div className="main-container">
        <PopularCategories />
        <OurMission />
        <TopMastersSection />
        <HotProposals />
        <PeopleWithUs />
        <YourFeedbacksSection />
      </div>
    </Layout>
  );
};

export default HomePage;
