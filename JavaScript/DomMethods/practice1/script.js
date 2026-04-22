const btnInterviews = document.getElementById("btn-interviews");
const btnShowAll = document.getElementById("btn-show-all");
const jobList = document.getElementById("job-list");

const jobs = [
  { title: "Frontend Dev", salary: 90000, remote: true, status: "applied" },
  { title: "Backend Dev", salary: 120000, remote: false, status: "interview" },
  { title: "UI Designer", salary: 75000, remote: true, status: "applied" },
  { title: "DevOps", salary: 110000, remote: false, status: "interview" },
  { title: "React Dev", salary: 95000, remote: true, status: "applied" },
];

function renderJobs(jobs) {
  jobList.innerHTML = ""; // clear the list first

  jobs.forEach((job) => {
    const li = document.createElement("li");
    li.textContent = `${job.title} - ${job.salary}`;
    jobList.appendChild(li);
  });
}

btnInterviews.addEventListener('click', () => {
  const interviewJobs = jobs.filter(job => job.status === "interview");
  renderJobs(interviewJobs);
});

btnShowAll.addEventListener('click', () => {
  renderJobs(jobs);
})


renderJobs(jobs);