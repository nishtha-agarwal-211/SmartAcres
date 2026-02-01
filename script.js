/* PROPERTY DATA */
const properties = [
    {
        id: 1,
        city: "Mumbai",
        price: 7500000,
        bhk: "2 BHK Apartment",
        propertyType: "Apartment",
        type: "buy",
        area: 1200,
        bedrooms: 2,
        bathrooms: 2,
        status: "Ready to Move",
        age: "New Construction",
        statusLabel: "NEW LISTING",
        urgency: "8 people viewed today",
        description: "Beautiful modern 2 BHK apartment in the heart of Mumbai with premium amenities and excellent connectivity to major business hubs.",
        amenities: {
            parking: true,
            gym: true,
            pool: false
        },
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
        ],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        agent: {
            name: "Priya Sharma",
            phone: "+91 98765 43210",
            email: "priya@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Priya+Sharma&background=4F46E5&color=fff&size=200",
            rating: 4.8
        }
    },
    {
        id: 2,
        city: "Delhi",
        price: 15500000,
        bhk: "3 BHK Flat",
        propertyType: "Flat",
        type: "buy",
        area: 1500,
        bedrooms: 3,
        bathrooms: 3,
        status: "Under Construction",
        age: "Launching Soon",
        statusLabel: "HOT DEAL",
        urgency: "15 people viewed today",
        description: "Luxurious 3 BHK flat in prime Delhi location with world-class amenities including swimming pool and modern gym facilities.",
        amenities: {
            parking: true,
            gym: true,
            pool: true
        },
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
        ],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        agent: {
            name: "Rajesh Kumar",
            phone: "+91 98765 43211",
            email: "rajesh@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=10B981&color=fff&size=200",
            rating: 4.9
        }
    },
    {
        id: 3,
        city: "Bangalore",
        price: 8200000,
        bhk: "4 BHK Villa",
        propertyType: "Villa",
        type: "buy",
        area: 2400,
        bedrooms: 4,
        bathrooms: 4,
        status: "Ready to Move",
        age: "2 Years Old",
        statusLabel: "PRICE REDUCED",
        urgency: "5 people viewed today",
        description: "Spacious 4 BHK villa in Bangalore with private parking and swimming pool. Perfect for large families seeking comfort and luxury.",
        amenities: {
            parking: true,
            gym: false,
            pool: true
        },
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop"
        ],
        videoUrl: null,
        agent: {
            name: "Anita Desai",
            phone: "+91 98765 43212",
            email: "anita@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Anita+Desai&background=8B5CF6&color=fff&size=200",
            rating: 4.7
        }
    },
    {
        id: 4,
        city: "Pune",
        price: 4800000,
        bhk: "2 BHK Apartment",
        propertyType: "Apartment",
        type: "rent",
        area: 1100,
        bedrooms: 2,
        bathrooms: 2,
        status: "Ready to Move",
        age: "5 Years Old",
        statusLabel: null,
        urgency: null,
        description: "Cozy 2 BHK apartment available for rent in Pune with essential amenities and great connectivity.",
        amenities: {
            parking: true,
            gym: true,
            pool: false
        },
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
        ],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        agent: {
            name: "Vikram Patel",
            phone: "+91 98765 43213",
            email: "vikram@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Vikram+Patel&background=F59E0B&color=fff&size=200",
            rating: 4.6
        }
    },
    {
        id: 5,
        city: "Ahmedabad",
        price: 6200000,
        bhk: "3 BHK Villa",
        propertyType: "Villa",
        type: "buy",
        area: 1800,
        bedrooms: 3,
        bathrooms: 3,
        status: "Ready to Move",
        age: "New Construction",
        statusLabel: "NEW LISTING",
        urgency: "3 people viewed today",
        description: "Brand new 3 BHK villa in Ahmedabad with modern architecture, private pool, and ample parking space.",
        amenities: {
            parking: true,
            gym: false,
            pool: true
        },
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
        ],
        videoUrl: null,
        agent: {
            name: "Meera Shah",
            phone: "+91 98765 43214",
            email: "meera@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Meera+Shah&background=EC4899&color=fff&size=200",
            rating: 4.8
        }
    },
    {
        id: 6,
        city: "Chennai",
        price: 5800000,
        bhk: "2 BHK Flat",
        propertyType: "Flat",
        type: "buy",
        area: 1300,
        bedrooms: 2,
        bathrooms: 2,
        status: "Under Construction",
        age: "Ready by Dec 2026",
        statusLabel: null,
        urgency: null,
        description: "Premium 2 BHK flat under construction in Chennai with modern amenities and excellent location.",
        amenities: {
            parking: true,
            gym: true,
            pool: true
        },
        images: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop"
        ],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        agent: {
            name: "Suresh Reddy",
            phone: "+91 98765 43215",
            email: "suresh@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Suresh+Reddy&background=3B82F6&color=fff&size=200",
            rating: 4.5
        }
    },
    {
        id: 7,
        city: "Hyderabad",
        price: 7200000,
        bhk: "3 BHK Apartment",
        propertyType: "Apartment",
        type: "buy",
        area: 1600,
        bedrooms: 3,
        bathrooms: 2,
        status: "Ready to Move",
        age: "1 Year Old",
        statusLabel: "HOT DEAL",
        urgency: "20 people viewed today",
        description: "Modern 3 BHK apartment in Hyderabad with top-notch amenities and strategic location near IT hubs.",
        amenities: {
            parking: true,
            gym: true,
            pool: false
        },
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
        ],
        videoUrl: null,
        agent: {
            name: "Kavita Nair",
            phone: "+91 98765 43216",
            email: "kavita@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Kavita+Nair&background=14B8A6&color=fff&size=200",
            rating: 4.9
        }
    },
    {
        id: 8,
        city: "Kolkata",
        price: 4500000,
        bhk: "2 BHK Flat",
        propertyType: "Flat",
        type: "rent",
        area: 1000,
        bedrooms: 2,
        bathrooms: 1,
        status: "Ready to Move",
        age: "3 Years Old",
        statusLabel: null,
        urgency: "2 people viewed today",
        description: "Affordable 2 BHK flat for rent in Kolkata with basic amenities and good connectivity to city center.",
        amenities: {
            parking: false,
            gym: false,
            pool: false
        },
        images: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800&h=600&fit=crop"
        ],
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        agent: {
            name: "Amit Roy",
            phone: "+91 98765 43217",
            email: "amit@smartacres.com",
            photo: "https://ui-avatars.com/api/?name=Amit+Roy&background=6366F1&color=fff&size=200",
            rating: 4.4
        }
    }
];

