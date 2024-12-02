<style>
.title {
  color: #4b515a;
}

.inp {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  height: 53px;
}

.inp .border {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 18px;
  fill: none;
}

.inp .border path {
  stroke: #c8ccd4;
  stroke-width: 2;
}

.inp .border path d {
  transition: all 0.2s ease;
}

.inp .check {
  position: absolute;
  top: 20px;
  right: 20px;
  fill: none;
  transform: translate(0, 9px) scale(0);
  transition: all 0.3s cubic-bezier(0.5, 0.9, 0.25, 1.3);
  transition-delay: 0.15s;
}

.inp .check path {
  stroke: #07f;
  stroke-width: 2;
}

.inp input {
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
}

.inp input:focus {
  outline: none;
}

.inp input:focus + .border path {
  stroke: #07f;
}

.inp input:valid + .border path {
  animation: elasticInput 0.8s ease forwards;
}

.inp input:valid + .border + .check {
  transform: translate(0, 0) scale(1);
}

::placeholder {
  color: #9098a9;
}

@-moz-keyframes elasticInput {
  33% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }

  66% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,17 253,17 C261,17 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }
}

@-webkit-keyframes elasticInput {
  33% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }

  66% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,17 253,17 C261,17 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }
}

@-o-keyframes elasticInput {
  33% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }

  66% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,17 253,17 C261,17 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }
}

@keyframes elasticInput {
  33% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,1 253,1 C261,1 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }

  66% {
    d: path(
      "M0,12 L226,12 C220,12 220.666667,12 228,12 C239,12 245,17 253,17 C261,17 268,12 278,12 C284.666667,12 285.333333,12 280,12"
    );
  }
}

.grupa-input {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
}

.numery {
  width: 50px;
  height: 50px;
  box-sizing: border-box;

  --key-text-color: #969faf;
  --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px rgba(30, 35, 90, 0.4);
  --docsearch-key-gradient: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  border: none;
  background: var(--docsearch-key-gradient);
  border-radius: 3px;
  box-shadow: var(--docsearch-key-shadow);
  color: var(--key-text-color);
  cursor: pointer;
  text-align: center;
  padding: 0.6em;
  margin: 0 0.6em;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1em;
  min-width: 1em;
  line-height: 1em;
  user-select: none;
}

.numery#zero {
  grid-column-start: 2;
}

button[type="submit"] {
  width: 100%;
  margin-left: auto;
  cursor: pointer;
  padding: 0.8em 1.2em 0.8em 1em;
  font-size: 16px;
  --docsearch-key-gradient: linear-gradient(225deg, #3cee77, #f8f8f8);
  color: #3f3f41;
  letter-spacing: 1px;
}

button[type="submit"]:disabled {
  opacity: 50%;
  cursor: not-allowed;
}

button[type="submit"] span {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

button[type="submit"] i::before {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.klawiatura {
  position: relative;
}
</style>

<template>
  <div class="container">
    <h1 class="title">Wprowadź PIN:</h1>
    <label for="inp" class="inp">
      <input type="password" id="inp" pattern=".{4,}" required />
      <svg height="18px" viewBox="0 0 280 18" class="border">
        <path
          d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"
        ></path>
      </svg>
      <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
        <path d="M1 7l2 2 6-6"></path>
      </svg>
    </label>
    <div class="grupa-input">
      <div class="grid klawiatura">
        <button type="button" class="numery" data-numer="1">1</button>
        <button type="button" class="numery" data-numer="2">2</button>
        <button type="button" class="numery" data-numer="3">3</button>
        <button type="button" class="numery" data-numer="4">4</button>
        <button type="button" class="numery" data-numer="5">5</button>
        <button type="button" class="numery" data-numer="6">6</button>
        <button type="button" class="numery" data-numer="7">7</button>
        <button type="button" class="numery" data-numer="8">8</button>
        <button type="button" class="numery" data-numer="9">9</button>
        <button type="button" class="numery" id="zero" data-numer="0">0</button>
        <button type="button" class="numery" id="zatwierdz">
          <i class="bi bi-backspace-fill"></i>
        </button>
      </div>
      <button disabled class="numery" type="submit" id="submit">
        <span>
          <i class="bi bi-arrow-left-short"></i>
          ZATWIERDŹ
        </span>
      </button>
    </div>
  </div>
</template>

<script>
window.onload = () => {
  const buttons = document.querySelectorAll("[data-numer]");
  const submit = document.getElementById("submit");
  const back = document.getElementById("zatwierdz");

  class Pin {
    value = "";

    constructor() {
      this.input = document.getElementById("inp");
    }

    _set(newValue) {
      if (newValue.length > 4) return;

      if (newValue.length === 4) {
        submit.removeAttribute("disabled");
      } else if (!submit.hasAttribute("disabled")) {
        submit.setAttribute("disabled", "true");
      }

      this.value = newValue;
      this.input.value = this.value;
    }

    dodaj(numer) {
      this._set(this.value + numer);
    }

    cofnij() {
      if (this.value.length === 0) return;

      this._set(this.value.slice(0, this.value.length - 1));
    }
  }

  const pin = new Pin();

  buttons.forEach((button) => {
    button.addEventListener("click", ({ target }) => {
      const numer = Number(target.getAttribute("data-numer"));
      pin.dodaj(numer);
    });
  });

  back.addEventListener("click", () => {
    pin.cofnij();
  });

  submit.addEventListener('click', () => {
    window.location.href = '/ladowanie'
  })
};
</script>
