import { useState } from "react";
import axios from "axios";

export function CSVImport() {
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //  my file exist in csvOutput
    if (file) {
      const params = new FormData(e.target);
      params.append("file", file);
      console.log(file);

      //this needs to somehow pass my entire file to the method I have the writes each row to the DB
      axios.post("http://localhost:3000/bulk_import_conditions.json", params).then((response) => {
        e.target.reset();
        window.location.href = "/observed_conditions";
      });
      // };

      fileReader.readAsText(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bulk Import Conditions </h1>
      <form onSubmit={handleOnSubmit}>
        <input type="file" id="csvFileInput" onChange={handleOnChange} />
        <input type="hidden" name="csvimport" />
        <button type="submit">Import CSV</button>
      </form>
    </div>
  );
}
