export function mergeFileList(orgFileList: FileList, newFileList: FileList) {
  const newFileArray = Array.from(newFileList);
  const orgFileArray = Array.from(orgFileList);

  const filteredNewFileArray = newFileArray.filter(({ name: newFileName }) => {
    const orgNameArray = orgFileArray.map(
      ({ name: orgFileName }) => orgFileName
    );
    return !orgNameArray.includes(newFileName);
  });

  const dataTransfer = new DataTransfer();

  [...orgFileArray, ...filteredNewFileArray].forEach((file) => {
    dataTransfer.items.add(file);
  });

  return dataTransfer.files;
}

export function getPreviewImage(file: File) {
  const isImageType = file.type.startsWith('image/');
  if (!isImageType) throw new Error('file type is not image.');

  const imageUrl = URL.createObjectURL(file);

  return imageUrl;
}
