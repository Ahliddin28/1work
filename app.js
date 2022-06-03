const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle')
      bar = body.querySelector('#bar')
      bar.addEventListener('click',() =>{
  sidebar.classList.toggle('close')
})

let mtObject = document.querySelector('#indr1')
let openDropdownBtn = document.querySelector ('#openBtn')
openDropdownBtn.addEventListener('click',() =>{
  openDropdownBtn.classList.toggle('activeBtn')
  mtObject.classList.toggle('mt2')


  
})
let mtObject2 = document.querySelector('#indr2')
// let openDropdownBtn = document.querySelector ('#openBtn')
openDropdownBtn.addEventListener('click',() =>{
  openDropdownBtn.classList.toggle('activeBtn')
  mtObject2.classList.toggle('mt2')


  
})

let mtObject3 = document.querySelector('#indr3')
// let openDropdownBtn = document.querySelector ('#openBtn')
openDropdownBtn.addEventListener('click',() =>{
  openDropdownBtn.classList.toggle('activeBtn')
  mtObject3.classList.toggle('mt2')


  
})


const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Instagram', 'Youtube', 'Telegram', 'Tiktok', 'Twitter', 'Github'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Instagram', 'Youtube', 'Telegram', 'Tiktok', 'Twitter', 'Github'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx3 = document.getElementById('myChart3');
const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Instagram', 'Youtube', 'Telegram', 'Tiktok', 'Twitter', 'Github'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    centeredSlides: true,
  },
  breakpoints: {
    640: {
      delay:2500,
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      delay:2500,
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      delay:2500,
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});