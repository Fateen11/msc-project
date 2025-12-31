// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation link highlighting
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  });

  // Header background on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(26, 54, 93, 0.98)';
    } else {
      header.style.background = 'rgba(26, 54, 93, 0.95)';
    }
  });

  // Modal functionality
  const noticesBtn = document.getElementById('noticesBtn');
  const noticesModal = document.getElementById('noticesModal');
  const closeNotices = document.getElementById('closeNotices');

  // Gallery modal
  galleryBtn.addEventListener('click', function() {
    galleryModal.style.display = 'block';
    loadGallery();
  });

  closeGallery.addEventListener('click', function() {
    galleryModal.style.display = 'none';
  });

  // Notices modal
  noticesBtn.addEventListener('click', function() {
    noticesModal.style.display = 'block';
    loadNotices();
  });

  closeNotices.addEventListener('click', function() {
    noticesModal.style.display = 'none';
  });

  // Close modals when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === noticesModal) {
      noticesModal.style.display = 'none';
    }
  });

  // Load gallery images
  function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Sample gallery data - replace with actual images
    const galleryImages = [
      {
        src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'School Campus View',
        title: 'Beautiful Campus'
      },
      {
        src: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Modern Classroom',
        title: 'State-of-the-art Classrooms'
      },
      {
        src: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Science Laboratory',
        title: 'Advanced Science Lab'
      },
      {
        src: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Library',
        title: 'Well-stocked Library'
      },
      {
        src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Sports Activities',
        title: 'Sports and Recreation'
      },
      {
        src: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Cultural Event',
        title: 'Cultural Programs'
      },
      {
        src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Graduation Ceremony',
        title: 'Graduation Day'
      },
      {
        src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
        alt: 'Computer Lab',
        title: 'Computer Laboratory'
      }
    ];

    galleryGrid.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" loading="lazy">
        <div style="padding: 1rem; text-align: center;">
          <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">${image.title}</h4>
        </div>
      `;
      
      // Add staggered animation
      galleryItem.style.opacity = '0';
      galleryItem.style.transform = 'translateY(20px)';
      galleryItem.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        galleryItem.style.opacity = '1';
        galleryItem.style.transform = 'translateY(0)';
      }, index * 100);
      
      galleryGrid.appendChild(galleryItem);
    });
  }

  // Load notices
  function loadNotices() {
    const noticesList = document.getElementById('noticesList');
    
    // Sample notices data
    const notices = [
      {
        date: '2025-01-15',
        title: 'Admission Open for Academic Year 2025-26',
        content: 'Applications are now open for admission to Class XI and XII for the academic year 2025-26. Interested students can collect application forms from the school office or download from our website.'
      },
      {
        date: '2025-01-12',
        title: 'Annual Sports Day - February 20, 2025',
        content: 'Our annual sports day will be held on February 20, 2025. All students are encouraged to participate in various sporting events. Registration forms are available at the sports department.'
      },
      {
        date: '2025-01-10',
        title: 'Parent-Teacher Meeting',
        content: 'Parent-teacher meeting for all classes will be held on January 25, 2025, from 9:00 AM to 12:00 PM. Parents are requested to attend and discuss their ward\'s academic progress.'
      },
      {
        date: '2025-01-08',
        title: 'Science Fair 2025',
        content: 'The annual science fair will be organized on February 15, 2025. Students from all science streams are invited to participate and showcase their innovative projects.'
      },
      {
        date: '2025-01-05',
        title: 'Winter Break Schedule',
        content: 'Winter break will commence from January 30, 2025, and classes will resume on February 10, 2025. Students are advised to utilize this time for revision and preparation.'
      },
      {
        date: '2025-01-03',
        title: 'Library Renovation Complete',
        content: 'We are pleased to announce that our library renovation is now complete. The library features new reading spaces, digital resources, and extended operating hours.'
      }
    ];

    noticesList.innerHTML = '';
    
    notices.forEach((notice, index) => {
      const noticeItem = document.createElement('div');
      noticeItem.className = 'notice-item';
      
      const noticeDate = new Date(notice.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      noticeItem.innerHTML = `
        <div class="notice-date">${noticeDate}</div>
        <div class="notice-title">${notice.title}</div>
        <div class="notice-content">${notice.content}</div>
      `;
      
      // Add staggered animation
      noticeItem.style.opacity = '0';
      noticeItem.style.transform = 'translateX(-20px)';
      noticeItem.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        noticeItem.style.opacity = '1';
        noticeItem.style.transform = 'translateX(0)';
      }, index * 150);
      
      noticesList.appendChild(noticeItem);
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature, .redirect-card, .access-btn');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Add loading animation to page
  window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });
});

// Utility function for smooth animations
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.access-btn, .redirect-card');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .access-btn, .redirect-card {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);
