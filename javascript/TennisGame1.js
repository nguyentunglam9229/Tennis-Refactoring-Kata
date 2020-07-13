let scoreMap = ['Love', 'Fifteen', 'Thirty', 'Forty']
let TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1Name)
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getRegularScore = function () {
    return scoreMap[this.m_score1] + '-' + scoreMap[this.m_score2];
}

TennisGame1.prototype.getLeadingPlayer = function() {
    return this.m_score1 > this.m_score2 ? this.player1Name : this.player2Name;
}

TennisGame1.prototype.hasAdvantage = function() {
    return (this.m_score1 >= 4 || this.m_score2 >= 4) && Math.abs(this.m_score1 - this.m_score2) === 1;
}

TennisGame1.prototype.hasWinner = function() {
    return (this.m_score1 >= 4 || this.m_score2 >= 4) && Math.abs(this.m_score1 - this.m_score2) > 1;
}

TennisGame1.prototype.getAdvantageScore = function() {
    return `Advantage ${this.getLeadingPlayer()}`
}

TennisGame1.prototype.getWinnerScore = function() {
    return `Win for ${this.getLeadingPlayer()}`
}

TennisGame1.prototype.getScoreEqual = function() {
    if(this.m_score1 < 3) {
        return scoreMap[this.m_score1] + '-All';
    } else {
        return 'Deuce';
    }
}

TennisGame1.prototype.isBalance = function () {
    return this.m_score1 === this.m_score2;
}

TennisGame1.prototype.getScore = function() {
    if (this.isBalance()) {
        return this.getScoreEqual()
    } else if (this.hasAdvantage()) {
        return this.getAdvantageScore();
    } else if (this.hasWinner()) {
        return this.getWinnerScore()
    } else {
        return this.getRegularScore();
    }
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