const propertyList = document.getElementById("propertyList");


/* DISPLAY PROPERTIES FUNCTION */
function displayProperties(list) {
    if (!propertyList) return;

    if (list.length === 0) {
        propertyList.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">No properties found matching your criteria.</p>';
        return;
    }

    propertyList.innerHTML = "";

    list.forEach((property) => {
        let amenitiesHTML = '';
        if (property.amenities.parking) {
            amenitiesHTML += '<span class="amenity-badge">Parking</span>';
        }
        if (property.amenities.gym) {
            amenitiesHTML += '<span class="amenity-badge">Gym</span>';
        }
        if (property.amenities.pool) {
            amenitiesHTML += '<span class="amenity-badge">Swimming Pool</span>';
        }

        if (amenitiesHTML === '') {
            amenitiesHTML = '<span class="no-amenities">Basic Amenities</span>';
        }

        let statusLabelHTML = '';
        if (property.statusLabel) {
            let statusClass = '';
            if (property.statusLabel === 'NEW LISTING') statusClass = 'status-new';
            else if (property.statusLabel === 'HOT DEAL') statusClass = 'status-hot';
            else if (property.statusLabel === 'PRICE REDUCED') statusClass = 'status-reduced';

            statusLabelHTML = `<div class="status-label ${statusClass}">${property.statusLabel}</div>`;
        }

        let videoBadgeHTML = '';
        if (property.videoUrl) {
            videoBadgeHTML = '<div class="video-badge" title="Video Tour Available">🎥 Video Tour</div>';
        }

        let urgencyHTML = '';
        if (property.urgency) {
            urgencyHTML = `<div class="urgency-text">👁️ ${property.urgency}</div>`;
        }

        let carouselHTML = '';
        if (property.images && property.images.length > 0) {
            const imageCount = property.images.length;
            carouselHTML = `
            <div class="image-carousel" data-property-id="${property.id}">
                <div class="carousel-images">
                    ${property.images.map((img, index) => `
                        <img src="${img}" 
                             alt="${property.bhk} in ${property.city} - Image ${index + 1}" 
                             class="carousel-image ${index === 0 ? 'active' : ''}"
                             data-index="${index}"
                             data-property-id="${property.id}"
                             data-image-index="${index}"
                             loading="lazy">
                    `).join('')}
                </div>
                ${imageCount > 1 ? `
                    <button class="carousel-nav prev" data-property-id="${property.id}" data-direction="-1" aria-label="Previous image">
                        ‹
                    </button>
                    <button class="carousel-nav next" data-property-id="${property.id}" data-direction="1" aria-label="Next image">
                        ›
                    </button>
                    <div class="image-counter">
                        <span class="current-image">1</span> / ${imageCount}
                    </div>
                ` : ''}
            </div>`;
        } else {
            carouselHTML = `<img src="https://via.placeholder.com/800x600?text=No+Image" alt="Property placeholder" style="width: 100%; height: 200px; object-fit: cover;">`;
        }

        propertyList.innerHTML += `
                <div class="property-card" data-property-id="${property.id}">
                    ${statusLabelHTML}
        <div class="property-image-container">
          ${carouselHTML}
          ${videoBadgeHTML}
          ${urgencyHTML}
        </div>

        <div class="property-info">
          <h3>${property.bhk}</h3>
          <p class="location">📍 ${property.city}</p>
          <p class="price">₹${(property.price / 100000).toFixed(1)} L</p>
          <p class="area">📐 ${property.area} sq.ft</p>
          
          <!-- Property Details Section -->
          <div class="property-details">
            <div class="detail-row">
              <span class="detail-label">🛏️ Bedrooms:</span>
              <span class="detail-value">${property.bedrooms}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">🚿 Bathrooms:</span>
              <span class="detail-value">${property.bathrooms}</span>
            </div>
          </div>

          <!-- Property Status -->
          <div class="property-status">
            <span class="status-icon">🏷️</span>
            <span>${property.status}</span>
          </div>

          <!-- Property Age -->
          <div class="property-age">
            <span>${property.age}</span>
          </div>
          
          <!-- Amenities Section -->
          <div class="amenities-section">
            <div class="amenities-title">Amenities:</div>
            <div class="amenities-icons">
              ${amenitiesHTML}
            </div>
          </div>

          <!-- Agent Profile Section -->
          <div class="agent-section">
            <div class="agent-info">
              <div class="agent-photo">${getAgentInitials(property.agent.name)}</div>
              <div class="agent-details">
                <div class="agent-name">${property.agent.name}</div>
                <div class="agent-rating">⭐ ${property.agent.rating}</div>
              </div>
            </div>
            <button class="contact-agent-btn" data-property-id="${property.id}">
              📞 Contact
            </button>
          </div>

          <!-- Call-to-Action Buttons -->
          <div class="cta-buttons">
            <button class="cta-btn schedule-btn" data-property-id="${property.id}">
              📅 Schedule Visit
            </button>
            <button class="cta-btn brochure-btn" data-property-id="${property.id}">
              📥 Brochure
            </button>
            <button class="cta-btn emi-btn" data-property-id="${property.id}">
              💳 EMI
            </button>
          </div>

          <a href="property-detail.html?id=${property.id}" class="details-btn">
            View Full Details
          </a>
        </div>
        
        <!--Favorite Button-->
                <button class="favorite-btn" data-property-id="${property.id}" aria-label="Add to favorites">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div >
                `;
    });

    addPropertyCardListeners();
}

