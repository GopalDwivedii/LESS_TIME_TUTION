document.addEventListener('DOMContentLoaded', () => {
    const topics = document.querySelectorAll('.list-group-item');
    const videoFrame = document.getElementById('lectureVideo');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    // Initialize first video
    if(topics.length > 0) {
        videoFrame.src = topics[currentIndex].dataset.video;
        topics[currentIndex].classList.add('active-topic');
    }

    function updateContent(index) {
        topics.forEach(topic => topic.classList.remove('active-topic'));
        topics[index].classList.add('active-topic');
        videoFrame.src = topics[index].dataset.video;
        topics[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === topics.length - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < topics.length - 1) {
            currentIndex++;
            updateContent(currentIndex);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateContent(currentIndex);
        }
    });

    topics.forEach((topic, index) => {
        topic.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            updateContent(currentIndex);
        });
    });
});
// Sample video loading handler
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show loading state
        document.getElementById('videoLoading').style.display = 'block';
        
        // Get video data
        const videoUrl = this.getAttribute('data-video');
        const videoTitle = this.querySelector('h6').textContent;
        const videoDuration = this.querySelector('small.text-muted').textContent;
        
        // Update player
        const iframe = document.getElementById('lectureVideo');
        iframe.src = videoUrl;
        
        // Update metadata
        document.getElementById('videoTitle').textContent = videoTitle;
        document.getElementById('videoDuration').textContent = videoDuration;
        
        // Hide loading when video is ready
        iframe.onload = function() {
            document.getElementById('videoLoading').style.display = 'none';
        };
    });
});