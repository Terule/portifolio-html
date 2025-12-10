document.addEventListener('DOMContentLoaded', () => {
  const techStack = [
    'Next.js', 'React', 'Shadcn UI', 'Tailwind CSS', 'TypeScript', 
    'Node.js', 'PowerShell', 'PostgreSQL', 'Prisma', 'n8n', 'Git'
  ];

  const projects = [
    {
      title: 'Finance App',
      description: 'Personal finance management platform focused on performance and expense tracking.',
      techs: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind']
    },
    {
      title: 'Portfolio V1',
      description: 'This personal website, built with modern frontend best practices and performance.',
      techs: ['HTML/CSS', 'Responsive', 'Performance']
    },
    {
      title: 'IT Ops Automation',
      description: 'Suite of scripts and workflows to automate user onboarding and AD auditing.',
      techs: ['PowerShell', 'n8n', 'Automation']
    },
  ];

  const techContainer = document.getElementById('tech-stack-container');
  
  if(techContainer) {
    techContainer.innerHTML = '';
    techStack.forEach(tech => {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = tech;
      techContainer.appendChild(badge);
    });
  }

  const projectsContainer = document.getElementById('projects-container');

  if(projectsContainer) {
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
      // Criar Card
      const card = document.createElement('div');
      card.className = 'project-card';

      // Conteúdo Texto
      const textDiv = document.createElement('div');
      const title = document.createElement('h3');
      title.className = 'project-title';
      title.textContent = project.title;

      const desc = document.createElement('p');
      desc.className = 'project-desc';
      desc.textContent = project.description;

      textDiv.appendChild(title);
      textDiv.appendChild(desc);

      // Conteúdo Badges
      const badgesDiv = document.createElement('div');
      badgesDiv.className = 'flex flex-wrap gap-2';
      badgesDiv.style.marginTop = '1.5rem';

      project.techs.forEach(t => {
        const miniBadge = document.createElement('span');
        miniBadge.className = 'mini-badge';
        miniBadge.textContent = t;
        badgesDiv.appendChild(miniBadge);
      });

      // Montar Card
      card.appendChild(textDiv);
      card.appendChild(badgesDiv);
      projectsContainer.appendChild(card);
    });
  }

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn && nextBtn && projectsContainer) {
    const scrollAmount = 320;

    prevBtn.addEventListener('click', () => {
      if (projectsContainer.scrollLeft <= 0) {
        projectsContainer.scrollTo({ 
          left: projectsContainer.scrollWidth, 
          behavior: 'smooth' 
        });
      } else {
        projectsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });

    nextBtn.addEventListener('click', () => {
      const maxScrollLeft = projectsContainer.scrollWidth - projectsContainer.clientWidth;
      
      if (projectsContainer.scrollLeft >= maxScrollLeft - 5) {
        projectsContainer.scrollTo({ 
          left: 0, 
          behavior: 'smooth' 
        });
      } else {
        projectsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  }

  const yearSpan = document.getElementById('year');
  if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const header = document.querySelector('header');
  const main = document.querySelector('main');

  if (header && main) {
    const adjustPadding = () => {
      main.style.paddingTop = `${header.offsetHeight + 32}px`;
    };
    adjustPadding();
    window.addEventListener('resize', adjustPadding);
  }
});