document.addEventListener("DOMContentLoaded", function () {
    // Get all the navbar links
    var navbarLinks = document.querySelectorAll(".navbar ul li a");

    // Add click event listeners to each link
    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target section's ID from the link's href
            var targetId = this.getAttribute("href").substring(1);

            // Scroll to the target section smoothly
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });

            // Remove the "active" class from all links
            navbarLinks.forEach(function (navbarLink) {
                navbarLink.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            this.classList.add("active");
        });
    });

    // Highlight the current section in the navbar on scroll
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        // Loop through each section and check if it's in the viewport
        navbarLinks.forEach(function (link) {
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            // Adjust the offset as needed based on your layout
            if (
                targetSection.offsetTop <= scrollPosition &&
                targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
            ) {
                // Remove the "active" class from all links
                navbarLinks.forEach(function (navbarLink) {
                    navbarLink.classList.remove("active");
                });

                // Add the "active" class to the link corresponding to the current section
                link.classList.add("active");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Loop through each element with the fade-in class
        document.querySelectorAll('.fade-in').forEach(function (element) {
            // Get the element's position relative to the viewport
            var boundingBox = element.getBoundingClientRect();

            // Check if the element is in the viewport
            if (
                boundingBox.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                boundingBox.bottom >= 0
            ) {
                // Add the show class to trigger the fade-in effect
                element.classList.add('show');
            }
        });
    });

    // Trigger the scroll event to check initially
    window.dispatchEvent(new Event('scroll'));
});
