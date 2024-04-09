document.addEventListener("DOMContentLoaded", function() {
    // Fake data - replace this with your actual data
    const fakeDogs = [
        { name: "Max", breed: "Labrador Retriever", age: 5, size: "small", weight: 5, isVaccinated: true, isFixed: true, adoptionFee: 25},
        { name: "Max", breed: "Labrador Retriever", age: 5, size: "small", weight: 5, isVaccinated: true, isFixed: true, adoptionFee: 25},
        { name: "Max", breed: "Labrador Retriever", age: 5, size: "small", weight: 5, isVaccinated: true, isFixed: true, adoptionFee: 25},
        { name: "Max", breed: "Labrador Retriever", age: 5, size: "small", weight: 5, isVaccinated: true, isFixed: true, adoptionFee: 25},
        { name: "Max", breed: "Labrador Retriever", age: 5, size: "small", weight: 5, isVaccinated: true, isFixed: true, adoptionFee: 25},
      
    ];

    // Get the template script element
    const source = document.getElementById("dog-template").innerHTML;

    // Compile the template
    const template = Handlebars.compile(source);

    // Generate HTML using the template and fake data
    const html = template({ dogs: fakeDogs });

    // Insert the HTML into the dogProfiles div
    document.getElementById("dogProfiles").innerHTML = html;
});

