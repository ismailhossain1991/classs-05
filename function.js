//GPA, CGPA, GRADE function for result publishing

/**
 * 
 * Gpa Calculator
 */
function gpa(marks){

    let gpa;

    if( marks >= 0 && marks <=32){
        gpa = 0;
    }else if( marks >= 33 && marks < 40){
        gpa = 1;
    }else if( marks >= 40 && marks < 50){
        gpa = 2;
    }else if ( marks >= 50 && marks < 60){
        gpa = 3;
    }else if ( marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if (marks >= 70 && marks < 80){
        gpa = 4;
    }else if (marks >= 80 && marks <=100){
        gpa = 5;
    }

    return gpa;
}


/**
 * Grade Calculation
 */

 function grade(marks){

    let grade;

    if( marks >= 0 && marks <=32){
        grade = 'F';
    }else if( marks >= 33 && marks < 40){
        grade = 'D';
    }else if( marks >= 40 && marks < 50){
        grade = 'C';
    }else if ( marks >= 50 && marks < 60){
        grade = 'B';
    }else if ( marks >= 60 && marks < 70){
        grade = 'A-';
    }else if (marks >= 70 && marks < 80){
        grade = 'A';
    }else if (marks >= 80 && marks <=100){
        grade = 'A+';
    }

    return grade;
}


/**
 * Cgpa Calculation 
 */

let cgpa = (bn, en, mat, s, ss, rel) => {

    let total_gpa = ( bn + en + mat + s + ss + rel);

    let cgpa = total_gpa/6;

    if( bn == 0 || en == 0 || mat == 0 || s == 0 || ss == 0 || rel == 0){
        return "You Are Failed";
    }else{

        return `Your cgpa ${cgpa} & Grade = ${totalGrade(cgpa)}`;
    
}

}

/**
 * Total Grade CGPA
 */

function totalGrade(cgpa){
if( cgpa >= 0 && cgpa < 1){
    return  'F';
}else if (cgpa >= 1 && cgpa < 2 ){
    return  'D';
}else if ( cgpa >= 2 && cgpa < 3){
    return 'C';
}else if (cgpa >= 3 && cgpa < 3.5){
    return 'B';
}else if (cgpa >= 3.5 && cgpa < 4){
    return 'A-';
}else if ( cgpa >= 4 && cgpa <5){
    return 'A';
}else if ( cgpa == 5 ){
    return 'A+';
}

}

