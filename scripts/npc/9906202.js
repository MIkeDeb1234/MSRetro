var items = [2022627, 2022628, 2022629, 2040741, 2040758, 2040759, 2040760, 2040822, 2048018, 2048019, 1002812, 2022273, 2022179, 2000026, 2022251, 1012070, 1132016, 1022073, 1022089, 1032060, 1132009, 1132013, 2049100, 2340000];
var stats = [2500, 5000, 10000, 15000, 20000, 30000];
var price = [75, 150, 220, 125, 320, 400, 375, 65, 1000, 1000, 10000, 150, 350, 1500, 75, 4500, 3500, 950, 1200, 600, 850, 3500, 550, 1500];
var coins = 4031682;
var text2 = "Enjoy your new item!. ";
var text3 = "You don't have enough #i4031682##z4031682#.";

function start() {
    var text1 = "Hello There, \r\n Im the #r#eOne#n#k that have the Power to Convert your \r\n#i4031682##z4031682# To Special Items! \r\n #b#n Use #z4031682# Wisely! #b";
    for (i = 0;i < items.length; i++)
        text1 += "\r\n#b#e#L" + i + "#. #i" + items[i] + "# #z" + items[i] + "# - #b#n" + price[i] + " #z4031682#."; // \r\n is for each item, because when i tested one of my other npc's out... It went all over the place without a \r\n. 
    cm.sendSimple(text1);
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.haveItem(coins, price[selection])) {
            cm.gainItem(coins, -price[selection]);
            cm.gainItem(items[selection]);
            cm.sendOk(text2);
        cm.dispose();
        } else {
            cm.sendOk(text3);
        }
        cm.dispose();
    }
        cm.dispose();     
} 
