let scoreMap = [
    'Love', 'Fifteen', 'Thirty', 'Forty'
]
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


TennisGame1.prototype.getScore = function() {
    let score = "";
    if (this.isBalance()) {
        score = this.getBalanceScore();

    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = this.getTieScore()
    } else {
        score = this.getRegularScore();
    }
    return score;

};

TennisGame1.prototype.isBalance = function() {
    return this.m_score1 === this.m_score2;
}

TennisGame1.prototype.getBalanceScore = function () {
    let score = '';
    if(this.m_score1 >= 3) {
        score = 'Deuce'
    } else {
        score = scoreMap[this.m_score1] + '-All';
    }
    return score;
}

TennisGame1.prototype.getRegularScore = function () {
    return scoreMap[this.m_score1] + '-' + scoreMap[this.m_score2];
}

TennisGame1.prototype.getTieScore = function () {
    let score = '';
    let minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = `Advantage ${this.player1Name}`;
    else if (minusResult === -1) score = `Advantage ${this.player2Name}`;
    else if (minusResult >= 2) score = `Win for ${this.player1Name}`;
    else score = `Win for ${this.player2Name}`;
    return score;
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
