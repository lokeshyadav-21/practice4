/*
    Q1. Create a new file data.json
    { 
        "max": {
            colors: ['Orange', 'Red']
        }
    }


    Q2. Copy the contents of the data.json into a new folder output/data.json and delete the original file.
    Q3. Write a function that takes a person name and fav color as parameters and writes to data.json file
    (Do not replace the old content).
    Q4. Write a function that takes a person name and fav hobby as param and add that hobby as a separate key and write to data.json.
    (Do not replace the old content).
*/
let fs = require("fs")
let data = { 
    "max": {
        colors: ['Orange', 'Red']
    }
}

fs.writeFile('/home/lokesh/callbackDrill/output/data.json',JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('Saved!');
});


fs.readFile('/home/lokesh/callbackDrill/output/data.json',function (err,data) {
    if (err){
        console.log(err);
    }  else{
        fs.writeFile('/home/lokesh/callbackDrill/output2/data.json', data, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log('successful!');
            }
        });
    }  
})

  fs.unlink('/home/lokesh/callbackDrill/output/data.json', function (err) {
    if (err) throw err;
    console.log('File removed!');
  });


  function addingNewData(name, colour){

    const NewData = require('/home/lokesh/callbackDrill/output2/data.json');
        
    NewData[name] = colour;
        
    fs.writeFile('/home/lokesh/callbackDrill/output2/data.json', JSON.stringify(NewData), function (err) {
      if (err) return console.log(err);
      console.log('adding newData');
    });
    }
    addingNewData('lokesh', 'black');


    function addData(name, color,hobby,sports){

        const file = require('/home/lokesh/callbackDrill/output2/data.json');
       
        file[name] = color;
        file[hobby] = sports; 
    
        fs.writeFile('/home/lokesh/callbackDrill/output2/data.json', JSON.stringify(file), function writeJSON(err) {
          if (err) return console.log(err);
          console.log('adding more details!');
        });
        }
        addData('lokesh Yadav', 'Black', 'hobbies','sketching');





        



