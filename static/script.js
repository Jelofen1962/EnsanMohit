document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const paragraph = this.previousElementSibling;
        if (paragraph.style.whiteSpace === 'normal') {
            // Hide text back
            paragraph.style.whiteSpace = 'nowrap';
            paragraph.style.textOverflow = 'ellipsis';
            paragraph.textContent = paragraph.getAttribute('data-short-text');
            this.textContent = 'بیشتر بخوانید';
        } else {
            // Show full text
            paragraph.style.maxWidth = '700px';
            paragraph.style.whiteSpace = 'normal';
            paragraph.style.textOverflow = 'clip';
            paragraph.textContent = paragraph.getAttribute('data-full-text');
            this.textContent = 'کمتر بخوانید';
        }
    });
});

// Setup initial truncation with data attributes
document.querySelectorAll('.short-text').forEach(paragraph => {
    const fullText = paragraph.textContent;
    paragraph.setAttribute('data-full-text', fullText);
    const shortText = fullText.slice(0, 50) + (fullText.length > 50 ? '...' : '');
    paragraph.setAttribute('data-short-text', shortText);
    paragraph.textContent = shortText;
});
``