

let imie = window.prompt("wpisz imie");
console.log(imie)
let nazwisko = window.prompt("wpisz nazwisko");
console.log(nazwisko)
let telefon = window.prompt("wpisz telefon");
console.log(telefon)
let email = window.prompt("wpisz email");
console.log(email)

let tabela = `<table border=1>
						<tr>
							<td> Imie i nazwisko </td>
							<td> Telefon </td>
							<td> Email </td>
						</tr>
						<tr>
							<td>${imie} ${nazwisko}</td>
							<td>${telefon}</td>
							<td>${email}</td>
						</tr>
				</table>`;

let tresc = document.getElementById("tresc");
console.log(tresc);


tresc.innerHTML = tabela;