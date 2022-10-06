function tooltip(tooltip, text) {
  tooltip = document.querySelector('#tooltip');
  const body = document.querySelector('body');
  const header = document.querySelector('.top-site');

  body.addEventListener('mouseover', (e) => {
      body.style.background = 'gray';
  })
  body.addEventListener('mouseout', (e) => {
      body.style.background = 'unset';
  })

  tooltip.addEventListener('mouseover', (e) => {
      if (document.querySelector('.tooltip')) {
          document.querySelector('.tooltip').remove();
      }

      newDiv = document.createElement('div');
      newDiv.classList.add('tooltip');
      if(document.querySelector('#icon1')) {
          text = newDiv.innerHTML = 'Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii.';
      } else if(document.querySelector('#icon2')) {
          text = newDiv.innerHTML = 'Texto diferente';
      }
      const largura = 200;
      newDiv.style.position = "fixed";
      newDiv.style.width = largura + "px";
      newDiv.style.top = e.clientY + "px";
      newDiv.style.display = "flex";
      newDiv.style.left =
          (e.clientX + largura > body.clientWidth
              ? e.clientX - largura - 20
              : e.clientX + largura) + "px";

      header.appendChild(newDiv);

      tooltip.addEventListener('mouseout', () => {
          newDiv.remove();
      })
  })
} tooltip()