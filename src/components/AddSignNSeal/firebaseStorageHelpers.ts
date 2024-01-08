
// Assuming you have initialized Firebase as shown above

import {firebaseApp} from "@/components/AddSignNSeal/firebaseConfig";
import {getStorage,ref,uploadString,getDownloadURL} from "firebase/storage";

let storage=getStorage(firebaseApp)

export const uploadToStorage = async (blobUrl: any,filename:string) => {
    const imageRef =ref(storage, "images/" + filename);
    try {
        const snapshot = await uploadString(imageRef, blobUrl,'data_url', );
        console.log('File uploaded successfully:', snapshot.ref.fullPath);
        // You can obtain the download URL like this:
        const downloadURL = await getDownloadURL(imageRef);
        //convert the download url to a blob
        return downloadURL
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      
      
}

// import { storage } from '@/config/firebaseConfig';



// export const uploadToStorage = async (blobUrl:any, filename:any) => {
//   const storageRef = storage.ref();
//   const imageRef = storageRef.child('images/' + filename);

//   try {
//     // Create a reference to the file you want to upload
//     const snapshot = await imageRef.putString(blobUrl, 'data_url');

//     console.log('File uploaded successfully:', snapshot.ref.fullPath);

//     // You can obtain the download URL like this:
//     const downloadURL = await imageRef.getDownloadURL();

//     // Convert the download URL to a blob if needed
//     // Example: const blob = await fetch(downloadURL).then((response) => response.blob());

//     return downloadURL;
//   } catch (error) {
//     console.error('Error uploading file:', error);
//   }
// };



//function to convert firebase storage url to dataUrl
 export const convertFirebaseUrltoDataUrl=async(url:string)=>{
  //output is data:image/png;base64....
  const response = await fetch(url);
  const blob = await response.blob();
  // const blobUrl = URL.createObjectURL(blob);
  //blob to dataUrl
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
 }