function getAgentInitials(name) {
    if (!name) return 'N/A';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
}


/* FILTER PROPERTIES FUNCTION */
function filterProperties() {
    const cityInput = document.getElementById("searchCity");
    const listingTypeFilter = document.getElementById("listingTypeFilter");
    const bedroomsFilter = document.getElementById("bedroomsFilter");
    const propertyTypeFilter = document.getElementById("propertyTypeFilter");
    const priceFilter = document.getElementById("priceFilter");
    const parkingCheckbox = document.getElementById("filterParking");
    const gymCheckbox = document.getElementById("filterGym");
    const poolCheckbox = document.getElementById("filterPool");

    if (!cityInput || !priceFilter) return;

    const city = cityInput.value.toLowerCase().trim();
    const listingType = listingTypeFilter ? listingTypeFilter.value : "all";
    const bedrooms = bedroomsFilter ? bedroomsFilter.value : "all";
    const propertyType = propertyTypeFilter ? propertyTypeFilter.value : "all";
    const maxPrice = priceFilter.value;

    const needsParking = parkingCheckbox ? parkingCheckbox.checked : false;
    const needsGym = gymCheckbox ? gymCheckbox.checked : false;
    const needsPool = poolCheckbox ? poolCheckbox.checked : false;

    let filtered = properties;

    if (city) {
        filtered = filtered.filter(property =>
            property.city.toLowerCase().includes(city)
        );
    }

    if (listingType !== "all") {
        filtered = filtered.filter(property => property.type === listingType);
    }

    if (bedrooms !== "all") {
        const bedroomCount = parseInt(bedrooms);
        if (bedroomCount === 4) {
            filtered = filtered.filter(property => property.bedrooms >= 4);
        } else {
            filtered = filtered.filter(property => property.bedrooms === bedroomCount);
        }
    }

    if (propertyType !== "all") {
        filtered = filtered.filter(property => property.propertyType === propertyType);
    }

    if (maxPrice !== "all") {
        const priceValue = parseInt(maxPrice);
        if (priceValue === 20000001) {
            filtered = filtered.filter(property => property.price > 20000000);
        } else {
            filtered = filtered.filter(property => property.price <= priceValue);
        }
    }

    if (needsParking || needsGym || needsPool) {
        filtered = filtered.filter(property => {
            if (needsParking && !property.amenities.parking) return false;
            if (needsGym && !property.amenities.gym) return false;
            if (needsPool && !property.amenities.pool) return false;
            return true;
        });
    }

    displayProperties(filtered);
}


