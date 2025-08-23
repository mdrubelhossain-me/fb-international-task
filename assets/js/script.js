const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});



// VIDEO Start 
// ---------------
const playBtn = document.getElementById('playVideoBtn');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoFrame = document.getElementById('videoFrame');

playBtn.addEventListener('click', () => {
    videoModal.style.display = 'flex';
    videoFrame.src = videoURL; // Add video to iframe
});

closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoFrame.src = ""; // Stop video
});

window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
        videoFrame.src = "";
    }
});
// VIDEO End
// ---------------
