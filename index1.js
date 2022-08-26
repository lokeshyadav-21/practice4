
const data = {
  person_info_1: {
    profile: {
      fullName: "Javier Hernandez",
      nationality: {
        country: "Mexico",
      },
      tel: 904902394,
    },
    current_address: {
      current_city: {
        value: "Bangalore",
        zip: "399993",
      },
    },
  },

  person_info_2: {
    profile: {
      fullName: "Emily Spade",
      nationality: {
        country: "Norway",
      },
      tel: 309320239,
    },
    current_address: {
      current_city: {
        value: "Oslo",
        zip: "239292",
      },
    },
  },
  person_info_3: {
    profile: {
      fullName: "John Cigan",
      nationality: {
        country: "Turkey",
      },
      tel: 932483988,
    },
    current_address: {
      current_city: {
        value: "Istanbul",
        zip: "932099",
      },
    },
  },
  person_info_4: {
    profile: {
      fullName: "Marsh Hobbs",
      nationality: {
        country: "USA",
      },
      tel: 32043988,
    },
    current_address: {
      current_city: {
        value: "Istanbul",
        zip: "932099",
      },
    },
  },
};






//Q1

const result = Object.values(data);

for (let i = 0; i < result.length; i++){

    console.log(result[i]);
};




//Q2

for (let i = 0; i < Object.values(data).length; i++) {

    let array1 = Object.values(data)[i].profile.fullName;   //storing fullName in array1 variable

    let array2 = Object.values(data)[i].profile.nationality.country;   //storing country in array2 variable

    let outputOfThisObject = [array1, array2];

    console.log(outputOfThisObject);

};




//Q3

for (let i of Object.keys(data)) {

    var tel = data[i].profile.tel;   //storing 'tel' in a variable before deletion

    delete data[i].profile.tel; //deleting 'tel' from profile

    data[i]["tel"] = tel;   //moving 'tel' outside
 
    console.log(data);

};

