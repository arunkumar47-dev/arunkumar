
import './App.css';
import Button from './project/Button';
import Card from './project/Card';
import Image from './project/Image';
import Map from './project/Map';
import Prodect from './project/Prodect';




function App() {
  const student=[

    {
      id:1,
      name:"arun",
      class:5,
      house:"green",
      img:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
    },
    {
      id:2,
      name:"priya",
      class:5,
      house:"blue",
      img:"https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg"
    },
    {
      id:3,
      name:"saran",
      class:5,
      house:"red",
      img:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
    },
    {
      id:4,
      name:"kavitha",
      class:5,
      house:"yellow",
      img:"https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg"
    },
    {
      id:5,
      name:"sahthi",
      class:5,
      house:"green",
      img:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
    },
    {
      id:6,
      name:"sabari",
      class:5,
      house:"blue",
      img:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
    },
    {
      id:7,
      name:"sanjay",
      class:5,
      house:"red",
      img:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
    },
    {
      id:8,
      name:"dhivya",
      class:5,
      house:"yellow",
      img:"https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg"
    },
    {
      id:9,
      name:"selvi",
      class:5,
      house:"green",
      img:"https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg"
    },
    {
      id:10,
      name:"harshith",
      class:5,
      house:"blue",
      img:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
    }
    ]
    return <div className="App">
       {student.map((val)=><Card src={val.img}/>)}
    </div>;
}

export default App;
