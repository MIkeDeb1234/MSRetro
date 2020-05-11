importPackage(Packages.tools); 
importPackage(Packages.server.life);

var status = 0;
var gettext;
var fee;
var namechange = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("Alright, See you soon!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("Oh Hey #e#b"+cm.getPlayer().getName()+"#k#n,\r\nYou currently have #b#e"+cm.getDonationPoints()+" DP#k #nWhat would you like to purchase with your DP?\r\n#b#L0#Character Option / Misc\r\n#L1#Chair Gachaphon Tickets\r\n#L2#Cosmetics\r\n#L3#Trade DP");
		} else if (status == 1) {
			if (selection == 0) {
			cm.sendSimple("#eCharacter / Misc : \r\n#r(Permanent)\r\n#L0#Buy Donor Status for this Character #b(10DP)\r\n\r\n#L2# #r#i5150044# #z5150044# #b(1DP)\r\n\r\n#L3# #r#i5030000# #z5030000# #b(10DP)\r\n\r\n");
			}
			if (selection == 1) {
			cm.sendSimple("With this Ticket you have the chance to get amazing chairs.\r\n #r#eCan only Obtain With Donation Points OR IN GM Events.#n#k \r\n#e#L100##i5220010# #r#e1x#kGachaphon for slot machine. (10 DP) \r\n#e#L101##i5220010# #r#e2x#k Gachaphon for slot machine. (15 DP) \r\n#e#L102##i5220010# #r#e5x#k Gachaphon for slot machine. (40 DP)\r\n#e#L103##i5220010# #r#e10x#k Gachaphon for slot machine. (75 DP)");
                                  }
			if (selection == 2) {
			cm.sendSimple("The Available  #bDonor#k Cosmetics #e#r\r\n\r\n(All Permanent)#n#k : \r\n\r\n#e#L200##i1702585#Universal Transparent Weapon #b(10 DP)#k\r\n\r\n#L201##i1092064#Transparent Shield #b(5 DP)#k\r\n\r\n#L202##i1052446#Light Chiffon Dress #b(5 DP)#k\r\n\r\n#L203##i1051284#Magic Star Dress#r[F]#k #b(5 DP)#k\r\n\r\n#L204##i1022079#Clear Glasses #b(5 DP)#k\r\n\r\n#L205##v1702869##r(Uniqe)#kAutumn Lantern #b(15 DP)\r\n\r\n#k#L206##v1702565##r(Uniqe)#kDeath's Scythe #b(15 DP)\r\n\r\n#k#L207##v1052644##b(Rare)#kShadow Executer #b(10 DP)\r\n\r\n#k#L208##v1000079##b(Rare)#k Mad Doctor Bolt#r[M]#b(10 DP)\r\n\r\n#k#L209##v1002784# 'A' Cap#b(5 DP)");
			}
			if (selection == 3) {
			cm.sendSimple("#eHello, #e#b"+cm.getPlayer().getName()+"#k#n \r\n#ei can give you item to trade with others.\r\n #b#e1x #z3993002# = 10 DP #b#e\r\n#L250# #bTrade - #r10DP #b#eFor 1x #i3993002# #z3993002##l\r\n#L251# #bTrade - 1x  #i3993002# #z3993002# For #r10DP#l\r\n#b#e\r\n\r\n");
	                      }
		} else if (status == 2) {
			//----------------------------------------------------------------------------------------------------->Donor Items<-----------------------------------------------------------------------------------------//
			//1Chair Gachapon Ticket
			if (selection == 100) {
		        if (cm.getDonationPoints() >= 10) {	
			cm.gainDonationPoints(-10);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -10 DP");
			cm.gainItem(5220010, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}
			//2 Chair Gachapon Ticket
			}else if (selection == 101) {
				if (cm.getDonationPoints() >= 15) {	
			cm.gainDonationPoints(-15);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -15 DP");
			cm.gainItem(5220010, 2);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -15 DP"));
			cm.dispose();
				}
				else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}
			//5Chair Gachapon Ticket
			}else if (selection == 102) {
				if (cm.getDonationPoints() >= 40) {	
			cm.gainDonationPoints(-40);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -40 DP");
			cm.gainItem(5220010, 5);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -40 DP"));
			cm.dispose();
				}
				else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
				//10Chair Gachapon Ticket
			}else if (selection == 103) {
				if (cm.getDonationPoints() >= 75) {	
			cm.gainDonationPoints(-75);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -75 DP");
			cm.gainItem(5220010, 10);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -75 DP"));
			cm.dispose();
			}else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
			}
	
			//Cosmetics Start-----------------------------------------
			//Universal Transparent Weapon
			}else if (selection == 200) {
				if (cm.getDonationPoints() >= 10) {	
			cm.gainDonationPoints(-10);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -10 DP");
			cm.gainItem(1702585, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
				}
				else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
			//Transparent Shield
			}else if (selection == 201) {
		       if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -5 DP");
			cm.gainItem(1092064, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -5 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}
			//Light Chiffon Dress
			}else if (selection == 202) {
			if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -5 DP");
			cm.gainItem(1052446, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -5 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
			//Magic Star Dress
			}else if (selection == 203) {
			if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -5 DP");
			cm.gainItem(1051284, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -5 DP"));
			cm.dispose();
				} else {
		        cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
			//Clear Glasses
			}else if (selection == 204) {
			if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -5 DP");
			cm.gainItem(1022079, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -5 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();

				}	
                        //Autumn Lantern
			}else if (selection == 205) {
			if (cm.getDonationPoints() >= 15) {	
			cm.gainDonationPoints(-15);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -15 DP");
			cm.gainItem(1702869, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -15 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();

				}	
			//Death's Scythe
			}else if (selection == 206) {
			if (cm.getDonationPoints() >= 15) {	
			cm.gainDonationPoints(-15);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -15 DP");
			cm.gainItem(1702565, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -15 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();

				}	
			//Shadow Executer
			}else if (selection == 207) {
			if (cm.getDonationPoints() >= 10) {	
			cm.gainDonationPoints(-10);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -10 DP");
			cm.gainItem(1052644, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
			//Mad Doctor Bolt
			}else if (selection == 208) {
			if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -10 DP");
			cm.gainItem(1000079, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
			//'A' Cap
			}else if (selection == 209) {
			if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have lost -5 DP");
			cm.gainItem(1002784, 1);
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -5 DP"));
			cm.dispose();
				} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
				}	
			//--------------------------------------------------------------------------------------------------->Character Options<-------------------------------------------------------------------------------------//	
               //V.I.P Membership
		} else if (selection == 0) {
			if (cm.getDonationPoints() >= 10) {	
			cm.gainDonationPoints(-10);
                        cm.setDonationPoints();
                        cm.getPlayer().setGMLevel(1);  
			cm.getPlayer().dropMessage("You have lost -10 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
                             }
                 //Spirit Pendant
		} else if (selection == 1) {
			if (cm.getDonationPoints() >= 30) {	
			cm.gainDonationPoints(-30);
                        cm.setDonationPoints();
			cm.gainItem(1122017, 1); 
			cm.getPlayer().dropMessage("You have lost -30 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -30 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();

                           } 
                 //Style Coupon
		} else if (selection == 2) {
			if (cm.getDonationPoints() >= 1) {	
			cm.gainDonationPoints(-1);
                        cm.setDonationPoints();
			cm.gainItem(5150044, 1); 
			cm.getPlayer().dropMessage("You have lost -1 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -1 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
                         }
                      //Perma Merchant
		} else if (selection == 3) {
			if (cm.getDonationPoints() >= 10) {	
			cm.gainDonationPoints(-10);
                        cm.setDonationPoints();
			cm.gainItem(5030000, 1); 
			cm.getPlayer().dropMessage("You have lost -10 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
                         }
                      //ItemVac
		} else if (selection == 4) {
			if (cm.getDonationPoints() >= 5) {	
			cm.gainDonationPoints(-5);
                        cm.setDonationPoints();
			cm.gainItem(2211000, 1, false, true, 1000 * 60 * 60 * 6); 
			cm.getPlayer().dropMessage("You have lost -5 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -5 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();
                         }
//--------------------------------------------------------------------------------------------------->DP Trade<-------------------------------------------------------------------------------------//
                   //1 Luck Sack For 10DP
		} else if (selection == 250) {
			if (cm.getDonationPoints() >= 10) {	
			cm.gainDonationPoints(-10);
                        cm.setDonationPoints();
			cm.gainItem(3993002, 1); 
			cm.getPlayer().dropMessage("You have lost -10 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have lost -10 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough #rDP");
			cm.dispose();

                           } 	
                    //10DP For 1 Luck Sack
		} else if (selection == 251) {
			if (cm.haveItem(3993002)) {	
			cm.gainItem(3993002, -1); 
			cm.gainDonationPoints(10);
                        cm.setDonationPoints();
			cm.getPlayer().dropMessage("You have gained 10 DP");
		        cm.getPlayer().announce(Packages.tools.MaplePacketCreator.earnTitleMessage("You have gained 10 DP"));
			cm.dispose();
			} else {
			cm.sendOk("You do not have enough - #r#v3993002# #z3993002#");
			cm.dispose();
                        }
                }

	}
}
}