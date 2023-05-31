document.addEventListener('DOMContentLoaded', function() {
  const courseListItems = document.querySelectorAll('.course-list li');

  courseListItems.forEach(function(item) {
    const courseTitle = item.querySelector('h3');
    const courseDescription = item.querySelector('p');

    courseTitle.addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });
});
