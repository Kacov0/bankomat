<style>
:root {
  --loader-color: 169, 169, 169;
  --loader-color-2: rgb(112, 128, 144);
}

.title {
  text-align: center;
}

.loader-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
}

.loader {
  font-size: 20px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.class {
  display: none;
  font-size: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  color: green;
  transition: transform 1s ease-in-out;
}

.class.show {
  display: inline-block;
  transform: translate(-50%, -50%) scale(1);
}

@keyframes mulShdSpin {

  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em var(--loader-color-2),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.5),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.7);
  }

  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.7),
      1.8em -1.8em 0 0em var(--loader-color-2),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.5);
  }

  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.5),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.7),
      2.5em 0em 0 0em var(--loader-color-2),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
  }

  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.5),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.7),
      1.75em 1.75em 0 0em var(--loader-color-2),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
  }

  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.5),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.7),
      0em 2.5em 0 0em var(--loader-color-2),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.2),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
  }

  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.5),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.7),
      -1.8em 1.8em 0 0em var(--loader-color-2),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
  }

  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.5),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.7),
      -2.6em 0em 0 0em var(--loader-color-2),
      -1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2);
  }

  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(var(--loader-color), 0.2),
      1.8em -1.8em 0 0em rgba(var(--loader-color), 0.2),
      2.5em 0em 0 0em rgba(var(--loader-color), 0.2),
      1.75em 1.75em 0 0em rgba(var(--loader-color), 0.2),
      0em 2.5em 0 0em rgba(var(--loader-color), 0.2),
      -1.8em 1.8em 0 0em rgba(var(--loader-color), 0.5),
      -2.6em 0em 0 0em rgba(var(--loader-color), 0.7),
      -1.8em -1.8em 0 0em var(--loader-color-2);
  }
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}


.przyciski {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  background-color: #ffffff;
  /* bg-white */
  color: #4a4a4a;
  /* text-gray-800 */
  font-weight: 600;
  /* font-semibold */
  padding: 0.5rem 1rem;
  /* py-2 px-4 */
  border: 1px solid #d1d5db;
  /* border-gray-400 */
  border-radius: 0.25rem;
  /* rounded */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  /* shadow */
  transition: background-color 0.2s ease-in-out;
  /* smooth hover effect */
}

.btn:hover {
  background-color: #f9fafb;
  /* hover:bg-gray-100 */
}

.btn:disabled {
  background-color: #f3f4f6; /* bg-gray-200 */
  color: #9ca3af; /* text-gray-400 */
  border-color: #e5e7eb; /* border-gray-300 */
  box-shadow: none; /* remove shadow */
  cursor: not-allowed; /* indicate non-interactive */
}
</style>

<template>
  <div class="container">
    <h1 class="title" id="title">Proszę czekać...</h1>
    <!-- <div class="loader-wrapper"> -->
      <span class="loader" id="load"></span>
      <i class="bi bi-check-circle class" id="tak"></i>
    <!-- </div> -->
    <div class="main">
      <div class="przyciski">
        <button class="btn" disabled>Wypłać gotówkę</button>
        <button class="btn" disabled>Wpłać gotówkę</button>
        <button class="btn" disabled>Sprawdź stan konta</button>
      </div>
    </div>
  </div>
</template>

<script>
  window.onload = function () {
    const tak = document.getElementById('tak');
    const load = document.getElementById('load');
    const buttons = document.querySelectorAll('.btn')
    const title = document.getElementById('title')

    setTimeout(() => {
      tak.classList.add('show');
      load.style.display = 'none'
      buttons.forEach(function(button) {
        button.removeAttribute('disabled');
      })
      title.textContent = 'Udało się zalogować'
    }, 5000); 
  }
</script>
