# UWBHackathon-2020

HTML of home page, question HTML, final score HTML which asks for username and displays final score, High scores HTML page

Javascript that handles the quiz functionality, this appends the questions to the page, calculates score.

Design JSON layout that will store the questions (30 ish), this will contain the URL of the image/directory link if were downloading them. Also contains 4 options for each question, along with what the correct answer is. also store the highscores in the JSON file.


{
	name: questions
	{
		id: 1
		imageURL: oqiyweroiwqeroiy
		option1:asdffdf
		option2:asdfad
		option3:fdfd
		option4:asddf
		correctAnswer:2
	}
	{
		...
	}
}

{
	name: highscores
	{
		name: mitchell
		score: 23
	}
	{
		...
	}
}
