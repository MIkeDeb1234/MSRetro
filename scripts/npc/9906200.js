/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Rooney
	Map Name (Map ID)
	Used to exchange VP for Gulliveria Coins, and Gulliveria Coins for rewards.
 */

var itemToUse = 4310000;

var chairs = new Array(3010000, 3010001, 3010002, 3010003, 3010004, 3010005, 3010006, 3010007, 3010008, 3010009, 3010010, 3010011, 3010012, 3010013, 3010015, 3010016, 3010017, 3010018, 3010019, 3010022, 3010023, 3010024, 3010025, 3010026, 3010028, 3010040, 3010041, 3010043, 3010045, 3010046, 3010047,3010057,3010058,3010060,3010061,3010062,3010063, 3010064,3010065,3010066,3010067,3010069,3010071,3010072,3010073,3010080,3010081,3010082,3010083, 3010084,3010085,3010097,3010098,3010099,3010101,3010106,3010116,3011000,3012005,3012010,3012011);
var scrolls = new Array(2040603,2044503,2041024,2041025,2044703,2044603,2043303,2040807,2040806,2040006,2040007,2043103,2043203,2043003,2040506,2044403,2040903,2040709,2040710,2040711,2044303,2043803,2040403,2044103,2044203,2044003,2043703);
var weapons = new Array(5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000, 5450000);

var nxAmount = 3000;
var chairAmount = 2;
var weaponAmount = 30;
var buffAmount = 2;
var doubleExpLength = 4;
var doubleDropLength = 4;
var permMerchantLength = 0;
var hiredMerchantLength = 7;

var buff1ID = 2022273;
var buff2ID = 2022179;
var status;
var vp;
var choice;
 