/* SCHEDULE SITE VISIT FUNCTION */
function scheduleVisit(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    alert(`Great! You want to schedule a site visit for ${property.bhk} in ${property.city}.\n\nOur team will contact you within 2 hours to schedule your visit!`);
}


/* DOWNLOAD BROCHURE FUNCTION */
function downloadBrochure(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    alert(`Downloading brochure for ${property.bhk} in ${property.city}...\n\nThe brochure will be sent to your email!`);
}


/* REQUEST CALLBACK FUNCTION */
function requestCallback() {
    const phoneNumber = prompt('Please enter your phone number and we will call you back within 30 minutes:');

    if (phoneNumber && phoneNumber.trim() !== '') {
        alert(`Thank you! We will call you back at ${phoneNumber} within 30 minutes.`);
    }
}


/* SELL PROPERTY FORM HANDLER */
function handleSellFormSubmit(event) {
    event.preventDefault();

    alert('Thank you! We have received your property details. Our team will contact you within 24 hours!');

    event.target.reset();
}


/* HAMBURGER MENU TOGGLE */
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');

    if (navMenu && hamburger) {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}


/* ADD EVENT LISTENERS TO PROPERTY CARDS */
function addPropertyCardListeners() {
    const scheduleButtons = document.querySelectorAll('.schedule-btn');
    scheduleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            scheduleVisit(propertyId);
        });
    });

    const brochureButtons = document.querySelectorAll('.brochure-btn');
    brochureButtons.forEach(button => {
        button.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            downloadBrochure(propertyId);
        });
    });

    const emiButtons = document.querySelectorAll('.emi-btn');
    emiButtons.forEach(button => {
        button.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            openEMIModal(propertyId);
        });
    });

    const contactAgentButtons = document.querySelectorAll('.contact-agent-btn');
    contactAgentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            openContactAgentModal(propertyId);
        });
    });

    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            toggleFavorite(propertyId);
        });
    });

    // Add event listeners for carousel images to open lightbox
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(img => {
        img.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            const imageIndex = parseInt(this.getAttribute('data-image-index'));
            openLightbox(propertyId, imageIndex);
        });
    });

    // Add event listeners for carousel navigation buttons
    const carouselNavButtons = document.querySelectorAll('.carousel-nav');
    carouselNavButtons.forEach(button => {
        button.addEventListener('click', function () {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            const direction = parseInt(this.getAttribute('data-direction'));
            navigateCarousel(propertyId, direction);
        });
    });

    updateFavoriteButtons();
}


/* EMI CALCULATOR FUNCTIONS */

function openEMIModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    const modal = document.getElementById('emiModal');

    if (modal && property) {
        document.getElementById('propertyPrice').value = property.price;

        modal.classList.add('active');

        document.getElementById('emiResults').style.display = 'none';
    }
}

function closeEMIModal() {
    const modal = document.getElementById('emiModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('emiModal');
    if (event.target === modal) {
        closeEMIModal();
    }
});

