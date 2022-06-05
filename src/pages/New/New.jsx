import React,{useEffect} from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth ,storage} from "../../firebase";
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const New = ({ inputs, title }) => {
  const [file, setFiles] = React.useState("");
  const [data, setData] = React.useState({});
  const [per, setPerc] = React.useState(null);
  const navigate   = useNavigate()
  console.log(file);
  // add new data from input
  const handleInput = async (event) => {
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };

  // submit form
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };
// upload file 
useEffect(() => {
  const uploadFile = () => {
    const name = new Date().getTime() + file.name;

    console.log(name);
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setPerc(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({ ...prev, img: downloadURL }));
        });
      }
    );
  };
  file && uploadFile();
}, [file]);
  //   jsx
  return (
    <div className="New flex w-100">
      <Sidebar />
      <div className="container newContainer">
        <Navbar />
        <div className="px-4 py-5">
          <div className="top mx-auto m-5 py-5 px-5 shadow-lg ">
            <h1 className="text-2xl font-bold"> {title}</h1>
          </div>
          <div className="bottom mx-auto m-5 py-5 px-5 shadow-lg flex">
            <div className="leftNew ">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
                className={"w-24 h-24 object-cover  rounded-full"}
              />
            </div>
            <div className="rightNew">
              <form
                action=""
                onSubmit={handleAdd}
                className="form flex flex-wrap gap-6 justify-around"
              >
                <div className="formLInput flex items-center">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    onChange={(event) => setFiles(event.target.files[0])}
                    id="file"
                    className="hidden"
                  />
                </div>
                {inputs.map((item, id) => {
                  return (
                    <div className="formLInput" key={id}>
                      <label
                        htmlFor="UserName"
                        className="mx-1 flex item-center"
                      >
                        {item.label}
                      </label>
                      <input
                        type={item.type}
                        placeholder={item.placeholder}
                        className="inputStyled"
                        id={item.id}
                        onChange={handleInput}
                      />
                    </div>
                  );
                })}
                <button
                  type="submit"
                  disabled={per !== null && per<100 }
                  className="p-3 mt-3 flex  bg-green-400 rounded-lg text-white font-semibold text-sm w-36 justify-center"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
