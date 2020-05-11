var items = [1702457, 1702475, 1702504, 1702505, 1702529, 1702875, 1702530, 1702556, 1702848, 1702894, 1702557, 1702830, 1702565, 1702567, 1702576, 1702627, 1702585, 1702634, 1702676, 1702677, 1702690, 1702729, 1702745, 1702746, 1702747, 1702748, 1702749, 1702750, 1702752, 1702753, 1702755, 1702756, 1702757, 1702758, 1702759, 1702760, 1702761, 1702764, 1702765, 1702766, 1702767, 1702768, 1702769];
var stats = [2500, 5000, 10000, 15000, 20000, 30000];
var points = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var text2 = " #b#eGood choice!#n#k \r\n Enjoy And thanks For Supporting #r#eMapleRetro! ";
var text3 = "You don't have enough #r#eDonationPoints.";

function start() {
    var text1 = "Hey #b#e"+cm.getPlayer().getName()+",#k#n You currently have #b#e"+cm.getDonationPoints()+" DP#k #n \r\n Im the one who can Sell you The best #b#eNX Weapons#k#n Here in #r#eMapleRetro#e. \r\n #n#kWhat would you like to purchase with your DP? #b";
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