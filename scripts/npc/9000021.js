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
/* 9000021 - Gaga
    BossRushPQ recruiter
    @author Ronan
 */

var status;
 
sssfunction start() { // uncoded here << 
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            cm.sendNext("Hey, traveler! I am #p9000021#, Any clue what i can do for #r#eMapleRetro#n#k Server?.");
	} else if(status == 1) {
            cm.sendNext("what you think of ?");
        } else if(status == 2) {
            cm.sendAcceptDecline("Good Luck.");
        } else if(status == 3) {
            cm.sendOk("Very well. Remember, To Vote Every 15Hours to #r#eMapleRetro");
        } else if(status == 4) {
            //cm.getPlayer().saveLocation("BOSSPQ");
            //cm.warp(970030000, "out00");
            cm.dispose();
        }
    }
}