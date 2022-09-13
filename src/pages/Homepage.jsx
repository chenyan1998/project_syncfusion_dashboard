import React from 'react';
import myImage from '/Users/chenyan/Desktop/my-app/project_syncfusion_dashboard/src/data/b1.jpg'
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};


const Homepage= () => (
  <div className="md:m-10 mt--10 rounded-3xl">
    {/* <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"></div> */}
    <Header category="App" title="Homepage" />
    <div className="text-center">
      <img src={myImage} width="1200" height="800" ></img>
      <div className=" bg-white rounded-3xl ">
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-20 mb-4">Part1</p>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-20 mb-4">Part2</p>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-20 mb-4">Part3</p>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-20 mb-4">Part4</p>
        </div>
      </div>
      </div>
      
    </div>
  </div>
);

export default Homepage;
