// Define your routes
const routes = {
  '/': homePage,
  '/about': aboutPage,
  '/contact': contactPage
};

// Listen for changes to the current location
window.addEventListener('popstate', e => {
  // Get the current location
  const path = window.location.pathname;
  // Call the appropriate function for the route
  routes[path]();
});

// Listen for clicks on links
document.addEventListener('click', e => {
  // Check if the clicked element is a link
  if (e.target.tagName === 'A') {
    // Prevent the default link behavior
    e.preventDefault();
    // Get the href of the link
    const path = e.target.getAttribute('href');
    // Change the current location
    window.history.pushState({}, null, path);
    // Call the appropriate function for the route
    routes[path]();
  }
});

// Define your route functions
function homePage() {
  // Code to display the home page
}

function aboutPage() {
  // Code to display the about page
}

function contactPage() {
  // Code to display the contact page
}
