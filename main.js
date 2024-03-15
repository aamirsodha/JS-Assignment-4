//Q1

//var studentNames = [];

//Q2

//Same

//Q3

// var stringArray = ['String1','String2','String3']

//Q4

//var numberArray = [1,2,3,4,5]

//Q5

//var booleanArray = [true,false]

//Q6

//var mixArray = [1,2,3,'String1','String2',true,false]

//Q7


//using loop
// var avi_qual = ['SSC','HSC','BCS','BCOM','MS','M. Phil.','PhD']

// var text = "<h2>Qualifications</h2><ol>"

//   for (let i = 0; i < avi_qual.length; i++)
//   {
//     text += "<li>" + avi_qual[i] + "</li>";
//   }
//   text+="</ol>";
//   document.write(text);
  

//WITHOUT LOOP

// var avi_qual = ['SSC','HSC','BCS','BS','BCOM','MS','M. Phil.','PhD']

// document.write('<h2>Qualifications</h2><ol><li>' + avi_qual[0] + '</li><li>' + avi_qual[1] + '</li><li>' + avi_qual[2] + '</li><li>' + avi_qual[3] + '</li><li>' + avi_qual[4] + '</li><li>' + avi_qual[5] + '</li><li>' + avi_qual[6] + '</li><li>' + avi_qual[7] + '</li></ol>')


//Q8

// var stu_names = ['Muhammad Aamir Raza','Sarib Sakaria','Hassan Lakhani']
// var stu_marksObtained = [480,390,320]
// var totalMarks = 500;

// var HTMl_Text = "Score of <strong>" + stu_names[0] + "</strong> is <strong>" + stu_marksObtained[0] + "</strong>. Percentage: <strong>" + ((stu_marksObtained[0]/totalMarks)*100)+ "%</strong></br>Score of <strong>" + stu_names[1] + "</strong> is <strong>" + stu_marksObtained[1] + "</strong>. Percentage: <strong>" + ((stu_marksObtained[1]/totalMarks)*100)+ "%</strong></br>Score of <strong>" + stu_names[2] + "</strong> is <strong>" + stu_marksObtained[2] + "</strong>. Percentage: <strong>" + ((stu_marksObtained[2]/totalMarks)*100)+ "%</strong>"
// document.write(HTMl_Text)

//Q9

//Pending

//Q10

// var Stu_Scores = [320,230,480,120]
// document.write('Scores of Students : '+Stu_Scores+'</br>Ordered Scores of Students : '+Stu_Scores.sort())

//Q11

// var cities = ['Karachi','Lahore','Islamabad','Peshawar','Quetta']
// var selectedCities = [cities[0],cities[2],cities[4]]

// document.write('Cities List:</br>'+cities+"</br></br>Selected Cities List:</br>"+selectedCities)

//Q12

// var MyArray = ['My','Name','is','Muhammad','Aamir','Raza']

// document.write('Array:</br>'+MyArray+'</br></br>String:</br>'+MyArray.join(' '))

//Q13

// var Seq_Array = [];


// Seq_Array.push("1st Value")
// Seq_Array.push("2nd Value")
// Seq_Array.push("3rd Value")

// document.write("Values stored by push() are shown in sequence:</br><strong>"+Seq_Array+"</strong>")


//Q14

// var Rev_Array = [];


// Rev_Array.unshift("1st Value")
// Rev_Array.unshift("2nd Value")
// Rev_Array.unshift("3rd Value")

// document.write("Values stored by unshift() are shown in reverse:</br><strong>"+Rev_Array+"</strong>")

//Q15

//var Phone_manufacturers = ['Samsung','Apple','Huawei','Oppo','Nokia','Realme','OnePlus'];

////////////////////////////////////////USING LOOP

// var HtmlText;
// HtmlText = `<select style="width:250px;height:40px;font-size:20px;">`;
// for(let i = 0; i < Phone_manufacturers.length; i++)
// {
//     HtmlText+=`<option value="${Phone_manufacturers[i]}">${Phone_manufacturers[i]}</option>`
// }
// HtmlText+="</select>"
// document.write(HtmlText);

////////////////////////////////////////WITHOUT LOOP

// document.write(
//     `<select style="width:250px;height:40px;font-size:20px;">
//         <option value="${Phone_manufacturers[0]}">${Phone_manufacturers[0]}</option>
//         <option value="${Phone_manufacturers[1]}">${Phone_manufacturers[1]}</option>
//         <option value="${Phone_manufacturers[2]}">${Phone_manufacturers[2]}</option>
//         <option value="${Phone_manufacturers[3]}">${Phone_manufacturers[3]}</option>
//         <option value="${Phone_manufacturers[4]}">${Phone_manufacturers[4]}</option>
//         <option value="${Phone_manufacturers[5]}">${Phone_manufacturers[5]}</option>
//         <option value="${Phone_manufacturers[6]}">${Phone_manufacturers[6]}</option>
//     </select>`
// )