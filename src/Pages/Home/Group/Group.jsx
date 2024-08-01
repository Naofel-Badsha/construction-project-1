import BrandGroup1 from "../../../assets/b-logo-1.png";
import BrandGroup2 from "../../../assets/b-logo-2.jfif";
import BrandGroup3 from "../../../assets/b-logo-3.png";
import BrandGroup4 from "../../../assets/b-logo-4.jfif";
import BrandGroup5 from "../../../assets/b-logo-5.png";

const Group = () => {
  return (
    <div className="bg-[#fff]"> 
      <div className="container m-auto ">
        <div className="flex items-center justify-around gap-6 flex-wrap py-16">
          {/*------Brand-------logo-----1----*/}
          <img src={BrandGroup1} className="rounded-lg" />
          {/*------Brand-------logo-----2----*/}
          <img src={BrandGroup2} className="rounded-lg" />
          {/*------Brand-------logo-----3----*/}
          <img src={BrandGroup3} className="rounded-lg" />
          {/*------Brand-------logo-----4----*/}
          <img src={BrandGroup4} className="rounded-lg" />
          {/*------Brand-------logo-----5----*/}
          <img src={BrandGroup5} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Group;
