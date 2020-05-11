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
 * @Name         NimaKIN
 * @Author:      Signalize
 * @Author:      MainlandHero - repurposed to be the style setter in-game for mesos
 * @NPC:         9900000
 * @Purpose:     Hair/Face/Eye Changer
 * @Map:         180000000
 */
var status = 0;
var beauty = 0;
var haircolor = Array();
var skin = [0, 1, 2, 3, 4, 5, 9, 10];
var hairmv = [30850, 30860, 30870, 30880, 30890, 30900, 30910, 30930, 30940, 30950, 30990, 33000, 33050, 33060, 33100, 33110, 33120, 33130, 33150, 33170, 33190, 33210, 33220, 33240, 33250, 33280, 33290, 33390, 35050, 35060, 35090, 35100, 35150, 35180, 35200, 35260, 35280, 35290, 35310, 35330, 35350, 35360, 35420, 35430, 35440, 35470, 35510, 35520, 35530, 35560, 35500, 35600, 35620, 35640, 35650, 35660, 35670, 35680, 35690, 35700, 35710, 35720, 35740, 35780, 35790, 36010, 36020, 36030, 36040, 36060, 36070, 36080, 36100, 36110, 36260, 36260, 36270, 36700, 36750, 37160, 31700];
var fhairv = [35710, 35780, 36050, 36090, 36100, 36750, 37000, 37010, 37020, 37030, 37040, 37060, 37070, 37080, 37090, 37100, 37100, 37110, 37120, 37130, 37140, 37150, 37190, 37210, 37220, 37230, 37240, 37250, 37270, 37280, 37290, 37300, 37310, 37320, 37340, 37350, 37370, 37380, 37400, 37450, 37460, 37490, 37500, 37510, 37520, 37530, 37500, 37560, 37570, 37580, 37590, 37600, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37680, 37690, 37700, 37710, 37720, 37740, 37750, 37760, 37770, 37780, 37790, 37800, 37810, 37820, 37830, 37840, 37850, 37860, 37880, 37910, 37920, 37940, 37950, 37960, 37970, 37980, 37990, 38000];
var hairnewv = Array();
var fhair= [35710, 35780, 36050, 36090, 36100, 36750, 37000, 37010, 37020, 37030, 37040, 37060, 37070, 37080, 37090, 37100, 37100, 37110, 37120, 37130, 37140, 37150, 37190, 37210, 37220, 37230, 37240, 37250, 37270, 37280, 37290, 37300, 37310, 37320, 37340, 37350, 37370, 37380, 37400, 37450, 37460, 37490, 37500, 37510, 37520, 37530, 37500, 37560, 37570, 37580, 37590, 37600, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37680, 37690, 37700, 37710, 37720, 37740, 37750, 37760, 37770, 37780, 37790, 37800, 37810, 37820, 37830, 37840, 37850, 37860, 37880, 37910, 37920, 37940, 37950, 37960, 37970, 37980, 37990, 38000];
var hair = [30850, 30860, 30870, 30880, 30890, 30900, 30910, 30930, 30940, 30950, 30990, 33000, 33050, 33060, 33100, 33110, 33120, 33130, 33150, 33170, 33190, 33210, 33220, 33240, 33250, 33280, 33290, 33390, 35050, 35060, 35090, 35100, 35150, 35180, 35200, 35260, 35280, 35290, 35310, 35330, 35350, 35360, 35420, 35430, 35440, 35470, 35510, 35520, 35530, 35560, 35500, 35600, 35620, 35640, 35650, 35660, 35670, 35680, 35690, 35700, 35710, 35720, 35740, 35780, 35790, 36010, 36020, 36030, 36040, 36060, 36070, 36080, 36100, 36110, 36260, 36260, 36270, 36700, 36750, 37160, 31700];
var hairnew = Array();
//Male Donor Faces V1
var face = [ 23000, 23001, 23002, 23003, 23004, 23005, 23006, 23007, 23008 ,23010 ,23011 ,23012 ,23015 ,23016 ,23017 ,23018 ,23019, 23020, 23023, 23024, 23025, 23026, 23027, 23028, 23029, 23030, 23031, 23032, 23033, 23034, 23035, 23038, 23039, 23040, 23042, 23043, 23044, 23053, 23054, 23056, 23057, 23059, 23060, 23061, 23062, 23063, 23067, 23068, 23069, 23072, 23073, 23074, 233075, 23079, 23080, 23081, 23082, 23092, 25006, 25007, 25009, 25010, 25026,25030, 26002, 26003, 26004, 26005, 26006, 26007, 26008, 26009, 26010, 26011, 26012, 26013, 26014, 26015, 26016, 26017, 26018, 26019, 26020, 26020, 26022, 26023, 26024, 26025, 26026, 26027, 26028, 26029, 26030, 26031, 26032, 26033, 260034, 26035, 26036, 26037, 26038, 26039, 26040, 26041, 26042];
//V1 Donor Female Face V1
var fface = [21033,21034,21035,21036,21038,21041,21042,21043,21044,21045,21046,21047,21048,21049,21050,21052,21053,21054,21055,21056,21057,21058,21059,21060,21061,21062,21063,21064,21065,21066,21067,21068,21069,21070,21071,21072,21073,21074,21075,21076,21077,21078,21079,21080,21081,21082,21083,21084,21085,21086,21087,21088,21089,21090,21091,21092,21093,21094,21095,21096,21097,21098,24001,24002,24003,24004,24007,24008,24011,24012,24013,24014,24015,24016,24017,24018,24019,24020,24021,24022,24023,24024,24025,24026,24027,24028,24029,24031,24035,24036,24037,24038,24039,24040,24041,24050,24051,24053,24054,24055,24058,24059,24060,24062,2406426002,26003,26004,26005,26006,26007,26008,26009,26010,26011,26012,26013,26014,26015,26016,26017,26018,26019,26020,26020,26022,26023,26024,26025,26026,26027];
var facenew = Array();
// Male Donor Faces V2
var dmface = [26043,26044,26045,26046,26047,26048,26049,26050,26051,26052,26053,26054,26055,26056,26057,26058,26059,26060,26061,26062,26063,26064,26065,26066,26067,26073,26074,26075,26073,26077,26078,26079,26080,26081,26068,26083,26084,26085,26086,26089,26090,26091,26094,26095,26096,26097,26099,26880,26881,26884,26885,26886,26889,26890,26894,26895,26896,26899,27006,27007,27008,27009,27010,27011,27013,27014,27015,27016,270017,27018,27019,27020,27021,27022,27023,27024,27025,27036,27037,27040,27041,28000,28001,28008,28009,28011,28012,28013,28014,28015,28016,28017,28019,28020,28021,28022,28023,28024,28025,28026,28027,28028,28029,28030,28042,28043,28045,28046];
//V2 Donor Female Faces V2
var dfface = [26028,26029,26030,26031,26032,26033,26034,26035,26036,26037,26038,26039,26040,26041,26042,26043,26044,26045,26046,26047,26048,26049,26050,26051,26052,26053,26054,26055,26056,26057,26058,26059,26060,26061,26062,26063,26064,26065,26066,26067,26073,26074,26075,26073,26077,26078,26079,26080,26081,26068,26083,26084,26085,26086,26089,26090,26091,26094,26095,26096,26097,26099,26880,26881,26884,26885,26886,26889,26890,26894,26895,26896,26899,27006,27007,27008,27009,27010,27011,27013,27014,27015,27016,270017,27018,27019,27020,27021,27022,27023,27024,27025,27036,27037,27040,27041,28000,28001,28008,28009,28011,28012,28013,28014,28015,28016,28017,28019,28020,28021,28022,28023,28024,28025,28026,28027,28028,28029,28030,28042,28043,28045,28046];
var dface = Array();
var colors = Array();
var price = 10;
var item = 5150044;

