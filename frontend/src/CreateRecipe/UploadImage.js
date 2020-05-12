import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { storage } from '../firebaseConfig'

export default function UploadImage({ setImageAsUrl, imageAsUrl }) {
  const [imageAsFile, setImageAsFile] = useState('')

  return (
    <ImageUploadSection>
      <InputHidden
        id="imageUpload"
        type="file"
        name="image"
        onChange={handleImageAsFile}
      />
      <UploadImageLabel htmlFor="imageUpload">Browse...</UploadImageLabel>
      {imageAsUrl.imageUrl === '' && (
        <StyledParagraph>Please upload your image</StyledParagraph>
      )}
      {imageAsUrl.imageUrl !== '' && (
        <StyledParagraph>{`Image ${imageAsFile.name} successfully uploaded`}</StyledParagraph>
      )}
    </ImageUploadSection>
  )

  function handleImageAsFile(event) {
    const image = event.target.files[0]
    setImageAsFile(image)
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot)
      },
      (error) => {
        console.log(error)
        alert('Please try again')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageAsUrl({ imageUrl: url })
          })
      }
    )
  }
}
const ImageUploadSection = styled.section`
  margin-top: 22px;
  display: grid;
  grid-template-columns: 100px auto;
`

const InputHidden = styled.input`
  display: none;
  grid-column: 1 / 2;
`

const UploadImageLabel = styled.label`
  font-weight: 200;
  font-size: 14px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #514f4b;
  font-family: 'Josefin Sans', sans-serif;
  background: #f2efe9;
  grid-column: 1 / 2;
  justify-self: center;
  align-self: center;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.2),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.2),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.15);
`

const StyledParagraph = styled.p`
  display: inline;
  font-weight: 200;
  font-size: 14px;
  grid-column: 2 / 3;
`
