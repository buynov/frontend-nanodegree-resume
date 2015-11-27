var bio = {
  "name": "Stefan Buynov",
  "role": "Software Engineering Professional",
  "contacts": {
    "email": "stefan.buynov@gmail.com",
    "github": "buynov",
    "twitter": "buynov",
    "location": "Sofia, Bulgaria"
  },
  "welcomeMessage": "Welcome to my page",
  "skills": [
    "Software Engineering", "Project Management", "People Management", "Product Management", "Customer Support"
  ],
  "bioPic": "images/profile.png"
}

var education = {
  "schools": [
    {
      "name": "Technical University of Sofia",
      "city": "Sofia, Bulgaria",
      "degree": "MSc",
      "major": "Management of Industry",
      "dates": 2007,
      "url": "http://www.tu-sofia.bg/"
    },
    {
      "name": "UKTC",
      "city": "Pravetz, Bulgaria",
      "degree": "Technician",
      "major": "Software",
      "dates": 1994,
      "url": "http://uktc-bg.com/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Javeli Group (part of Accenture Strategy)",
      "title": "Development Manager",
      "location": "Sofia, Bulgaria",
      "dates": "Nov 2015 - present",
      "description": "Working on e-commerce projects for the retail industry"
    },
    {
      "employer": "XoomWorks",
      "title": "Senior Java Developer",
      "location": "Sofia, Bulgaria",
      "dates": "Mar 2015 - Oct 2015",
      "description": "Working on data integration services for a leading sport betting provider"
    },
    {
      "employer": "Blue Edge Bulgaria",
      "title": "Software Developer / Consultant",
      "location": "Sofia, Bulgaria",
      "dates": "Mar 2012 - Feb 2015",
      "description": "Working on eletronic trading platform for stoick exchanges and P&L tool"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Refrigirating equipment company website",
      "dates": "2002",
      "description": "Refrigirating equipment company website",
      "images":["images/frigoxm.jpg"]
    }
  ]
}
projects.display = function() {
  for (var i=0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var prjText = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    prjText += HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    prjText += HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    for (var j=0; j < projects.projects[i].images.length; j++) {
      prjText += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
    }
    $(".project-entry:last").append(prjText);
  }
}

// Skills
if (bio.skills.length !== 0) {
  // Append <h1> constant from helper.js
  $("#header").append(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var skill = bio.skills[i];
    $("#skills").append(HTMLskills.replace("%data%", skill));
  }
}

// Jobs
if (work.jobs.length !== 0) {
  for (var i=0; i < work.jobs.length; i++) {
    var job = work.jobs[i];
    displayWork(job);
  }
}

// Projects
projects.display();

function displayWork(job) {
  $("#workExperience").append(HTMLworkStart);
  // Employer
  var jobText = HTMLworkEmployer.replace("%data%", job.employer);
  // Position
  jobText += (HTMLworkTitle.replace("%data%", job.title));
  // Location
  jobText += (HTMLworkLocation.replace("%data%", job.location));
  // Dates
  jobText += (HTMLworkDates.replace("%data%", job.dates));
  // Description
  jobText += (HTMLworkDescription.replace("%data%", job.description));

  $(".work-entry:last").append(jobText);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$('#main').append(internationalizeButton);

function inName() {
  var names = bio.name.split(" ");
  var result = [names[0]];
  for (var i=1; i < names.length; i++) {
    result.push(names[i].toUpperCase());
  }

  return result.join(" ");
}

$("#mapDiv").append(googleMap);
