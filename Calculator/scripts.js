let display = document.getElementById('display');

function appendValue(value) {
      display.value += value;
    }

function cleardisplay() {
      display.value = '';
    }

function deletelast() {
      display.value = display.value.slice(0, -1);
    }
function pushHistory(expr, result) {
  let history = JSON.parse(sessionStorage.getItem('history') || '[]');
  history.unshift({ expr, result: String(result) });
  if (history.length > 50) history.pop();
  sessionStorage.setItem('history', JSON.stringify(history));

  renderHistory();
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (!list) return;
  list.innerHTML = '';

  const history = JSON.parse(sessionStorage.getItem('history') || '[]');

  history.forEach((item) => {
    const li = document.createElement('li');
    li.style.padding = '6px';
    li.style.borderBottom = '1px solid #eee';
    li.style.cursor = 'pointer';
    li.textContent = item.expr + ' = ' + item.result;

    li.onclick = () => {
      display.value = item.expr;
      toggleHistory(false);
      display.focus();
    };

    list.appendChild(li);
  });
}

function toggleHistory(force) {
  const panel = document.getElementById('historyPanel');
  if (!panel) return;
  if (typeof force === 'boolean') {
    panel.style.display = force ? 'block' : 'none';
  } else {
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  }
}

function clearHistory() {
  sessionStorage.removeItem('history');
  renderHistory();
}

window.onload = renderHistory;


function calculateresult() {
 const expr = String(display.value).trim();

  if (expr === "") {
    display.value = 0;
    return;
  }

  const safePattern = /^[0-9+\-*/().\s]+$/;
  if (!safePattern.test(expr)) {
    display.value = 'Error';
    return;
  }

  try {
    const result = Function('"use strict"; return (' + expr + ')')();
    if (typeof result === 'number' && isFinite(result)) {
      pushHistory(expr, result);
      display.value = result;
    } else {
      display.value = 'Error';
    }
  } catch (e) {
    display.value = 'Error';
  }
}
function numbers(event) {
  if (
    event.key === "Backspace" ||event.key === "ArrowLeft" ||event.key === "ArrowRight" || 
    event.key==="+"||event.key==="-"||event.key==="/"||event.key==="*"||
    (event.key >= '0' && event.key <= '9')
  ) {
    return true;
  }
  return false;
}

document.getElementById('display').addEventListener('keydown', function (event) {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "+", "-", "/", "*", "."];

  if (!(allowedKeys.includes(event.key) || (event.key >= '0' && event.key <= '9'))) {
    event.preventDefault();
  }
  if (event.key === "Delete") {
    cleardisplay();
    event.preventDefault();
  }

  if (event.key === "Enter") {
    calculateresult();
    event.preventDefault();
  }
});

