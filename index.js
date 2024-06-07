// document.addEventListener('DOMContentLoaded', () => {
//     fetch('data.json')
//         .then(response => response.json())
//         .then(data => {
//             populateHeroSection(data.hero);
//             populateFeatures(data.features);
//             populateTestimonials(data.testimonials);
//             populatePricing(data.pricing);
//         });

//     function populateHeroSection(hero) {
//         document.getElementById('hero-headline').innerText = hero.headline;
//         document.getElementById('hero-subheadline').innerText = hero.subheadline;

//         const buttonsContainer = document.getElementById('hero-buttons');
//         hero.ctaButtons.forEach(button => {
//             const a = document.createElement('a');
//             a.href = button.link;
//             a.className = 'btn';
//             a.innerText = button.text;
//             buttonsContainer.appendChild(a);
//         });
//     }

//     function populateFeatures(features) {
//         const featuresContainer = document.getElementById('feature-list');
//         features.forEach(feature => {
//             const featureDiv = document.createElement('div');
//             featureDiv.className = 'feature';

//             const img = document.createElement('img');
//             img.src = feature.icon;
//             img.alt = feature.title;
//             featureDiv.appendChild(img);

//             const h3 = document.createElement('h3');
//             h3.innerText = feature.title;
//             featureDiv.appendChild(h3);

//             const p = document.createElement('p');
//             p.innerText = feature.description;
//             featureDiv.appendChild(p);

//             featuresContainer.appendChild(featureDiv);
//         });
//     }

//     function populateTestimonials(testimonials) {
//         const testimonialsContainer = document.getElementById('testimonial-list');
//         testimonials.forEach(testimonial => {
//             const testimonialDiv = document.createElement('div');
//             testimonialDiv.className = 'testimonial';

//             const img = document.createElement('img');
//             img.src = testimonial.avatar;
//             img.alt = testimonial.name;
//             testimonialDiv.appendChild(img);

//             const feedback = document.createElement('p');
//             feedback.innerText = testimonial.feedback;
//             testimonialDiv.appendChild(feedback);

//             const name = document.createElement('p');
//             name.innerText = testimonial.name;
//             testimonialDiv.appendChild(name);

//             testimonialsContainer.appendChild(testimonialDiv);
//         });
//     }

//     function populatePricing(pricing) {
//         const pricingContainer = document.getElementById('pricing-list');
//         pricing.forEach(plan => {
//             const planDiv = document.createElement('div');
//             planDiv.className = 'pricing-plan';

//             const h3 = document.createElement('h3');
//             h3.innerText = plan.plan;
//             planDiv.appendChild(h3);

//             const price = document.createElement('p');
//             price.innerText = plan.price;
//             planDiv.appendChild(price);

//             const featuresList = document.createElement('ul');
//             plan.features.forEach(feature => {
//                 const li = document.createElement('li');
//                 li.innerText = feature;
//                 featuresList.appendChild(li);
//             });
//             planDiv.appendChild(featuresList);

//             pricingContainer.appendChild(planDiv);
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 