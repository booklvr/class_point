var addClassroomUI = (function () {
  var DOMStrings = {
    className: ".add-class-name",
    submitBtn: ".submit",
    formBtn: ".form-btn",
    fileInput: ".file-input",
    fileValue: ".file-value",
  };

  var DOM = {
    className: document.querySelector(DOMStrings.className),
    or: document.querySelector(DOMStrings.or),
    submitBtn: document.querySelector(DOMStrings.submitBtn),
    fileInput: document.querySelector(DOMStrings.fileInput),
    fileValue: document.querySelector(DOMStrings.fileValue),
  };

  //HELPER FUNCTIONS
  const isCSVfile = function (fileUploadPath) {
    if (fileUploadPath != "") {
      const extension = fileUploadPath
        .substring(fileUploadPath.lastIndexOf(".") + 1)
        .toLowerCase();

      if (extension === "csv") {
        return true;
      } else {
        alert("You can only upload CSV files.");
        DOM.file.type = "";
        DOM.file.type = "file";
        return false;
      }
    }
  };

  return {
    getDOMStrings: function () {
      return DOMStrings;
    },
    checkForClassName: function () {
      // get elements
      const fileName = this.value.replace(/C:\\fakepath\\/i, "");
      DOM.fileValue.innerHTML = fileName;
      // const fileUploadPath = DOM.fileInput.value;
      // console.log(fileUploadPath)
      // DOM.fileValue.text = fileUploadPath;
      DOM.fileValue.style.display = "block";

      if (isCSVfile(fileName)) {
        if (DOM.className.value !== "") {
          return event.target.closest("form").submit();
        } else {
          DOM.submitBtn.innerText = "Upload File";
          DOM.submitBtn.classList += " upload-file";

          return alert("Please enter the class name first.");
        }
      } else {
        console.log("it is not a csv file");
      }
    },
  };
})();

export { addClassroomUI };
