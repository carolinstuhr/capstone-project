import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { storage } from '../firebaseConfig'

export default function UploadImage({ setImageAsUrl, imageAsUrl }) {
  const [imageAsFile, setImageAsFile] = useState('')
  const [uploadActive, setUploadActive] = useState(false)

  return (
    <ImageUploadSection>
      <InputHidden
        id="imageUpload"
        type="file"
        name="image"
        onChange={handleImageAsFile}
      />
      <UploadImageLabel htmlFor="imageUpload">Browse...</UploadImageLabel>
      {imageAsUrl.imageUrl === '' && uploadActive === false && (
        <StyledParagraph>Please upload your image</StyledParagraph>
      )}
      {imageAsUrl.imageUrl !== '' && uploadActive === false && (
        <StyledParagraph>{`Image ${imageAsFile.name} successfully uploaded`}</StyledParagraph>
      )}
      {uploadActive && (
        <StyledParagraph>{`Uploading image ...`}</StyledParagraph>
      )}
    </ImageUploadSection>
  )

  function handleImageAsFile(event) {
    setUploadActive(true)
    const image = event.target.files[0]
    setImageAsFile(image)
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('Please try again')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageAsUrl({ imageUrl: url })
            setUploadActive(false)
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
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: var(--primary);
  background: var(--input-background);
  grid-column: 1 / 2;
  justify-self: center;
  align-self: center;
`

const StyledParagraph = styled.p`
  display: inline;
  font-weight: 200;
  font-size: 14px;
  grid-column: 2 / 3;
`
