const skillsSection = document.querySelector('.skills-section');
const skillsContainer = document.querySelector('.skills-container');
const skills = skillsContainer.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    const skillsSectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsSectionTop < windowHeight) {
        skills.forEach(skill => {
            const skillName = skill.classList[1]; // Get the class name for the skill
            const skillLevel = parseInt(skillName); // Convert class name to integer for percentage
            skill.style.width = skillLevel + '%';
        });
    }
});

