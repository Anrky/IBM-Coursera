

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

function compute()
{
    p = document.getElementById("principal").value;
    r = document.querySelector(".range").value;
    n = document.getElementById("years").value;
    si = p*((r/100)*n);
    cp = 2020;
    ep = cp + parseInt(n);
    let str = `If you deposit <span class="hi">${p}</span>,<br>
    at an interest rate of <span class="hi">${r}%</span>.<br>
    You will recieve an amount of  <span class="hi">${si}</span>,<br>
    in the year  <span class="hi">${ep}</span>`;
    document.getElementById("opt").innerHTML = str;
    
}

