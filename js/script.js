const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const idades = [
    { catAge: 1, humanAge: "15 anos" },
    { catAge: 2, humanAge: "24 anos" },
    { catAge: 3, humanAge: "28 anos" },
    { catAge: 4, humanAge: "32 anos" },
    { catAge: 5, humanAge: "36 anos" },
    { catAge: 6, humanAge: "40 anos" },
    { catAge: 7, humanAge: "44 anos" },
    { catAge: 8, humanAge: "48 anos" },
    { catAge: 9, humanAge: "52 anos" },
    { catAge: 10, humanAge: "56 anos" },
    { catAge: 11, humanAge: "60 anos" },
    { catAge: 12, humanAge: "64 anos" },
    { catAge: 13, humanAge: "68 anos" },
    { catAge: 14, humanAge: "72 anos" },
    { catAge: 15, humanAge: "76 anos" },
    { catAge: 16, humanAge: "80 anos" },
    { catAge: 17, humanAge: "84 anos" },
    { catAge: 18, humanAge: "88 anos" },
    { catAge: 19, humanAge: "89 anos" },
    { catAge: 20, humanAge: "93 anos" },
    { catAge: 21, humanAge: "96 anos" },
    { catAge: 22, humanAge: "99 anos" },
    { catAge: 23, humanAge: "103 anos" },
  ];

  const inputIdade = e.target.querySelector('#idade');
  const idade = Number(inputIdade.value);

  if (idades.map((cat) => {
    if (cat.catAge === idade) {
      console.log(cat.humanAge);
    }
  }));

  if (idade > 23) {
    console.log('Seu gato é uma múmia!');
  };

  if (idade < 1) {
    console.log('Coloque um número válido');
  };

});