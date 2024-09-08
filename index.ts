// Toggle between preview and edit mode
function toggle(): void {
    const form = document.querySelector('.input-fields') as HTMLElement;
    const output = document.querySelector('.output') as HTMLElement;

    if (form && output) {
        form.classList.toggle('hidden');
        output.classList.toggle('hidden');
        
        // Update the output section with form data when toggled
        if (!form.classList.contains('hidden')) {
            const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
            const title = (document.querySelector('input[name="title"]') as HTMLInputElement).value;
            const workexp = (document.querySelector('textarea[name="workexp"]') as HTMLTextAreaElement).value;
            const academics = (document.querySelector('textarea[name="academics"]') as HTMLTextAreaElement).value;
            const objective = (document.querySelector('input[name="objective"]') as HTMLInputElement).value;
            const skills = (document.querySelector('textarea[name="skills"]') as HTMLTextAreaElement).value;
            const projects = (document.querySelector('textarea[name="projects"]') as HTMLTextAreaElement).value;
            const achievements = (document.querySelector('textarea[name="achievements"]') as HTMLTextAreaElement).value;
            const contact = (document.querySelector('textarea[name="contact"]') as HTMLTextAreaElement).value;

            output.innerHTML = `
                <h1>${name}</h1>
                <h2>${title}</h2>
                <h3>Work Experience</h3>
                <p>${workexp}</p>
                <h3>Academics</h3>
                <p>${academics}</p>
                <h3>Objective</h3>
                <p>${objective}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Projects</h3>
                <p>${projects}</p>
                <h3>Achievements</h3>
                <p>${achievements}</p>
                <h3>Contact</h3>
                <p>${contact}</p>
            `;
        }
    }
}

// Generate a unique URL for sharing
function generateShareableLink(): void {
    const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const linkContainer = document.getElementById('shareable-link') as HTMLElement;
    
    // Generate a URL based on the user's name (replace spaces and special characters)
    const cleanName = name.trim().toLowerCase().replace(/\s+/g, '-');
    const uniqueURL = `${cleanName}.vercel.app/resume`;

    linkContainer.innerHTML = `<p>Shareable Link: <a href="https://${uniqueURL}" target="_blank">${uniqueURL}</a></p>`;
}

// Download the resume as PDF
function downloadResumeAsPDF(): void {
    const name = (document.querySelector('input[name="name"]') as HTMLInputElement).value;
    const outputContent = (document.querySelector('.output') as HTMLElement).innerHTML;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text(`Resume: ${name}`, 10, 10);
    
    // Convert the HTML to text and add it to the PDF
    const textContent = outputContent.replace
