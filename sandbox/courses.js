const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T',
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A',
        },
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            outputSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            outputSections(this.sections);
        }
    },
    
};

function setNameAndNumber (course) {
    const courseName = document.querySelector('#courseName');
    const courseNumber = document.querySelector('#courseCode');
    courseName.textContent = course.name;
    courseNumber.textContent = course.code;
}

function outputSections (section){
    const table = aCourse.sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector('#sections').innerHTML = table.join('');
}

document.querySelector('#enrollStudent').addEventListener('click', function () {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener('click', function () {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.dropStudent(sectionNum);
});

setNameAndNumber(aCourse);
outputSections(aCourse.sections);