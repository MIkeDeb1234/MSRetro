var status = -1;
var item = [[1072427, 1072428,1072429,1072430,1072431,1072432], [1002225] , [1082101, 1051131,1050119,1001036,1000026]];
var rand = Math.floor(Math.random()*100);
var rand2;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
     if (mode == -1) {
        cm.dispose();
    }else{
    if (status >= 2 && mode == 0) {
        cm.sendOk("See you next time!.");
        cm.dispose();
        return;                    
    }
}

    if (mode == 1) {
        status++;
    }else{
        status--; 
    }
    if (status == 0) {
        cm.sendYesNo("#eHello #e#d"+cm.getPlayer().getName()+"#k,\r\n Are you here to exchange the books you have collected?\r\n#n#i04161043# #i04161038# #i04161039# #i04161040# #i04161041# #i04161042#");
    } else if (status == 1) {
	    if (cm.haveItem(4161043) && cm.haveItem(4161038) && cm.haveItem(4161039) && cm.haveItem(4161040)&& cm.haveItem(4161041)&& cm.haveItem(4161042)){
        cm.gainItem(4161043,-1);cm.gainItem(4161038,-1);cm.gainItem(4161039,-1);cm.gainItem(4161040,-1);cm.gainItem(4161041,-1);cm.gainItem(4161042,-1);
        if ((rand >= 1) && (rand <= 15)) {
            rand2 = Math.floor(Math.random() * item[0].length);
        } else if ((rand >= 16) && (rand <= 60)) {
            rand2 = Math.floor(Math.random() * item[1].length);
        }else{
            rand2 = Math.floor(Math.random() * item[2].length);
            }
            cm.gainItem([rand >= 1 && rand <= 15 ? item[0][rand2] : rand >= 16 && rand <= 60 ? item[1][rand2] : item[2][rand2]]);
            cm.sendOk("Ho Ho Ho Merry Christmas!");
            cm.dispose();
        } else {
            cm.sendOk("Santa is putting you in his naughty list for lying you do not have the books!");
	    cm.dispose();
        }
    }
    }
