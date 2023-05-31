document.addEventListener('DOMContentLoaded', function() {
    const courses = document.querySelectorAll('.course');
  
    courses.forEach(function(course) {
      course.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });
  