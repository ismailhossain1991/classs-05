//GPA, CGPA, GRADE function for result publishing

let name = prompt('Student Name');
let roll = prompt('Roll');


let bn = Number(prompt('Bangla'));
let en = Number(prompt('English'));
let mat = Number(prompt('Math'));
let  s = Number(prompt('Science'));
let  ss = Number(prompt('Social science'));
let  rel = Number(prompt('Relgion'));


console.log(`
Student Name = ${name}
Student Roll = ${roll}

subject         Marks           Gpa              Grade

Bangla          ${bn}        ${gpa(bn)}                 ${grade(bn)}
English         ${en}        ${gpa(en)}                  ${grade(en)}
Math            ${mat}         ${gpa(mat)}              ${grade(mat)}
Science         ${s}         ${gpa(s)}                  ${grade(s)}
Social Science  ${ss}        ${gpa(ss)}                  ${grade(ss)}
Relgion         ${rel}       ${gpa(rel)}                ${grade(rel)}
-----------------------------------------------------------------------
                    cgpa = ${ cgpa(gpa(bn), gpa(en), gpa(mat), gpa(s), gpa(ss), gpa(rel))}
`); 