function pushIfItemExists(array, itemid) {
    if ((itemid = cm.getCosmeticItem(itemid)) != -1 && !cm.isCosmeticEquipped(itemid)) {  // thanks Conrad for noticing NPC crashing the player when trying to display inexistent cosmetics
        array.push(itemid);
    }
}

function start() {
    if(cm.getPlayer().gmLevel() < 0) {
        cm.sendOk("Hey wassup?");
        cm.dispose();
        return;
    }
    
	if(cm.getPlayer().isMale()){
		cm.sendSimple("#eHey there #b#eDonator, #kyou can change your look for:\r\n #i" + item + "# #r#e#z" + item + "#. #n#kWhat would you like to change?\r\n \r\n#e#L0##bSkin#l\r\n#b#e#L7#Donor male Hair#l\r\n#k#L2##bHair Color#l\r\n#L3##b#eDonor Male Eyes#l\r\n#L9##b#eDonor Male Eyes V2#l\r\n#L4##bEye Color#l\r\n\r\n\r\n#rNOTE:  #e#k \r\nyou can purchase#i" + item + "# #e from Donator Points NPC \r\n#b(Claw Machine) #k at FM or by using: #b@dpnpc");
	}else{
		cm.sendSimple("#eHey there #b#eDonator, #kyou can change your look for:\r\n #i" + item + "# #r#e#z" + item + "#. #n#kWhat would you like to change?\r\n \r\n#e#L0##bSkin#l\r\n#b#e#L8#Donor Female Hair#l\r\n#k#L2##bHair Color#l\r\n#L6##b#eDonor Female Eyes#l\r\n#L10##b#eDonor Female Eyes V2#l\r\n#L4##bEye Color#l\r\n\r\n\r\n#rNOTE:  #e#k \r\nyou can purchase#i" + item + "# #e from Donator Points NPC \r\n#b(Claw Machine) #k at FM or by using: #b@dpnpc");
	}
}

