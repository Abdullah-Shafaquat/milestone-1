document.getElementById('toggle-skills').addEventListener('click', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        this.textContent = 'Hide Skills';
    } else {
        skillsSection.classList.add('hidden');
        this.textContent = 'Show Skills';
    }
});

