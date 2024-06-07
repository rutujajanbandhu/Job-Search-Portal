// script.js
document.addEventListener('DOMContentLoaded', () => {
    const recruiterLoginLink = document.getElementById('show-recruiter-login');
    const studentLoginLink = document.getElementById('show-student-login');
    const recruiterLogin = document.getElementById('recruiter-login');
    const studentLogin = document.getElementById('student-login');

    recruiterLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        studentLogin.classList.add('hidden');
        recruiterLogin.classList.toggle('hidden');
    });

    studentLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        recruiterLogin.classList.add('hidden');
        studentLogin.classList.toggle('hidden');
    });

    const recruiterForm = document.getElementById('recruiter-form');
    const studentForm = document.getElementById('student-form');

    recruiterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = recruiterForm.querySelector('input[type="email"]').value;
        const password = recruiterForm.querySelector('input[type="password"]').value;
        console.log('Recruiter Login:', { email, password });
        // Add further processing logic here, such as sending data to the server
    });

    studentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const ldapId = studentForm.querySelector('input[type="text"]').value;
        const ldapPassword = studentForm.querySelector('input[type="password"]').value;
        console.log('Student Login:', { ldapId, ldapPassword });
        // Add further processing logic here, such as sending data to the server
    });

    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        console.log('Search Query:', query);
        // Add search functionality here, such as sending the query to the server
    });
});