function action(mode, type, selection) {
    status++;
    if (mode != 1 || cm.getPlayer().gmLevel() < 0){
        cm.dispose();
        return;
    }
    if (status == 1) {
        beauty = selection + 1;
		if(cm.getMeso() > price){
			if (selection == 0) {
				cm.sendStyle("Choose your new Skin!", skin);
			} else if (selection == 1 || selection == 5) {
				for each(var i in selection == 1 ? hair : fhair)
					pushIfItemExists(hairnew, i);
				cm.sendStyle("Choose your new Hair!", hairnew);
		    } else if (selection == 7 || selection == 8) {
				for each(var i in selection == 7 ? hairmv : fhairv)
					pushIfItemExists(hairnewv, i);
				cm.sendStyle("Choose your new Hair!", hairnewv);
			} else if (selection == 2) {
				var baseHair = parseInt(cm.getPlayer().getHair() / 10) * 10;
				for(var k = 0; k < 8; k++)
					pushIfItemExists(haircolor, baseHair + k);
				cm.sendStyle("Choose your new Face!", haircolor);
			} else if (selection == 3 || selection == 6) {
				for each(var j in selection == 3 ? face : fface)
					pushIfItemExists(facenew, j);
				cm.sendStyle("Choose your new Face!", facenew);
			} else if (selection == 9 || selection == 10) {
				for each(var k in selection == 9 ? dmface : dfface)
					pushIfItemExists(dface, k);
				cm.sendStyle("Choose your new Face!", dface);
			} else if (selection == 4) {
				var baseFace = parseInt(cm.getPlayer().getFace() / 1000) * 1000 + parseInt(cm.getPlayer().getFace() % 100);
				for(var i = 0; i < 9; i++)
					pushIfItemExists(colors, baseFace + (i*100));
				cm.sendStyle("Choose your new Eye Color!", colors);
			
			} else {
				cm.sendNext(" Sorry to say this, but without #i" + item + "##r#e#z" + item + "# , #n#kyou won't be able to change your look!");
				cm.dispose();
			}
		}
        
       } else if (status == 2){
        if (cm.haveItem(5150044) && beauty == 1){
            cm.setSkin(skin[selection]);
			cm.gainItem(item, -1);
		}
        if (cm.haveItem(5150044) && beauty == 8 || cm.haveItem(5150044) &&  beauty == 9){
            cm.setHair(hairnewv[selection]);
			cm.gainItem(item, -1);
		}
        if (cm.haveItem(5150044) && beauty == 2 ||cm.haveItem(5150044) &&  beauty == 6){
            cm.setHair(hairnew[selection]);
			cm.gainItem(item, -1);
		}
        if (cm.haveItem(5150044) && beauty == 3){
            cm.setHair(haircolor[selection]);
			cm.gainItem(item, -1);
		}
        if (cm.haveItem(5150044) && beauty == 4 || cm.haveItem(5150044) && beauty == 7){
            cm.setFace(facenew[selection]);
			cm.gainItem(item, -1);
		}
		if (cm.haveItem(5150044) && beauty == 10 ||cm.haveItem(5150044) && beauty == 11){
            cm.setFace(dface[selection]);
			cm.gainItem(item, -1);
		}
        if (cm.haveItem(5150044) && beauty == 5){
            cm.setFace(colors[selection]);
			cm.gainItem(item, -1);
        		}
		
        cm.dispose();
    }
}