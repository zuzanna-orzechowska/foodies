'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './picker.module.css'; 

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(); //do poglądu
  const imageInput = useRef(); //ref do ukrytego inputu
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
        setPickedImage(null);
        return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image selected by the user" fill />
          )}
        </div>

        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
      </div>
    </div>
  );
}