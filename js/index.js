'use strict';

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://silviacht.github.io/computadoras/json/students.json')
    .then(response => response.json())
    .then(data => {
      const studentCards = document.getElementById('studentCards');
      data.forEach((element, index) => {
        const {categoria, subcategoria,imagen, marca, procesador, memoria, discoduro, color, precio, otros} = element;
        studentCards.innerHTML += `
          <div class="card" key=${index}>
            <div class="card__body">
              <img src="${imagen}" alt="${categoria}" width="128"
                height="128" class="card__img" />
              <h2 class="card__title">
                ${marca}
                <h3>${subcategoria}</h3>
              </h2>              
              <ul class="card__text">
                ${procesador}
              </ul>
              <ul class="card__text">
                ${memoria}
              </ul>
              <ul class="card__text">
                ${discoduro}
              </ul>
              <ul class="card__text">
                ${color}
              </ul>
              <ul class="card__text">
                ${precio}
              </ul>
              <ul class="card__text">
                ${otros}
              </ul>
              <div>
                <button class="card__title">Comprar</button>
              </div>
            </div>            
          </div>
        `;
      });
    });
});