var status;
var item = [[01062427, 01062428,01062429,01062430,01062431,01062432]/*5% Items*/, [01002225] /*20% Items*/, [01082101, 01051131,01050119,01001036,01000026]/*10% Items*/];
var rand = Math.floor(Math.random()*100);

function start() {
    status -1;
    action(1, 0, 0);
    if (cm.getPlayer().getLevel() >= 10) {
        cm.sendYesNo("#eHello #e#d"+cm.getPlayer().getName()+"#k,\r\n Are you here to exchange the books you have collected?\r\n#n#i04161043# #i04161038# #i04161039# #i04161040# #i04161041# #i04161042#");
    } else  {
        cm.sendSimple("An error has occured please contact a GM to fix this issue");
    }
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
    
    if (mode == 1) {
        status++;
    }else{
        status--;
    }
    
    if (status == 0) {
        cm.sendYesNo("#eHello #e#d"+cm.getPlayer().getName()+"#k,\r\n Are you here to exchange the books you have collected?\r\n#n#i04161043# #i04161038# #i04161039# #i04161040# #i04161041# #i04161042#");
    } else if (status == 1 && cm.getPlayer().getLevel() >= 10 && cm.haveItem(04161043, 1) && cm.haveItem(04161038, 1) && cm.haveItem(04161039, 1) && cm.haveItem(04161040, 1)&& cm.haveItem(04161041, 1)&& cm.haveItem(04161042, 1)) {
        cm.gainItem(04161043,-1);cm.gainItem(04161038,-1);cm.gainItem(04161039,-1);cm.gainItem(04161040,-1);cm.gainItem(04161041,-1);cm.gainItem(04161042,-1);
        var rand2;
        if ((rand >= 1) && (rand <= 15)) {
            rand2 = Math.floor(Math.random() * item[0].length);
        } else if ((rand >= 16) && (rand <= 75)) {
            rand2 = Math.floor(Math.random() * item[1].length);
        }else{
            rand2 = Math.floor(Math.random() * item[2].length);
            }
            cm.gainItem([rand >= 1 && rand <= 15 ? item[0][rand2] : rand >= 16 && rand <= 75 ? item[1][rand2] : item[2][rand2]]);
            cm.sendOk("Ho Ho Ho Merry Christmas!");
            cm.dispose();
        } else {
            cm.sendSimple("Santa is putting you in his naughty list for lying you do not have the books!");
        }
    }
    cm.dispose();
}