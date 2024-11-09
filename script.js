document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const resumeOutputElement = document.getElementById('resumeOutput');
    const generateResumeBtn = document.getElementById('generateResumeBtn');

    let resumeData = {};

    // Function to update the preview
    const updateResumePreview = () => {
        const profilePictureInput = document.getElementById('profilePicture');
        const nameElement = document.getElementById('name');
        const emailElement = document.getElementById('email');
        const phoneElement = document.getElementById('phone');
        const educationElement = document.getElementById('education');
        const experienceElement = document.getElementById('experience');
        const skillsElement = document.getElementById('skills');

        // Extract values from the form
        const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handle profile picture (if uploaded)
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Store the resume data
        resumeData = {
            name,
            email,
            phone,
            education,
            experience,
            skills,
            profilePictureURL
        };

        // Create the resume content for preview
        const resumeContent = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" />` : ''}
            <p><strong>Name:</strong> <span class="editable" contenteditable="true" data-field="name">${name}</span></p>
            <p><strong>Email:</strong> <span class="editable" contenteditable="true" data-field="email">${email}</span></p>
            <p><strong>Phone:</strong> <span class="editable" contenteditable="true" data-field="phone">${phone}</span></p>
            <h3>Education</h3>
            <p><span class="editable" contenteditable="true" data-field="education">${education}</span></p>
            <h3>Experience</h3>
            <p><span class="editable" contenteditable="true" data-field="experience">${experience}</span></p>
            <h3>Skills</h3>
            <p><span class="editable" contenteditable="true" data-field="skills">${skills}</span></p>
        `;

        // Update the preview section with the resume content
        resumeOutputElement.innerHTML = resumeContent;
        resumeOutputElement.style.display = 'block';
    };

    // Event listener for the "Generate Resume" button
    generateResumeBtn.addEventListener('click', () => {
        updateResumePreview();
    });

    // Event listener for editable fields
    resumeOutputElement.addEventListener('input', (e) => {
        if (e.target.classList.contains('editable')) {
            const field = e.target.getAttribute('data-field');
            resumeData[field] = e.target.innerText;

            // Update the corresponding field in the form
            document.getElementById(field).value = resumeData[field];
        }
    });
});
