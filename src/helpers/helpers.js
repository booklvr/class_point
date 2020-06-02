

function readSingleFile(evt) {
    var f = evt.target.files[0]; 
    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result;
            document.write("File Uploaded! <br />" + "name: " + f.name + "<br />" + "content: " + contents + "<br />" + "type: " + f.type + "<br />" + "size: " + f.size + " bytes <br />");

            

            var lines = contents.split("\n"), values = [];
            lines = lines.map(line => line.trim());
            // console.log(lines);

            const keys = lines[0].split(',');

            for (var i=1; i < (lines.length) - 1; i++){
                values.push(lines[i].split(","));
            }

            console.log(values);

            
            // console.log('values:', values)

            // const students = []

            // {
            //     name: 'nick',
            //     gender: 'male'
            // }

            function createStudentObject(values, keys) {
                const classlist = values.map(value =>{
                    return {
                        [keys[0]]: value[0],
                        [keys[1]]: value[1],
                    }
                }) 
                return classlist;
            }

            const students = createStudentObject(values, keys);

            console.log(students)


            // const values = lines[0].split('').shift();
            // console.log('keys:', keys);
            // console.log('values:', values)

            // for (key of keys) {
            //     for ()
            // }

            // for (value = 1; value < lines.length; value++) {
            //     console.log(lines[value]);
            // }


            // for (var i=0; i<lines.length; i++){
            //     output.push("<tr><td>" + lines[i].split(",").join("</td><td>") + "</td></tr>");
            // }
            // output = "<table>" + output.join("") + "</table>";
            document.write(JSON.stringify(students));
        }
        r.readAsText(f);
        // document.write(output);
    } else { 
        alert("Failed to load file");
    }
}
document.getElementById('upload').addEventListener('change', readSingleFile);
