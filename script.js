// Dummy data for vacancies (You can replace this with API data)
const upscVacancies = [
    { title: "UPSC Civil Services Exam 2025", description: "Details about the civil services exam and application process." },
    { title: "UPSC IES/ISS Exam 2025", description: "Indian Economic Service / Indian Statistical Service Exam details." },
    { title: "UPSC CDS Exam 2025", description: "Combined Defence Services Exam details and vacancies." }
];

const sscVacancies = [
    { title: "SSC CGL 2025", description: "Staff Selection Commission Combined Graduate Level Examination details." },
    { title: "SSC CHSL 2025", description: "Staff Selection Commission Combined Higher Secondary Level Exam details." },
    { title: "SSC JE 2025", description: "Junior Engineer Exam details for recruitment in various departments." }
];

const rpscVacancies = [
    { title: "RPSC ACF Recruitment 2025", description: "Rajasthan Public Service Commission Assistant Conservator of Forest recruitment." },
    { title: "RPSC RAS Exam 2025", description: "Rajasthan Administrative Services Exam details and vacancies." },
    { title: "RPSC Teacher Vacancies 2025", description: "Details about the teacher recruitment exam and process in Rajasthan." }
];

// Function to display vacancies dynamically
function displayVacancies(vacancies, sectionId) {
    const section = document.getElementById(sectionId);
    const vacancyList = section.querySelector('.vacancy-list ul');

    vacancies.forEach(vacancy => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${vacancy.title}:</strong> ${vacancy.description}`;
        vacancyList.appendChild(listItem);
    });
}

// On page load, display the vacancies
document.addEventListener('DOMContentLoaded', () => {
    displayVacancies(upscVacancies, 'upsc-vacancies');
    displayVacancies(sscVacancies, 'ssc-vacancies');
    displayVacancies(rpscVacancies, 'rpsc-vacancies');
});
