const testimonials = [
    {
        heading: "1Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium dolore mque lauda enim ad minima veniam quis nostrumexe rcitationem ullam corporise suscipit laboriosam nisi ut aliquid exea",
        description: "1Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam nisiut",
        name: "1Sousa Fernandes",
        jobTitle: "1CEO & Founder",
        img: "/images/sousa.png"
    },
    {
        heading: "2Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium dolore mque lauda enim ad minima veniam quis nostrumexe rcitationem ullam corporise suscipit laboriosam nisi ut aliquid exea",
        description: "2Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam nisiut",
        name: "2Sousa Fernandes",
        jobTitle: "2CEO & Founder",
        img: "/images/sousa.png"
    },
    {
        heading: "3Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium dolore mque lauda enim ad minima veniam quis nostrumexe rcitationem ullam corporise suscipit laboriosam nisi ut aliquid exea",
        description: "3Rnimad minima veniam quis nostreercit ationem ullam corporis suscipit laboriosam nisiut",
        name: "3Sousa Fernandes",
        jobTitle: "3CEO & Founder",
        img: "/images/sousa.png"
    }
]

let current = 0

const setTestimonial = (testimonial) => {
    window.document.getElementById("testimonial-heading").innerHTML = testimonial.heading
    window.document.getElementById("testimonial-description").innerHTML = testimonial.description
    window.document.getElementById("testimonial-name").innerHTML = testimonial.name
    window.document.getElementById("testimonial-job-title").innerHTML = testimonial.jobTitle
    window.document.getElementById("testimonial-img").src = testimonial.img
}

const previousTestimonial = () => {
    if (current === 0) current = testimonials.length - 1
    else current--
    setTestimonial(testimonials[current])
}

const nextTestimonial = () => {
    if (current === testimonials.length - 1) current = 0
    else current++
    setTestimonial(testimonials[current])
}