function calculateEMI() {
    const propertyPrice = parseFloat(document.getElementById('propertyPrice').value);
    const downPaymentPercent = parseFloat(document.getElementById('downPayment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);

    if (!propertyPrice || !downPaymentPercent || !interestRate || !loanTenure) {
        alert('Please fill in all fields!');
        return;
    }

    if (propertyPrice <= 0 || downPaymentPercent < 0 || downPaymentPercent > 100 ||
        interestRate <= 0 || loanTenure <= 0) {
        alert('Please enter valid values!');
        return;
    }

    const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
    const loanAmount = propertyPrice - downPaymentAmount;

    const monthlyRate = interestRate / 12 / 100;

    const numberOfPayments = loanTenure * 12;

    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = emi * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('loanAmount').textContent = `₹${formatCurrency(loanAmount)}`;
    document.getElementById('monthlyEMI').textContent = `₹${formatCurrency(emi)}`;
    document.getElementById('totalInterest').textContent = `₹${formatCurrency(totalInterest)}`;
    document.getElementById('totalPayment').textContent = `₹${formatCurrency(totalPayment)}`;

    document.getElementById('emiResults').style.display = 'block';
}

function formatCurrency(amount) {
    const rounded = Math.round(amount);

    return rounded.toLocaleString('en-IN');
}


/* IMAGE CAROUSEL FUNCTIONS */

function navigateCarousel(propertyId, direction) {
    const carousel = document.querySelector(`.image-carousel[data-property-id="${propertyId}"]`);
    if (!carousel) return;

    const images = carousel.querySelectorAll('.carousel-image');
    const counter = carousel.querySelector('.current-image');

    if (images.length === 0) return;

    let currentIndex = 0;
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }

    images[currentIndex].classList.remove('active');
    images[newIndex].classList.add('active');

    if (counter) {
        counter.textContent = newIndex + 1;
    }
}


/* LIGHTBOX FUNCTIONS */

let currentLightboxProperty = null;
let currentLightboxIndex = 0;

function openLightbox(propertyId, imageIndex) {
    const property = properties.find(p => p.id === propertyId);
    if (!property || !property.images || property.images.length === 0) return;

    currentLightboxProperty = property;
    currentLightboxIndex = imageIndex;

    const lightbox = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');

    if (lightbox && lightboxImage) {
        lightboxImage.src = property.images[imageIndex];
        lightboxImage.alt = `${property.bhk} in ${property.city} - Image ${imageIndex + 1} `;

        if (lightboxCounter) {
            lightboxCounter.textContent = `${imageIndex + 1} / ${property.images.length}`;
        }

        lightbox.classList.add('active');

        document.addEventListener('keydown', handleLightboxKeyboard);
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    if (lightbox) {
        lightbox.classList.remove('active');
        currentLightboxProperty = null;
        currentLightboxIndex = 0;

        document.removeEventListener('keydown', handleLightboxKeyboard);
    }
}

function navigateLightbox(direction) {
    if (!currentLightboxProperty || !currentLightboxProperty.images) return;

    const images = currentLightboxProperty.images;
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = images.length - 1;
    } else if (currentLightboxIndex >= images.length) {
        currentLightboxIndex = 0;
    }

    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');

    if (lightboxImage) {
        lightboxImage.src = images[currentLightboxIndex];
        lightboxImage.alt = `${currentLightboxProperty.bhk} in ${currentLightboxProperty.city} - Image ${currentLightboxIndex + 1}`;
    }

    if (lightboxCounter) {
        lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${images.length}`;
    }
}

function handleLightboxKeyboard(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowLeft') {
        navigateLightbox(-1);
    } else if (event.key === 'ArrowRight') {
        navigateLightbox(1);
    }
}

window.addEventListener('click', function (event) {
    const lightbox = document.getElementById('lightboxModal');
    if (event.target === lightbox) {
        closeLightbox();
    }
});


/* CONTACT AGENT FUNCTIONS */

function openContactAgentModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const modal = document.getElementById('contactAgentModal');
    const agentName = document.getElementById('modalAgentName');
    const agentPhoto = document.getElementById('modalAgentPhoto');
    const agentRating = document.getElementById('modalAgentRating');
    const agentEmail = document.getElementById('modalAgentEmail');
    const agentPhone = document.getElementById('modalAgentPhone');

    if (modal && property.agent) {
        agentName.textContent = property.agent.name;
        agentPhoto.textContent = getAgentInitials(property.agent.name);
        agentRating.textContent = `Rating: ${property.agent.rating} ⭐`;
        agentEmail.textContent = property.agent.email;
        agentEmail.href = `mailto:${property.agent.email}`;
        agentPhone.textContent = property.agent.phone;
        agentPhone.href = `tel:${property.agent.phone}`;

        modal.classList.add('active');
    }
}

function closeContactAgentModal() {
    const modal = document.getElementById('contactAgentModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

window.addEventListener('click', function (event) {
    const contactModal = document.getElementById('contactAgentModal');
    if (event.target === contactModal) {
        closeContactAgentModal();
    }
});


/* FAVORITES FUNCTIONS */

function toggleFavorite(propertyId) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please login to save favorites!');
        openAuthModal();
        return;
    }

    const userData = JSON.parse(currentUser);
    const users = JSON.parse(localStorage.getItem('smartacresUsers')) || [];
    const userIndex = users.findIndex(u => u.email === userData.email);

    if (userIndex === -1) return;

    if (!users[userIndex].favorites) {
        users[userIndex].favorites = [];
    }

    const favoriteIndex = users[userIndex].favorites.indexOf(propertyId);

    if (favoriteIndex === -1) {
        users[userIndex].favorites.push(propertyId);
        alert('Property added to favorites! ❤️');
    } else {
        users[userIndex].favorites.splice(favoriteIndex, 1);
        alert('Property removed from favorites.');
    }

    localStorage.setItem('smartacresUsers', JSON.stringify(users));

    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const userData = JSON.parse(currentUser);
    const users = JSON.parse(localStorage.getItem('smartacresUsers')) || [];
    const user = users.find(u => u.email === userData.email);

    if (!user || !user.favorites) return;

    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        const propertyId = parseInt(button.getAttribute('data-property-id'));
        if (user.favorites.includes(propertyId)) {
            button.classList.add('favorited');
            button.setAttribute('aria-label', 'Remove from favorites');
        } else {
            button.classList.remove('favorited');
            button.setAttribute('aria-label', 'Add to favorites');
        }
    });
}


/* AUTHENTICATION FUNCTIONS */

function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userData = JSON.parse(currentUser);
        updateUIForLoggedInUser(userData);
    }
}

function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('active');
        document.getElementById('loginForm').classList.add('active');
        document.getElementById('signupForm').classList.remove('active');
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('signupConfirmPassword').value = '';
    }
}

window.addEventListener('click', function (event) {
    const authModal = document.getElementById('authModal');
    if (event.target === authModal) {
        closeAuthModal();
    }
});

function toggleAuthForm(event) {
    event.preventDefault();
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('smartacresUsers')) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            name: user.name,
            email: user.email
        }));

        updateUIForLoggedInUser(user);
        closeAuthModal();
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('smartacresUsers')) || [];

    if (users.find(u => u.email === email)) {
        alert('Email already registered. Please login instead.');
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password,
        favorites: []
    };

    users.push(newUser);
    localStorage.setItem('smartacresUsers', JSON.stringify(users));

    localStorage.setItem('currentUser', JSON.stringify({
        name: newUser.name,
        email: newUser.email
    }));

    updateUIForLoggedInUser(newUser);
    closeAuthModal();
    alert(`Welcome to SmartAcres, ${name}!`);
}

function handleLogout() {
    localStorage.removeItem('currentUser');

    document.getElementById('authBtn').style.display = 'block';
    document.getElementById('userProfile').style.display = 'none';

    alert('You have been logged out successfully.');

    if (propertyList) {
        displayProperties(properties);
    }
}

function updateUIForLoggedInUser(userData) {
    const authBtn = document.getElementById('authBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');

    if (authBtn) authBtn.style.display = 'none';
    if (userProfile) userProfile.style.display = 'flex';
    if (userName) userName.textContent = `Hi, ${userData.name}`;
}


/* INITIALIZE APP WHEN PAGE LOADS */
document.addEventListener('DOMContentLoaded', function () {

    checkAuth();

    if (propertyList) {
        displayProperties(properties);
    }

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    const floatingBtn = document.querySelector('.floating-callback-btn');
    if (floatingBtn) {
        floatingBtn.addEventListener('click', requestCallback);
    }

    const sellForm = document.querySelector('.sell-property-form');
    if (sellForm) {
        sellForm.addEventListener('submit', handleSellFormSubmit);
    }

});

/* ========== PROPERTY DETAIL PAGE FUNCTIONS ========== */

function loadPropertyDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));

    if (!propertyId) {
        document.getElementById('propertyDetailContainer').innerHTML = '<p style="text-align: center; padding: 60px 20px; color: var(--color-gray);">Property not found.</p>';
        return;
    }

    const property = properties.find(p => p.id === propertyId);

    if (!property) {
        document.getElementById('propertyDetailContainer').innerHTML = '<p style="text-align: center; padding: 60px 20px; color: --color-gray);">Property not found.</p>';
        return;
    }

    displayPropertyDetail(property);
    loadSimilarProperties(property);
}

function displayPropertyDetail(property) {
    const container = document.getElementById('propertyDetailContainer');

    const amenitiesHTML = property.amenities.map(amenity => {
        const amenityIcons = {
            'Parking': '🚗',
            'Gym': '💪',
            'Swimming Pool': '🏊',
            'Garden': '🌳',
            'Security': '��',
            'Power Backup': '⚡'
        };
        return `<span class="amenity-badge">${amenityIcons[amenity] || '✓'} ${amenity}</span>`;
    }).join('');

    const videoSection = property.video ? `
        <div class="property-video">
            <h3>Property Video Tour</h3>
            <iframe width="100%" height="400" src="${property.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    ` : '';

    container.innerHTML = `
        <div class="property-detail-grid">
            <!-- Image Gallery -->
            <div class="property-detail-gallery">
                <div class="detail-main-image">
                    <img src="${property.images[0]}" alt="${property.title}" id="detailMainImage" onclick="openLightboxFromDetail(0)">
                    <div class="detail-image-counter">1 / ${property.images.length}</div>
                </div>
                <div class="detail-thumbnail-grid">
                    ${property.images.map((img, index) => `
                        <img src="${img}" alt="${property.title} ${index + 1}" 
                             onclick="changeDetailMainImage(${index})" 
                             class="detail-thumbnail ${index === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
            </div>
            
            <!-- Property Info -->
            <div class="property-detail-info">
                <div class="property-detail-header">
                    ${property.status ? `<span class="status-badge status-${property.status.toLowerCase().replace(' ', '-')}">${property.status}</span>` : ''}
                    <h1>${property.title}</h1>
                    <p class="property-location">📍 ${property.location}</p>
                </div>
                
                <div class="property-price-section">
                    <div class="property-price">₹${property.price}L</div>
                    <div class="property-type-badge">${property.type}</div>
                </div>
                
                <div class="property-specs">
                    <div class="spec-item">
                        <span class="spec-icon">🛏️</span>
                        <div>
                            <div class="spec-label">Bedrooms</div>
                            <div class="spec-value">${property.bedrooms}</div>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">🚿</span>
                        <div>
                            <div class="spec-label">Bathrooms</div>
                            <div class="spec-value">${property.bathrooms}</div>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">📏</span>
                        <div>
                            <div class="spec-label">Area</div>
                            <div class="spec-value">${property.size} sq ft</div>
                        </div>
                    </div>
                    <div class="spec-item">
                        <span class="spec-icon">🏗️</span>
                        <div>
                            <div class="spec-label">Age</div>
                            <div class="spec-value">${property.age}</div>
                        </div>
                    </div>
                </div>
                
                <div class="property-amenities">
                    <h3>Amenities</h3>
                    <div class="amenities-grid">
                        ${amenitiesHTML}
                    </div>
                </div>
                
                <!-- Agent Section -->
                <div class="property-detail-agent">
                    <h3>Contact Agent</h3>
                    <div class="agent-card">
                        <div class="agent-avatar">${getAgentInitials(property.agent.name)}</div>
                        <div class="agent-info-detail">
                            <div class="agent-name-detail">${property.agent.name}</div>
                            <div class="agent-rating-detail">⭐ ${property.agent.rating}</div>
                        </div>
                        <button class="contact-agent-btn" onclick="openContactAgentModal(${property.id})">
                            📞 Contact
                        </button>
                    </div>
                </div>
                
                <div class="property-actions">
                    <button class="action-btn primary-btn" onclick="openEMIModal(${property.id})">
                        💳 Calculate EMI
                    </button>
                    <button class="action-btn secondary-btn" onclick="alert('Schedule visit feature coming soon!')">
                        📅 Schedule Visit
                    </button>
                </div>
            </div>
        </div>
        
        ${videoSection}
    `;

    window.currentPropertyImages = property.images;
    window.currentImageIndex = 0;
}

let currentDetailImageIndex = 0;
function changeDetailMainImage(index) {
    const mainImage = document.getElementById('detailMainImage');
    const thumbnails = document.querySelectorAll('.detail-thumbnail');
    const counter = document.querySelector('.detail-image-counter');

    if (mainImage && window.currentPropertyImages) {
        mainImage.src = window.currentPropertyImages[index];
        currentDetailImageIndex = index;
        counter.textContent = `${index + 1} / ${window.currentPropertyImages.length}`;

        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
}

function openLightboxFromDetail(index) {
    if (window.currentPropertyImages) {
        window.currentImageIndex = index;
        openLightbox(window.currentPropertyImages, index);
    }
}

function loadSimilarProperties(currentProperty) {
    const similarList = document.getElementById('similarPropertiesList');
    if (!similarList) return;

    const similar = properties.filter(p =>
        p.id !== currentProperty.id &&
        (p.type === currentProperty.type || p.location === currentProperty.location)
    ).slice(0, 3);

    if (similar.length === 0) {
        similarList.innerHTML = '<p style="text-align: center; color: var(--color-gray);">No similar properties found.</p>';
        return;
    }

    similarList.innerHTML = similar.map(property => {
        return `
            <div class="property-card">
                <div class="property-card-image">
                    <img src="${property.images[0]}" alt="${property.title}">
                </div>
                <div class="property-info">
                    <h3>${property.title}</h3>
                    <p class="property-location">📍 ${property.location}</p>
                    <div class="property-price">₹${property.price}L</div>
                    <div class="property-specs-inline">
                        <span>🛏️ ${property.bedrooms} BHK</span>
                        <span>📏 ${property.size} sq ft</span>
                    </div>
                    <a href="property-detail.html?id=${property.id}" class="details-btn">View Details</a>
                </div>
            </div>
        `;
    }).join('');
}

if (window.location.pathname.includes('property-detail.html')) {
    document.addEventListener('DOMContentLoaded', loadPropertyDetail);
}


/* ========== COMPREHENSIVE EVENT LISTENERS ========== */

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const closeAuthModalBtn = document.getElementById('closeAuthModal');
    const toggleToSignup = document.getElementById('toggleToSignup');
    const toggleToLogin = document.getElementById('toggleToLogin');

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (authBtn) {
        authBtn.addEventListener('click', openAuthModal);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    if (closeAuthModalBtn) {
        closeAuthModalBtn.addEventListener('click', closeAuthModal);
    }

    if (toggleToSignup) {
        toggleToSignup.addEventListener('click', function (e) {
            e.preventDefault();
            toggleAuthForm(e);
        });
    }

    if (toggleToLogin) {
        toggleToLogin.addEventListener('click', function (e) {
            e.preventDefault();
            toggleAuthForm(e);
        });
    }

    const searchBtn = document.getElementById('searchPropertiesBtn') || document.querySelector('.search button');
    if (searchBtn) {
        searchBtn.addEventListener('click', filterProperties);
    }

    const closeContactAgentBtn = document.getElementById('closeContactAgent');
    const closeEMIModalBtn = document.getElementById('closeEMIModal');
    const closeLightboxBtn = document.getElementById('closeLightbox');
    const calculateEMIBtn = document.getElementById('calculateEMIBtn');
    const openContactModalBtn = document.getElementById('openContactModal');

    if (closeContactAgentBtn) {
        closeContactAgentBtn.addEventListener('click', closeContactAgentModal);
    }

    if (closeEMIModalBtn) {
        closeEMIModalBtn.addEventListener('click', closeEMIModal);
    }

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }

    if (calculateEMIBtn) {
        calculateEMIBtn.addEventListener('click', calculateEMI);
    }

    if (openContactModalBtn) {
        openContactModalBtn.addEventListener('click', requestCallback);
    }

    const loginForm = document.getElementById('loginFormElement');
    const signupForm = document.getElementById('signupFormElement');
    const sellPropertyForm = document.querySelector('.sell-property-form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    if (sellPropertyForm) {
        sellPropertyForm.addEventListener('submit', handleSellFormSubmit);
    }

    const floatingCallback = document.querySelector('.floating-callback-btn');
    if (floatingCallback) {
        floatingCallback.addEventListener('click', requestCallback);
    }

    window.addEventListener('click', function (event) {
        const authModal = document.getElementById('authModal');
        const emiModal = document.getElementById('emiModal');
        const contactModal = document.getElementById('contactAgentModal');

        if (event.target === authModal) {
            closeAuthModal();
        }
        if (event.target === emiModal) {
            closeEMIModal();
        }
        if (event.target === contactModal) {
            closeContactAgentModal();
        }
    });

    if (typeof properties !== 'undefined' && typeof displayProperties === 'function') {
        displayProperties(properties);
    }
});


/* ========== COMPREHENSIVE EVENT LISTENERS ========== */

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const toggleToSignup = document.getElementById('toggleToSignup');
    const toggleToLogin = document.getElementById('toggleToLogin');

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (authBtn) {
        authBtn.addEventListener('click', openAuthModal);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    if (closeAuthModal) {
        closeAuthModal.addEventListener('click', closeAuthModal);
    }

    if (toggleToSignup) {
        toggleToSignup.addEventListener('click', toggleAuthForm);
    }

    if (toggleToLogin) {
        toggleToLogin.addEventListener('click', toggleAuthForm);
    }

    const closeContactAgent = document.getElementById('closeContactAgent');
    const closeEMIModal = document.getElementById('closeEMIModal');
    const closeLightbox = document.getElementById('closeLightbox');
    const calculateEMIBtn = document.getElementById('calculateEMIBtn');
    const openContactModal = document.getElementById('openContactModal');

    if (closeContactAgent) {
        closeContactAgent.addEventListener('click', closeContactAgentModal);
    }

    if (closeEMIModal) {
        closeEMIModal.addEventListener('click', closeEMIModal);
    }

    if (closeLightbox) {
        closeLightbox.addEventListener('click', closeLightbox);
    }

    if (calculateEMIBtn) {
        calculateEMIBtn.addEventListener('click', calculateEMI);
    }

    if (openContactModal) {
        openContactModal.addEventListener('click', requestCallback);
    }

    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', function (event) {
            event.preventDefault();
            handleLogin(event);
        });
    }

    const signupFormElement = document.getElementById('signupForm');
    if (signupFormElement) {
        signupFormElement.addEventListener('submit', function (event) {
            event.preventDefault();
            handleSignup(event);
        });
    }

    const sellForm = document.querySelector('.sell-property-form');
    if (sellForm) {
        sellForm.addEventListener('submit', handleSellFormSubmit);
    }

    const searchBtn = document.getElementById('searchPropertiesBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', filterProperties);
    }

    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', function () {
            navigateLightbox(-1);
        });
    }

    const lightboxNextBtn = document.getElementById('lightboxNextBtn');
    if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', function () {
            navigateLightbox(1);
        });
    }

    const floatingCallback = document.querySelector('.floating-callback-btn');
    if (floatingCallback) {
        floatingCallback.addEventListener('click', requestCallback);
    }

    window.addEventListener('click', function (event) {
        const authModal = document.getElementById('authModal');
        const emiModal = document.getElementById('emiModal');
        const contactModal = document.getElementById('contactAgentModal');

        if (event.target === authModal) {
            closeAuthModal();
        }
        if (event.target === emiModal) {
            closeEMIModal();
        }
        if (event.target === contactModal) {
            closeContactAgentModal();
        }
    });

    displayProperties(properties);
});
