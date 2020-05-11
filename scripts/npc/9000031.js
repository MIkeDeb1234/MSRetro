var no = "#e#rYou do not have the required materials to create this item!";
var yes = "#e#rEnjoy!";
var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("#e#kOkay, hope to see you again!");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("#e#k Hey there!#r you got any  ITCG for me?!");
    } else if (status == 1) {
        cm.sendSimple("#e#bChoose a item below to Make!\r\n#r Make sure you have the right materials to create the item!\r\n #b#e#L0# Make #z1072344# #i1072344# #l \r\n\r\n #rMaterials: \r\n 50x #i4000021# \r\n3x #i4011001#\r\n 1x #i4031755#\r\n 1x #i4031759#\r\n1x #i4031913#\r\n 100x #i4000030#\r\n\r\n #b#L1# Make #z1082223# #i1082223# #l\r\n\r\n #rMaterials: \r\n 30x #i4000021#\r\n 1x #i4031755#\r\n 1x #i4031759#\r\n 1x #i4031917#\r\n 5x #i4005000#\r\n\r\n #b#L2#  Make #z2070016# #i2070016# #l\r\n\r\n #rMaterials: \r\n 1x #i4031760# \r\n1x #i4031917#\r\n 1x #i2070006#\r\n\r\n #b#L3# Make #z2070018# #i2070018# #l\r\n\r\n #rMaterials: \r\n 1x #i4031754# \r\n1x #i4032017#\r\n 1x #i2070006#\r\n 1x #i4032016#\r\n 1x #i4032015#\r\n");
    }else if (status == 2) {
        if (selection == 0) {
           if (cm.haveItem(4000021, 50) && cm.haveItem(4011001, 3) && cm.haveItem(4031755, 1) && cm.haveItem(4031913, 1) && cm.haveItem(4000030, 100)) {
    cm.gainItem(4000021, -50);
    cm.gainItem(4011001, -1);
    cm.gainItem(4031755, -1);
    cm.gainItem(4031913, -1);
    cm.gainItem(4000030, -100);
        cm.gainItem(1072344, 1);
                cm.sendOk(yes); 
                cm.dispose();
            }else{
                cm.sendOk(no); 
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.haveItem(4000021, 30) && cm.haveItem(4031755, 1) && cm.haveItem(4031917, 1) && cm.haveItem(4031759, 1) && cm.haveItem(4005000, 5)) {
    cm.gainItem(4000021, -30);
    cm.gainItem(4031755, -1);
    cm.gainItem(4031917, -1);
    cm.gainItem(4031759, -1);
    cm.gainItem(4005000, -5);
        cm.gainItem(1082223, 1);
                cm.sendOk(yes); 
                cm.dispose();
            }else{
                cm.sendOk(no);
                cm.dispose();
            }
} else if (selection == 2) {
           if (cm.haveItem(4031917, 1) && cm.haveItem(2070006, 1) && cm.haveItem(4031760, 1)) {
    cm.gainItem(4031917, -1);
    cm.gainItem(4031760, -1);
    cm.gainItem(2070006, -1);
        cm.gainItem(2070016, 1);
                cm.sendOk(yes); 
                cm.dispose();
            }else{
                cm.sendOk(no);
                cm.dispose();
}
 } else if (selection == 3) {
            if (cm.haveItem(4032017, 1) && cm.haveItem(4032016, 1) && cm.haveItem(4031754, 1) && cm.haveItem(4032015, 1)) {
    cm.gainItem(4032017, -1);
    cm.gainItem(2070006, -1);
    cm.gainItem(4031754, -1);
    cm.gainItem(4032016, -1);
    cm.gainItem(4032015, -1);
        cm.gainItem(2070018, 1);
                cm.sendOk(yes); 
                cm.dispose();
            }else{
                cm.sendOk(no);
                cm.dispose();
            }
        }
    }
} 