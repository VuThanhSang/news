import Image from "next/image";

const Hot = () => {
  return (
    <div className="w-10/12 flex space-x-1 mt-5">
      <div className="">
        <Image
          src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1683821078/images/yiqkhhragqsdpglccv9n.jpg"
          alt="logo"
          width={570}
          height={570}
          className="ml-28"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1683821078/images/yiqkhhragqsdpglccv9n.jpg"
          alt="logo"
          width={485}
          height={278}
          className="ml-24"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
        <div className="flex mt-1">
          <Image
            src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1683821078/images/yiqkhhragqsdpglccv9n.jpg"
            alt="logo"
            width={241}
            height={278}
            className="ml-24"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          />
          <Image
            src="https://res.cloudinary.com/dgfsdhshs/image/upload/v1683821078/images/yiqkhhragqsdpglccv9n.jpg"
            alt="logo"
            width={240}
            height={278}
            className="ml-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hot;
