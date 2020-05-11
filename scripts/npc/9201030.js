var items = [2022428, 1002867, 1002728, 1702832, 1702892, 1702904, 1702875, 1702168, 1702351, 1702848, 1702894, 1702008, 1702830, 1053399, 1053400, 3010101, 3018190, 3010045, 3015429, 3018123, 3018184, 5000114, 5000362, 5000265];
var stats = [2500, 5000, 10000, 15000, 20000, 30000];
var price = [1000, 11000, 14000, 10000, 9000, 9000, 10000, 9000, 8000, 8000, 9000, 4000, 9000, 5000, 5000, 7000, 10000, 7000, 9000, 8000, 11000, 15000, 15000, 15000];
var ice = 4032176;
var text2 = "Merry Christmas, and Thanks for Helping. ";
var text3 = "You don't have enough #i4032176##z4032176#.";

function start() {
    var text1 = "Hey #r#e"+cm.getPlayer().getName()+", #b#eMerry Christmas!#k#n.\r\n #bSanta#k sent me to give presents to every player in \r\n#r#eMapleRetro.#k#n \r\n #bSanta#k only ask for one thing that player's also do something nice for him and help #bSanta#k to collect Snow pieces so he can land on soft ice and keep giving presents over the world. #b";
    for (i = 0;i < items.length; i++)
        text1 += "\r\n#L" + i + "#. #i" + items[i] + "# #z" + items[i] + "# - " + price[i] + " #z4032176#."; // \r\n is for each item, because when i tested one of my other npc's out... It went all over the place without a \r\n. 
    cm.sendSimple(text1);
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.haveItem(ice, price[selection])) {
            cm.gainItem(ice, -price[selection]);
            cm.gainItem(items[selection], 1, false, true, 1000 * 999 * 999 * 999);
            cm.sendOk(text2);
        cm.dispose();
        } else {
            cm.sendOk(text3);
        }
        cm.dispose();
    }
        cm.dispose();     
} 
