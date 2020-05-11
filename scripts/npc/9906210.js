var items = [1004830, 1004831, 1004834, 1004870, 1004884, 1004949, 1005000, 1005001, 1005002, 1005003, 1005004, 1005005, 1005135, 1005136, 1005137, 1005138, 1005158, 1005159, 1005160, 1005160, 1005161, 1005162, 1005163, 1005164, 1005174, 1005176, 1005177, 1005179, 1005186, 1005188, 1005189, 1005237, 1004591, 1004592, 1004589, 1004547, 1004543, 1004503, 1004471, 1004480, 1004469, 1004450, 1004384, 1004180];
var stats = [2500, 5000, 10000, 15000, 20000, 30000];
var points = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
var text2 = " #b#eGood choice!#n#k \r\n Enjoy And thanks For Supporting #r#eMapleRetro! ";
var text3 = "You don't have enough #r#eDonationPoints.";

function start() {
    var text1 = "Hey #b#e"+cm.getPlayer().getName()+",#k#n You currently have #b#e"+cm.getDonationPoints()+" DP#k #n \r\n Im the one who can Sell #b#e\r\nNew V200+ NX Equips#k#n Here in #r#eMapleRetro#e. \r\n #n#kWhat would you like to purchase with your DP? #b";
    for (i = 0;i < items.length; i++)
        text1 += "\r\n#L" + i + "#. #i" + items[i] + "# #z" + items[i] + "# - #r#e" + points[i] + " DP#n#b."; // \r\n is for each item, because when i tested one of my other npc's out... It went all over the place without a \r\n. 
    cm.sendSimple(text1);
}

function action(mode, type, selection) {
    if (mode == 1) {
           if (cm.canHold(1004830) && cm.getDonationPoints() >= points[selection]) {
               cm.gainDonationPoints(-points[selection]);
               cm.setDonationPoints();
            cm.gainItem(items[selection], 1);
            cm.sendOk(text2);
        cm.dispose();
        } else {
        cm.sendOk("It looks like you don't have enough space in your #rEQUIP#k inventory to hold the item\r\n or you dont have enough #e#rDonorPoints#");
        cm.dispose();
}
        } else {
cm.dispose(); 
}
}