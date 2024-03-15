import React, { useState } from "react";

export default function FormUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

const handleFileChange = (e)=>{
    console.log(e.target.files[0])
    const file = e.target.files[0];

    if(file){
        setSelectedFile(file)
        setPreviewUrl(URL.createObjectURL(file))

        const formData = new FormData();
        formData.append('image', selectedFile)
        console.log(formData.entries)

    }
}

  return <div>
    <form>
        <input type="file" onChange={handleFileChange}/>
        {previewUrl && <img src={previewUrl} className="w-48 h-48 rounded-full object-cover"/>}
    </form>
  </div>;
}
