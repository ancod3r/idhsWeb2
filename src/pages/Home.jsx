import React from 'react';
// import SearchBar from '../components/ui/search/SearchBar';
import TopHospitals from '../components/ui/hospitals/TopHospitals';
import TopDoctors from '../components/ui/doctors/TopDoctors';
import Login from '../components/auth/Login';
import ImageWithTextColumns from '../components/ui/top/ImageBar';
import Wellness from '../components/ui/wellness/Wellness';
import CareFor from '../components/ui/care/CareFor';
import TopRatedDoctors from '../components/ui/top-rated/TopRatedDoctors';
import TopRatedHospitals from '../components/ui/top-rated/TopRatedHospitals';
import HealthcareProgram from '../components/ui/healthcare-program/HealthcareProgram';
import OurBlogs from '../components/ui/our-blogs/OurBlogs';
import OurVideos from '../components/ui/our-videos/OurVideos';
import Testimonial from '../components/ui/testimonial/Testimonial';

function Home() {
  return (
    <>
      <Login />
      <ImageWithTextColumns></ImageWithTextColumns>
      <TopRatedDoctors></TopRatedDoctors>
      <TopRatedHospitals></TopRatedHospitals>
      <CareFor></CareFor>
      {/* <SearchBar></SearchBar> */}
      <TopHospitals></TopHospitals>
      <TopDoctors></TopDoctors>
      <Wellness></Wellness>
      <HealthcareProgram></HealthcareProgram>
      <Testimonial></Testimonial>
      <OurBlogs></OurBlogs>
      <OurVideos></OurVideos>
    </>
  );
};

export default Home;