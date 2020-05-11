/*
	QUEST: Where's Violetta?
	NPC: none
*/

var status = -1;

Constants = {
    //Number of free inventory slots the player must have in each tab -- do not set this lower than 1.
    FreeInventory : 2
};

function start(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		qm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;


	if(status == 0){
		qm.sendAcceptDecline("Please help me!");
	}
	else if(status == 1){
		qm.sendNext("The #bPrime Minister#k is the one who plotted all this! Oh no! Here he comes...");
	}
	else if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		qm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;


	if(status == 0){
		qm.sendNext("Hurray! #b#h ##k you defeated the #bPrime Minister#k. \r\nHere is the #b#eMushroom Kingdom Guardian Medal!#k\r\n\r\n#i1142188##t1142188# ");
	}
	else if(status == 1){
		qm.gainItem(1142188, 1);
		qm.gainExp(15000);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}