function start() {
	//vp = cm.getplayer.getClient().getVotePoints();
	//if(vp == null)
		vp = cm.getClient().getVotePoints();
	
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0 && mode == 1) {
			if(cm.getPlayer().getLevel() < 1) {
				cm.sendOk("Hello, I am the Vote Point exchanger for #rMapleRetro#k!\r\n\r\nI am sorry, but I can only exchange Vote Points for players #blevel 20 or over#k.");
				cm.dispose();
				return;
			}
			var outStr = "#eHello #e#d"+cm.getPlayer().getName()+"#k,\r\n#k #b#eRetro#k Told me to Stay here and give All the #r#eOld#k players the #n#b#z1142144#\r\n ";
                        outStr += "#L7##bi want to obtain my #r#i1142144# #z1142144#!#l\r\n\r\n";
			cm.sendSimple(outStr);
		} else if(status == 1) {
			choice = selection;
			
			if(selection > 0) {
				if(cm.getPlayer().getLevel() < 1) {
					cm.sendOk("#e#rI'm sorry, but you don't have any Vote Points or #i4310000# to Use");
					cm.dispose();
					return;
				}
			}
			
			if(selection == 0) {
				// Exchange VP for leaves
				if(vp <= 0) {
					cm.sendOk("I'm sorry, but you don't have any Vote Points to exchange!");
					cm.dispose();
					return;
				}
				cm.sendYesNo("Would you like to exchange " + vp + " Vote Point" + (vp > 0 ? "" : "") + " for " + vp + " #t" + itemToUse + "# " + (vp > 0 ? "s" : "") + "?");
			} else if(selection == 1) {
				// Exchange 1 Coins for Cash
				cm.sendYesNo("#eWould you like to exchange #r1#k Vote Points for " + nxAmount + " NX Cash?");
			} else if(selection == 2) {
				// Exchange 1 Vote point for Chairs
				cm.sendYesNo("#eWould you like to exchange #r1#k Vote Points for " + chairAmount + " Random Chair" + (chairAmount > 1 ? "s" : "") + "?");
			} else if(selection == 3) {
				// Exchange 3 Coin for Miu Miu
				cm.sendYesNo("#eWould you like to exchange #r3#k Vote Points for " + weaponAmount + "  #z5450000#?");
			} else if(selection == 4) {
				// Exchange 1 Leaf for Apples/Cheese
				cm.sendYesNo("#eWould you like to exchange #r9#k Vote Points  for " + buffAmount + " #t" + buff1ID + "# and #t" + buff2ID + "#?");
			} else if(selection == 5) {
				// Echange 10 coins for 2x EXP
				cm.sendYesNo("#eWould you like to exchange:  \r\n#k#e#r20#k Vote Points For #i5211048# #z5211048#");

			} else if(selection == 6) {
				// Echange 8 coins for 2x Drop
				cm.sendYesNo("#eWould you like to exchange:  \r\n#k#e#r16#k Vote Points For #i5360042# #z5360042#");
			} else if(selection == 7) {
				// Echange 5 coins/VP for Perma Merch
				cm.sendYesNo("#e#r Are you sure dont have #b#i1142144# #z1142144#?");

			} else {
				cm.dispose();
			}
		} else if(status == 2) {
			var useVP = false;
			if(!cm.hasItem(itemToUse) && vp > 0)
				useVP = true;
				
			if(choice == 0) {
				// VP Exchange
				if(!cm.canHold(itemToUse)) {
					cm.sendOk("It looks like you don't have enough space in your #rETC#k inventory to hold the #t" + itemToUse + "#" + (vp > 0 ? "s" : "") + ".");
					cm.dispose();
					return;
				}
				
				cm.getClient().useVotePoints(vp);
				cm.gainItem(itemToUse, vp);
				cm.dispose();
			} else if(choice == 1) {
				// Leaf for Cash
				if(useVP)
					cm.getClient().useVotePoints(1);
				else
					cm.gainItem(itemToUse, -1);
					
				cm.getPlayer().getCashShop().gainCash(1, nxAmount);
				cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have earned " + nxAmount + " NX"));
				cm.logLeaf(nxAmount + " NX");
				cm.dispose();

			} else if(choice == 2) {
				if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.SETUP).isFull(chairAmount)) {
					
					var chairStr = "";
					for(var i = 0; i < chairAmount; i++) {
						var chair = chairs[Math.floor(Math.random() * chairs.length)];
						cm.gainItem(chair, 1, true);
						chairStr += chair + " ";
					}
					
					if(useVP)
						cm.getClient().useVotePoints(1);
					else
						cm.gainItem(itemToUse, -1);
						
					cm.logLeaf("Chair ID: " + chairStr);
					cm.dispose();
				} else {
					cm.sendOk("Please make sure you have enough space to hold the items!");
				}

			} else if(choice == 3) {
				if(!cm.haveItem(5450000, 120)) {
                                if (cm.getVotePoints() >= 3)
					if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).isFull(1)){
						cm.gainItem(5450000, 30);
						
						if(useVP)
							cm.getClient().useVotePoints(3);
						else
							cm.gainItem(itemToUse, -3);
						
						cm.logLeaf("Maple Weapon IDs: " + 30);
						cm.dispose();
					} else {
						cm.sendOk("Please make sure you have enough space to hold these items!");
                                                cm.dispose();
					} else {
                                        cm.sendOk("Please make sure you have enough Vote Points!");
                                        cm.dispose();
					}
				} else {
					cm.sendOk("you already have #r#e120x #z5450000##k !");
                                        cm.dispose();
				}
                          cm.dispose();
			} else if(choice == 4) { //apples and cheese
                                if (cm.getVotePoints() >= 9)	
				if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull(2)) {
					cm.gainItem(buff1ID, buffAmount, true);
					cm.gainItem(buff2ID, buffAmount, true);
					if(useVP)
					cm.getClient().useVotePoints(9);
						else
					cm.gainItem(itemToUse, -9);
					cm.logLeaf(buffAmount + " cheeses and apples");
					cm.dispose();
				} else {
					cm.sendOk("Please make sure you have enough space to hold the items!");
					} else {
                                        cm.sendOk("Please make sure you have enough Vote Points!");
                                        cm.dispose();
				}
			} else if(choice == 5) {
				if(!cm.haveItem(5211048, 1)) {
                                 if (cm.getVotePoints() >= 10)	
					if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).isFull(1)){
						cm.gainItem(5211048, 1, false, true, 1000 * 60 * 60 * 4);
						
						if(useVP)
							cm.getClient().useVotePoints(20);
						else
							cm.gainItem(itemToUse, -20);
						
						cm.logLeaf(doubleExpLength + " Hours Double Exp Coupon");
						cm.dispose();
					} else {
						cm.sendOk("Please make sure you have enough space to hold these items!");
					} else {
                                        cm.sendOk("Please make sure you have enough Vote Points!");
                                        cm.dispose();
					}
				} else {
					cm.sendOk("I can't give you a #r#eRate Coupon #n#kif you already have one!");
				}
			} else if(choice == 6) {
				if(!cm.haveItem(5360042, 1)) {
                                if (cm.getVotePoints() >= 8)	
					if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).isFull(1)){
						cm.gainItem(5360042, 1, false, true, 1000 * 60 * 60 * 4);
						
						if(useVP)
							cm.getClient().useVotePoints(16);
						else
							cm.gainItem(itemToUse, -16);
						
						cm.logLeaf(doubleDropLength + " Hours Double Drop Coupon");
						cm.dispose();
					} else {
						cm.sendOk("Please make sure you have enough space to hold these items!");
                                                cm.dispose();
					} else {
                                        cm.sendOk("Please make sure you have enough Vote Points!");
                                        cm.dispose();
					}
				} else {
					cm.sendOk("I can't give you a #r#eRate Coupon #n#kif you already have one!");
                                        cm.dispose();
				}
			} else if(choice == 7) {
				if(!cm.haveItem(1142144, 1)) {
                                if (cm.getVotePoints() >= 0)
                                if (!cm.getPlayer().haveItemEquipped(1142144)) {
						cm.gainItem(1142144, 1);
						
						if(cm.getPlayer().getLevel() > 1)
							cm.getClient().useVotePoints(0);
						else
							cm.gainItem(itemToUse, 0);
						
						cm.logLeaf(hiredMerchantLength + " day hired merchant");
						cm.dispose();
					} else {
						cm.sendOk("#r#eLIER!#n#k \r\n I can't give you a #b#e#z1142144# #n#k if you already Equipped One!");
                                                cm.dispose();
					} else {
                                        cm.sendOk("Error PM Admin #r#eRohenn!");
                                        cm.dispose();
}
				} else {

					cm.sendOk("#r#eLIER!#n#k \r\n I can't give you a #b#e#z1142144#  #n#kif you already have one!");

			cm.dispose();
                   }

                }
} else {
			cm.dispose();
	}
}
}