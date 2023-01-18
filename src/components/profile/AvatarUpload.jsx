import { useEffect, useRef, useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import Swal from "sweetalert2";
import { usePutUserMutation } from "../../api/userApi";
import { MdAddAPhoto } from "react-icons/md";
import { MiniLoading } from "../loading/MiniLoading";
import "./profile.css";

const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
const authenticationEndpoint = `${process.env.REACT_APP_API_URL}/imageKit`;

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function AvatarUpload({ user }) {
  const id = user._id;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const inputRefTest = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [editUserMutation, { isLoading, isError }] = usePutUserMutation();

  const changeHandler = (e) => {
    const filePreview = e.target.files[0];
    if (!filePreview.type.match(imageMimeType)) {
      console.log('error de imagen')
      alert("Formato invalido, solo imágenes!");
      inputRefTest.current.abort()
      return;
    }
    setFile(filePreview);
  };

  useEffect(() => {
    let fileReader;
    let isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const onError = (err) => {
    console.log("Error", err);
    setLoading(false);
    setError(true);
  };

  const onSuccess = async (res) => {
   
    console.log("Success", res);
    try {
      const editUserValues = {
        ...user,
        avatar: res.url,
      };
      await await editUserMutation({ id, ...editUserValues }).unwrap();

      setLoading(false);

      Swal.fire({
        icon:"success",
        confirmButtonColor: "red",
       
        text: "Avatar cambiado exitosamente!!",
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
      setFileDataURL(null);
    }
  };

  const onUploadStart = () => {
   
    setLoading(true);
  };

 

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticationEndpoint={authenticationEndpoint}
    >
      <IKUpload
        fileName="avatar.png"
        onError={onError}
        onSuccess={onSuccess}
        /*  onUploadProgress={onUploadProgress} */
        onUploadStart={onUploadStart}
        onChange={changeHandler}
        validateFile={(file) => /image/.test(file.type)}
        style={{ display: "none" }}
        inputRef={inputRefTest}
      />

      {inputRefTest && (
        <button
          onClick={() => inputRefTest.current.click()}
          type="button"
          style={{
            width: "190px",
            height: "190px",
            backgroundColor: "#ccc",
            margin: "20px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dashed  #333",
            cursor: "pointer",
            position: "relative",
          }}
        >
          {fileDataURL && (
            <>
              {loading || isLoading ? (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    bottom: 15,
                    right: 15,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <MiniLoading />
                </div>
              ) : (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    bottom: 15,
                    right: 15,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <MdAddAPhoto />
                </div>
              )}

              <div
                style={{
                  borderRadius: "50%",
                  width: "190px",
                  height: "190px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={fileDataURL}
                  alt="preview"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </>
          )}
          {!fileDataURL && (
            <>
              {loading || isLoading ? (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    bottom: 15,
                    right: 15,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <MiniLoading />
                </div>
              ) : (
                <div
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    bottom: 15,
                    right: 15,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <MdAddAPhoto />
                </div>
              )}

              <div
                style={{
                  borderRadius: "50%",
                  width: "190px",
                  height: "190px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={user.avatar}
                  alt="preview"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </>
          )}
        </button>
      )}
    </IKContext>
  );
}

export default AvatarUpload;
