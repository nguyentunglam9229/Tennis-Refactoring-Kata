let scoreMap = ['Love', 'Fifteen', 'Thirty', 'Forty'];
var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.isBalance = function () {
    return this.P1point === this.P2point;
}

TennisGame2.prototype.getBalanceScore = function () {
    if(this.P1point <= 2) {
        return scoreMap[this.P1point] + '-All';
    } else {
        return 'Deuce';
    }
};

TennisGame2.prototype.getRegularScore = function () {
    return scoreMap[this.P1point] + '-' + scoreMap[this.P2point];
};

TennisGame2.prototype.isRegularScore = function () {
    return (this.P1point !== this.P2point && this.P1point < 4 && this.P2point < 4);
};

TennisGame2.prototype.isAdvantage = function () {
    return this.P1point !== this.P2point && this.P1point >=3 && this.P2point >= 3 && Math.abs(this.P2point - this.P1point) <= 1;
};

TennisGame2.prototype.getLeadingPlayer = function () {
    return this.P1point > this.P2point ? this.player1Name : this.player2Name;
};

TennisGame2.prototype.getAdvantageScore = function() {
    return "Advantage " + this.getLeadingPlayer();
}

TennisGame2.prototype.getWinningScore = function () {
    return "Win for " + this.getLeadingPlayer();
};

TennisGame2.prototype.getScore = function() {

    if (this.isBalance()) {
        return this.getBalanceScore();
    }
    if(this.isRegularScore()) {
        return this.getRegularScore();
    }

    if (this.isAdvantage()) {
        return this.getAdvantageScore();
    }

    return this.getWinningScore();
};


TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}
