// ===== Load job detail from ?id= URL parameter =====
(function () {
  const params = new URLSearchParams(location.search);
  const jobId = params.get('id');
  if (!jobId) {
    location.href = './careers.html';
    return;
  }

  fetch('./assets/jobs.json')
    .then(r => r.json())
    .then(jobs => {
      const job = jobs.find(j => j.id === jobId);
      if (!job) {
        document.getElementById('jobHeroContent').innerHTML =
          '<h1>Position not found</h1><p class="lead">The role you&rsquo;re looking for may have been filled or removed. <a href="./careers.html" data-transition>View all open positions</a>.</p>';
        return;
      }

      // Update title bar
      document.title = job.title + ' · MEK Imports-Exports';
      document.getElementById('bcTitle').textContent = job.title;
      document.getElementById('jobTitle').textContent = job.title;
      document.getElementById('jobDept').textContent = job.department;
      document.getElementById('jobLoc').textContent = job.location;
      document.getElementById('jobType').textContent = job.type;
      document.getElementById('jobPosted').textContent = 'Posted ' + job.posted;
      document.getElementById('jobSummary').innerHTML = job.summary;

      // Lists
      const fillList = (id, items) => {
        const ul = document.getElementById(id);
        ul.innerHTML = items.map(x => `<li>${x}</li>`).join('');
      };
      fillList('jobResponsibilities', job.responsibilities);
      fillList('jobQualifications', job.qualifications);
      fillList('jobBenefits', job.benefits);

      // Aside facts
      document.getElementById('jobFactTitle').textContent = job.title;
      document.getElementById('jobFactDept').textContent = job.department;
      document.getElementById('jobFactLoc').textContent = job.location;
      document.getElementById('jobFactType').textContent = job.type;
      document.getElementById('jobFactPosted').textContent = job.posted;

      // Apply form integration
      document.getElementById('applyForRole').textContent = job.title;
      document.getElementById('positionInput').value = job.title;
      document.getElementById('formSubject').value = 'Application: ' + job.title + ' — MEK Imports-Exports';
      document.getElementById('formPosition').value = job.title;
    })
    .catch(err => {
      console.error('Could not load job', err);
      document.getElementById('jobHeroContent').innerHTML =
        '<h1>Could not load job details</h1><p class="lead">Please <a href="./careers.html" data-transition>go back to careers</a> and try again.</p>';
    });
})();
