home = document.getElementById('home');
home.style.height = window.innerHeight/1.8+"px";
about = document.getElementById('about');
about.style.height = window.innerHeight/2+"px";
resume = document.getElementById('resume');
resume.style.height = window.innerHeight/1.3+"px";
blog = document.getElementById('blog');
blog.style.height = window.innerHeight/1.6+"px";



// Get the parent element
gparentElement = document.getElementsByClassName('Skills');
parentElement = gparentElement[0].getElementsByClassName('content');

let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Python", "Django", "C++", "Java", "SQL", "Git", "GitHub", "PyCharm", "Jupyter Notebook", "Anaconda", "Postman","DSA"];

// Loop to create and append the elements
for (var i = 0; i < skills.length; i++) {
    parentElement[0].innerHTML += '<div class="skill">'+skills[i]+'</div>';
}

document.querySelector('.toggle-light').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
});
document.querySelector('.toggle-light').addEventListener('click', function() {
    var button = this;
    if (button.textContent == 'Light') {
        button.textContent = 'Dark';
    } else {
        button.textContent = 'Light';
    }
});


