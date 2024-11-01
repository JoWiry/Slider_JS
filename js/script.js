
document.addEventListener("DOMContentLoaded", function () {
    const projectNames = document.querySelectorAll(".top__image-name");
    const navDots = document.querySelectorAll(".project__nav-dot");
    const navArrows = document.querySelectorAll(".project__nav-arrow");
    const projectImage = document.getElementById("project-image");
    const cityElem = document.getElementById("city");
    const repairTimeElem = document.getElementById("repair-time");
    const apartmentAreaElem = document.getElementById("apartment-area");
    const repairCostElem = document.getElementById("repair-cost");

    let currentIndex = 0;

    const projects = [
        {
            image: 'img/image_slider1.svg',
            city: 'Rostov-on-Don<br>LCD admiral',
            repairTime: '3.5 months',
            apartmentArea: '81 m²',
            repairCost: 'Upon request'
        },
        {
            image: 'img/image_slider2.svg',
            city: 'Sochi<br>Thieves',
            repairTime: '4 months',
            apartmentArea: '105 m²',
            repairCost: 'Upon request'
        },
        {
            image: 'img/image_slider3.svg',
            city: 'Rostov-on-Don<br>Patriotic',
            repairTime: '3 months',
            apartmentArea: '93 m²',
            repairCost: 'Upon request'
        }
    ];

    function updateActiveState(index) {
        projectNames.forEach(name => name.classList.remove("active"));
        navDots.forEach(dot => dot.classList.remove("active"));
        projectNames[index].classList.add("active");
        navDots[index].classList.add("active");

        const project = projects[index];

        // Фиксируем высоту изменяющихся текстовых блоков
        const cityHeight = cityElem.offsetHeight;
        const repairTimeHeight = repairTimeElem.offsetHeight;
        const apartmentAreaHeight = apartmentAreaElem.offsetHeight;
        const repairCostHeight = repairCostElem.offsetHeight;

        cityElem.style.height = `${cityHeight}px`;
        repairTimeElem.style.height = `${repairTimeHeight}px`;
        apartmentAreaElem.style.height = `${apartmentAreaHeight}px`;
        repairCostElem.style.height = `${repairCostHeight}px`;

        projectImage.classList.add("fade-out");
        cityElem.classList.add("fade-out");
        repairTimeElem.classList.add("fade-out");
        apartmentAreaElem.classList.add("fade-out");
        repairCostElem.classList.add("fade-out");

        setTimeout(() => {
            projectImage.src = project.image;
            cityElem.innerHTML = project.city;
            repairTimeElem.innerText = project.repairTime;
            apartmentAreaElem.innerText = project.apartmentArea;
            repairCostElem.innerText = project.repairCost;

            projectImage.classList.remove("fade-out");
            projectImage.classList.add("fade-in");
            cityElem.classList.remove("fade-out");
            cityElem.classList.add("fade-in");
            repairTimeElem.classList.remove("fade-out");
            repairTimeElem.classList.add("fade-in");
            apartmentAreaElem.classList.remove("fade-out");
            apartmentAreaElem.classList.add("fade-in");
            repairCostElem.classList.remove("fade-out");
            repairCostElem.classList.add("fade-in");

            setTimeout(() => {
                projectImage.classList.remove("fade-in");
                cityElem.classList.remove("fade-in");
                repairTimeElem.classList.remove("fade-in");
                apartmentAreaElem.classList.remove("fade-in");
                repairCostElem.classList.remove("fade-in");

                // Очистка фиксированной высоты после анимации
                cityElem.style.height = "";
                repairTimeElem.style.height = "";
                apartmentAreaElem.style.height = "";
                repairCostElem.style.height = "";
            }, 300);

        }, 300);

        currentIndex = index;
    }

    projectNames.forEach((name, index) => {
        name.addEventListener("click", () => updateActiveState(index));
    });

    navDots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateActiveState(index));
    });

    navArrows.forEach((arrow) => {
        arrow.addEventListener("click", () => {
            if (arrow.getAttribute("aria-label") === "Previous project") {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : projectNames.length - 1;
            } else {
                currentIndex = (currentIndex < projectNames.length - 1) ? currentIndex + 1 : 0;
            }
            updateActiveState(currentIndex);
        });
    });

    updateActiveState(currentIndex);
});







