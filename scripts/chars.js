let xCount = -2;
let yCount = 1;

class Char {

	constructor (c, x, y, s) {
		if (!caps) this.c = c.toLowerCase();
		else this.c = c;
		xCount++;
		if (dispChars.length > 0 && dispChars[xCount].x < cnv.width-30) this.x = dispChars[xCount].x + textWidth(dispChars[xCount])*0.15;
		else {
			this.x = 0;
			yCount++;
		}
		this.y = y * yCount;
		this.s = s;
	}

	display () {
		if (this.s == 0) textFont(fonts[2]);
		else if (this.s == 1) textFont(fonts[1]);
		else if (this.s == 2) textFont(fonts[0]);
		text(this.c, this.x, this.y);
	}

}
