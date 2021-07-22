const getBase64 = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    // Select the very first file from list
    var fileToLoad = file;
    // FileReader function for read the file.
    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    fileReader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      // Print data in console
      console.log(base64);
    };
    // Convert data to base64
    fileReader.readAsBinaryString(file);
  });
};
export default getBase64;
