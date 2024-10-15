export function getFileList(fileArray: File[]) {
  const dataTransfer = new DataTransfer();

  fileArray.forEach((file) => {
    dataTransfer.items.add(file);
  });

  return dataTransfer.files;
}

export function mergeFileList(
  orgFileList: FileList | File[],
  newFileList: FileList | File[]
) {
  const newFileArray = Array.from(newFileList);
  const orgFileArray = Array.from(orgFileList);

  const filteredNewFileArray = newFileArray.filter(({ name: newFileName }) => {
    const orgNameArray = orgFileArray.map(
      ({ name: orgFileName }) => orgFileName
    );
    return !orgNameArray.includes(newFileName);
  });

  const fileList = getFileList([...orgFileArray, ...filteredNewFileArray]);

  return fileList;
}

export function getPreviewImage(file: File) {
  const isImageType = file.type.startsWith('image/');
  if (!isImageType) throw new Error('file type is not image.');

  const imageUrl = URL.createObjectURL(file);

  return imageUrl;
}

export function removeFile(
  files: FileList,
  target: { index?: number; name?: string }
) {
  if (target.index === undefined && target.name === undefined) {
    throw new Error('An index or name is required.');
  }

  const type = target.index !== undefined ? 'INDEX' : 'NAME';

  let filteredArray: File[];
  if (type === 'INDEX') {
    filteredArray = Array.from(files).filter(
      (_, index) => index !== target.index
    );
  } else if (type === 'NAME') {
    filteredArray = Array.from(files).filter(
      (file) => file.name !== target.name
    );
  } else {
    throw new Error('target type is invalid.');
  }

  const result = getFileList(filteredArray);
  return result;
}
