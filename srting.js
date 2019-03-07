<html>
	<head>
		<title> to ja </title>
	</head>
	<script>
		var greeting = '   Hello world!   ';
		console.log(greeting);
		// expected output: "   Hello world!   ";
		console.log(greeting.trim());
		// expected output: "Hello world!";
		
		var sentence = 'The quick brown fox jumps over the lazy dog.';
		console.log(sentence.toUpperCase());
		// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
		
		var sentence = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';
		console.log(sentence.toLowerCase());
		// expected output: "the quick brown fox jumps over the lazy dog."
		
		var str = 'Life, the universe and everything. Answer:';
		console.log(str + ' ' + str.length);
		// expected output: "Life, the universe and everything. Answer: 42"
		
		var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
		var regex = /dog/gi;
		console.log(p.replace(regex, 'ferret'));
		// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
		console.log(p.replace('dog', 'monkey'));
		// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
		
		var sentence = 'The quick brown fox jumps over the lazy dog.';
		var index = 4;
		console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
		// expected output: "The character at index 4 is q"
		
		var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
		var regex = /[A-Z]/g;
		var found = paragraph.match(regex);
		console.log(found);
		// expected output: Array ["T", "I"]		

		var str = 'Mozilla';
		console.log(str.substring(1, 3));
		// expected output: "oz"
		console.log(str.substring(2));
		// expected output: "zilla"
		
		var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
		var searchTerm = 'dog';
		var indexOfFirst = paragraph.indexOf(searchTerm);
		console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
		// expected output: "The index of the first "dog" from the beginning is 40"
		console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
		// expected output: "The index of the 2nd "dog" is 52"
		
		var str = 'The quick brown fox jumps over the lazy dog.';
		var words = str.split(' ');
		console.log(words[3]);
		// expected output: "fox"
		var chars = str.split('');
		console.log(chars[8]);
		// expected output: "k"
		var strCopy = str.split();
		console.log(strCopy);
		// expected output: Array ["The quick brown fox jumps over the lazy dog."]

	</script>
</html>	